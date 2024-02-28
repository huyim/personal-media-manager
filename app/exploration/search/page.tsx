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

import React, { useContext, useEffect, useRef, useState } from 'react';

const BACKEND = 'http://localhost:8080/';
let nextId = 0;

const Home: NextPage = () => {
  const [tag, setTag] = useState<string | null>(null);
  const [queryResult, setQueryResult] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    setTag(searchParams.get('tag'));

    async function query() {
      let options = {
        method: 'POST',
        body: JSON.stringify({
          s: [],
          p: ['<https://schema.org/category>'],
          o: [tag + '^^String'],
        }),
      };

      try {
        let response = await fetch(BACKEND + 'query/quads', options);

        if (response == undefined) return;
        let data = await response.json();

        data.results.forEach((res: any) => {
          setQueryResult(res.s.replace('<', '').replace('>', ''));
        });
        console.log(queryResult);
      } catch (error: any) {
        console.log(error);
      }
    }
    query();
  });

  // Tags
  var tagList = [{ color: 'green', children: tag }];

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
      label: 'Mountains',
    },
    {
      id: '3',
      label: 'City',
    },
    {
      id: '4',
      label: 'Public Place',
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
      label: '1-2',
    },
    {
      source: '1',
      target: '3',
      id: '1-3',
      label: '1-3',
    },
    {
      source: '1',
      target: '4',
      id: '1-4',
      label: '1-4',
    },
    {
      source: '3',
      target: '31',
      id: '3-31',
      label: '3-31',
    },
    {
      source: '3',
      target: '32',
      id: '3-32',
      label: '3-32',
    },
    {
      source: '3',
      target: '33',
      id: '3-33',
      label: '3-33',
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
