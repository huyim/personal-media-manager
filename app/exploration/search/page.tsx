'use client';

import type { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { TagGroup } from '@douyinfe/semi-ui';
import {
  GraphCanvas,
  RadialMenu,
  GraphCanvasRef,
  useSelection,
  useCollapse,
} from 'reagraph';

import { Dataset } from '../../../ui/category';

import React, { useContext, useEffect, useRef, useState } from 'react';
import { values } from 'underscore';

const BACKEND = 'http://localhost:8080/';
let nextId = 0;

const Home: NextPage = () => {
  const [queryLink, setQueryLink] = useState<string[]>([]);
  const [queryLinkedTags, setQueryLinkedTags] = useState<string[]>([]);

  const searchParams = useSearchParams();

  const tag = searchParams.get('tag');

  /** Import pre-defined dataset */
  let fullTags = [];
  for (let i = 0; i < Dataset.length; i++) {
    const len2 = Dataset[i].children?.length;
    for (let j = 0; j < len2; j++) {
      const len3 = Dataset[i]?.children[j]?.children?.length;
      if (len3 !== undefined) {
        for (let k = 0; k < len3; k++) {
          // @ts-ignore
          const tagSpecial = Dataset[i].children[j].children[k].value;
          fullTags.push(
            Dataset[i].value +
              ',' +
              Dataset[i].children[j].value +
              ',' +
              tagSpecial,
          );
        }
      } else {
        fullTags.push(Dataset[i].value + ',' + Dataset[i].children[j].value);
      }
    }
  }

  /** Get tag name in system */
  let queryTag = '';
  for (let i = 0; i < fullTags.length; i++) {
    if (tag !== null) {
      if (fullTags[i].toLowerCase().includes(tag)) {
        queryTag = fullTags[i];
      }
    }
  }

  useEffect(() => {
    async function query() {
      let options = {
        method: 'POST',
        body: JSON.stringify({
          s: [],
          p: ['<https://schema.org/category>'],
          o: [queryTag + '^^String'],
        }),
      };

      try {
        let response = await fetch(BACKEND + 'query/quads', options);

        if (response == undefined) return;
        let data = await response.json();

        /**Get all links contained queried tag */

        data.results.forEach(async (res: any) => {
          let options = {
            method: 'POST',
            body: JSON.stringify({
              s: [res.s],
              p: ['<https://schema.org/category>'],
              o: [],
            }),
          };

          try {
            let response = await fetch(BACKEND + 'query/quads', options);

            if (response == undefined) return;
            let data = await response.json();

            data.results.forEach((res: any) => {
              // Get related tags
              if (res.o.replace('^^String', '') !== queryTag) {
                setQueryLinkedTags((prevQuery) => [
                  ...prevQuery,
                  res.o.replace('^^String', ''),
                ]);
              }
            });
          } catch (error: any) {
            console.log(error);
          }

          setQueryLink((prevQuery) => [
            ...prevQuery,
            res.s.replace('<', '').replace('>', ''),
          ]);
        });
      } catch (error: any) {
        console.log(error);
      }
    }
    query();
  }, []);

  console.log(queryLinkedTags);

  // Tags
  let tagList = [{ color: 'green', children: tag }];

  const divStyle = {
    backgroundColor: 'var(--semi-color-fill-0)',
    height: 35,
    width: 900,
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    marginBottom: 30,
  };
  const tagGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    width: 350,
  };

  // Graphs
  const nodes = [
    {
      id: '1',
      label: tag,
      fill: 'green',
    },
    {
      id: '2',
      label: 'Time',
    },
    {
      id: '3',
      label: 'Locations',
    },
    {
      id: '4',
      label: 'People',
    },
    {
      id: '5',
      label: 'Events',
    },
    {
      id: '31',
      label: 'Zurich',
    },
    {
      id: '32',
      label: 'Geneva',
    },
    {
      id: '33',
      label: 'Basel',
    },
  ];

  const edges = [
    {
      source: '1',
      target: '2',
      id: '1-2',
      label: 'when?',
    },
    {
      source: '1',
      target: '3',
      id: '1-3',
      label: 'where?',
    },
    {
      source: '1',
      target: '4',
      id: '1-4',
      label: 'who?',
    },
    {
      source: '1',
      target: '5',
      id: '1-5',
      label: 'what?',
    },
    {
      source: '3',
      target: '31',
      id: '3-31',
    },
    {
      source: '3',
      target: '32',
      id: '3-32',
    },
    {
      source: '3',
      target: '33',
      id: '3-33',
    },
  ];

  const graphRef = useRef<GraphCanvasRef | null>(null);
  // const { selections, onNodeClick, onCanvasClick } = useSelection({
  //   ref: graphRef,
  //   nodes: nodes,
  //   edges: edges,
  //   type: 'multi',
  //   selections: [nodes[0].id],
  // });
  const [collapsedNodeIds, setCollapsedNodeIds] = useState<string[]>(['3']);

  const { getExpandPathIds } = useCollapse({
    collapsedNodeIds,
    nodes,
    edges,
  });

  function onExpandClick() {
    // Use the helper method to determine the ids to expand
    setCollapsedNodeIds(getExpandPathIds('3'));
    tagList.push({ color: 'green', children: 'city' });
  }

  return (
    <div>
      <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
        <div style={divStyle}>
          <TagGroup
            maxTagCount={3}
            style={tagGroupStyle}
            tagList={tagList}
            size="large"
          />
        </div>

        <Link
          href={{
            pathname: '/exploration/display',
            query: { queries: tag },
          }}
        >
          <button className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-500 disabled:bg-gray-200 md:w-auto md:text-base">
            Explore
          </button>
        </Link>
      </div>
      <div style={{ position: 'fixed', width: '55%', height: '75%' }}>
        <GraphCanvas
          ref={graphRef}
          labelType="all"
          nodes={nodes}
          edges={edges}
          // selections={selections}
          // onCanvasClick={onCanvasClick}
          onNodeClick={onExpandClick}
          collapsedNodeIds={collapsedNodeIds}
        />
      </div>
    </div>
  );
};

export default Home;
