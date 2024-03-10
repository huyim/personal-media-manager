'use client';

import type { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { TagGroup } from '@douyinfe/semi-ui';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  useOnSelectionChange,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { Dataset } from '../../../ui/category';

import React, { useContext, useEffect, useRef, useState } from 'react';

import TagNode from '../../../components/TagNode';

const nodeTypes = {
  tagNode: TagNode,
};

const BACKEND = 'http://localhost:8080/';

let id = 0;
const getId = () => `${id++}`;

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
const connectionLineStyle = { stroke: '#000' };

const Home: NextPage = () => {
  const [queryLink, setQueryLink] = useState<string[]>([]);
  const [queryLinkedTags, setQueryLinkedTags] = useState<string[]>([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [tagGroup, setTagGroup] = useState([]);

  const searchParams = useSearchParams();

  const tag = searchParams.get('tag');

  // Tags in search box

  let selectedTags: string[] = [];

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
      if (fullTags[i].toLowerCase().includes(tag.toLowerCase())) {
        queryTag = fullTags[i];
      }
    }
  }

  useEffect(() => {
    async function query() {
      // @ts-ignore
      setTagGroup([{ color: 'green', children: tag }]);
      const id = getId();
      setNodes([
        {
          id: id,
          data: {
            label: tag,
          },
          position: { x: -100, y: 100 },
          selectable: false,
        },
      ]);

      const id_locations = getId();
      let locationNodeAdded = false;
      const id_people = getId();
      let peopleNodeAdded = false;
      const id_time = getId();
      let timeNodeAdded = false;
      const id_events = getId();
      let eventsNodeAdded = false;

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

        let lx = 0;
        let ly = 100;
        let px = 0;
        let py = 100;
        let tx = 0;
        let ty = 100;
        let ex = 0;
        let ey = 100;

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

                const linkedTags = res.o.replace('^^String', '');
                const id_temp = getId();

                if (linkedTags.split(',')[0] === 'locations') {
                  if (locationNodeAdded === false) {
                    const locationsNode = {
                      id: id_locations,
                      // type: 'tagNode',
                      position: {
                        x: -300,
                        y: 250,
                      },

                      data: { label: 'Location' },
                      selectable: true,
                    };

                    setNodes((nds) => nds.concat(locationsNode));
                    setEdges((eds) =>
                      eds.concat({
                        id: id_locations,
                        source: id,
                        target: id_locations,
                        label: 'where?',
                      }),
                    );

                    locationNodeAdded = true;
                  }

                  const locationNode1 = {
                    id: id_temp,
                    // type: 'tagNode',
                    position: {
                      x: -10 + lx,
                      y: 5 + ly,
                    },
                    data: { label: linkedTags.split(',')[1] },
                    parentNode: id_locations,
                  };
                  setNodes((nds) => nds.concat(locationNode1));
                  setEdges((eds) =>
                    eds.concat({
                      id: id_temp,
                      source: id_locations,
                      target: id_temp,
                    }),
                  );

                  if (linkedTags.split(',').length > 2) {
                    const id_temp2 = getId();
                    const locationsNode2 = {
                      id: id_temp2,
                      // type: 'tagNode',
                      position: {
                        x: -10,
                        y: 5 + ly,
                      },
                      data: { label: linkedTags.split(',')[2] },
                      parentNode: id_temp,
                    };

                    setNodes((nds) => nds.concat(locationsNode2));
                    setEdges((eds) =>
                      eds.concat({
                        id: id_temp2,
                        source: id_temp,
                        target: id_temp2,
                      }),
                    );
                  }

                  lx = lx - 175;
                } else if (linkedTags.split(',')[0] === 'people') {
                  // Initialize
                  if (peopleNodeAdded === false) {
                    const peopleNode = {
                      id: id_people,
                      // type: 'tagNode',
                      position: {
                        x: 150,
                        y: 350,
                      },
                      data: { label: 'People' },
                    };

                    // people nodes
                    setNodes((nds) => nds.concat(peopleNode));
                    setEdges((eds) =>
                      eds.concat({
                        id: id_people,
                        source: id,
                        target: id_people,
                        label: 'who?',
                      }),
                    );

                    peopleNodeAdded = true;
                  }

                  const peopleNode1 = {
                    id: id_temp,
                    // type: 'tagNode',
                    position: {
                      x: 10 + px,
                      y: 5 + py,
                    },
                    data: { label: linkedTags.split(',')[1] },
                    parentNode: id_people,
                  };
                  setNodes((nds) => nds.concat(peopleNode1));
                  setEdges((eds) =>
                    eds.concat({
                      id: id_temp,
                      source: id_people,
                      target: id_temp,
                    }),
                  );

                  if (linkedTags.split(',').length > 2) {
                    const id_temp2 = getId();
                    const peopleNode2 = {
                      id: id_temp2,
                      // type: 'tagNode',
                      position: {
                        x: 10,
                        y: 5 + py,
                      },
                      data: { label: linkedTags.split(',')[2] },
                      parentNode: id_temp,
                    };

                    setNodes((nds) => nds.concat(peopleNode2));
                    setEdges((eds) =>
                      eds.concat({
                        id: id_temp2,
                        source: id_temp,
                        target: id_temp2,
                      }),
                    );
                  }
                  px = px + 175;
                } else if (linkedTags.split(',')[0] === 'time') {
                  if (timeNodeAdded === false) {
                    const timeNode = {
                      id: id_time,
                      // type: 'tagNode',
                      position: {
                        x: -300,
                        y: 0,
                      },
                      data: { label: 'Time' },
                    };

                    setNodes((nds) => nds.concat(timeNode));
                    setEdges((eds) =>
                      eds.concat({
                        id: id_time,
                        source: id_time,
                        target: id,
                        label: 'when?',
                      }),
                    );

                    timeNodeAdded = true;
                  }
                  const timeNode1 = {
                    id: id_temp,
                    // type: 'tagNode',
                    position: {
                      x: -10 + tx,
                      y: 0 - ty,
                    },
                    data: { label: linkedTags.split(',')[1] },
                    parentNode: id_time,
                  };
                  setNodes((nds) => nds.concat(timeNode1));
                  setEdges((eds) =>
                    eds.concat({
                      id: id_temp,
                      source: id_temp,
                      target: id_time,
                    }),
                  );

                  if (linkedTags.split(',').length > 2) {
                    const id_temp2 = getId();
                    const timeNode2 = {
                      id: id_temp2,
                      // type: 'tagNode',
                      position: {
                        x: -10,
                        y: 0 - ty,
                      },
                      data: { label: linkedTags.split(',')[2] },
                      parentNode: id_temp,
                    };

                    setNodes((nds) => nds.concat(timeNode2));
                    setEdges((eds) =>
                      eds.concat({
                        id: id_temp2,
                        source: id_temp2,
                        target: id_temp,
                      }),
                    );
                  }
                  tx = tx - 175;
                } else if (linkedTags.split(',')[0] === 'events') {
                  if (eventsNodeAdded === false) {
                    const eventsNode = {
                      id: id_events,
                      // type: 'tagNode',
                      position: {
                        x: 150,
                        y: 0,
                      },
                      data: { label: 'Events' },
                    };

                    setNodes((nds) => nds.concat(eventsNode));
                    setEdges((eds) =>
                      eds.concat({
                        id: id_events,
                        source: id_events,
                        target: id,
                        label: 'what?',
                      }),
                    );

                    eventsNodeAdded = true;
                  }

                  const eventsNode1 = {
                    id: id_temp,
                    // type: 'tagNode',
                    position: {
                      x: 10 - ex,
                      y: 0 - ey,
                    },
                    data: { label: linkedTags.split(',')[1] },
                    parentNode: id_events,
                  };
                  setNodes((nds) => nds.concat(eventsNode1));
                  setEdges((eds) =>
                    eds.concat({
                      id: id_temp,
                      source: id_temp,
                      target: id_events,
                    }),
                  );

                  if (linkedTags.split(',').length > 2) {
                    const id_temp2 = getId();
                    const eventsNode2 = {
                      id: id_temp2,
                      // type: 'tagNode',
                      position: {
                        x: 10,
                        y: 0 - ey,
                      },
                      data: { label: linkedTags.split(',')[2] },
                      parentNode: id_temp,
                    };

                    setNodes((nds) => nds.concat(eventsNode2));
                    setEdges((eds) =>
                      eds.concat({
                        id: id_temp2,
                        source: id_temp2,
                        target: id_temp,
                      }),
                    );
                  }
                  ex = ex + 175;
                }
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

  //console.log(tagList);
  let finalQuery = tag;
  useOnSelectionChange({
    onChange: ({ nodes }) => {
      // @ts-ignore
      setSelectedNodes(nodes.map((node) => node.data.label));

      //@ts-ignore
      // setTagGroup((prevTag) => [
      //   ...prevTag,
      //   { color: 'green', children: nodes.map((node) => node.data.label) },
      // ]);
    },
  });

  if (selectedTags !== undefined) {
    for (let i = 0; i < fullTags.length; i++) {
      // @ts-ignore
      if (fullTags[i].includes(selectedNodes)) {
        // @ts-ignore
        if (!finalQuery?.includes(selectedNodes)) {
          finalQuery = finalQuery + ',' + selectedNodes;
        }
      }
    }
  }

  const divStyle = {
    backgroundColor: 'var(--semi-color-fill-0)',
    height: 35,
    width: 800,
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

  return (
    <div>
      <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
        <div style={divStyle}>
          <p className="w-1/2 text-black">Searched Word: </p>
          <TagGroup
            maxTagCount={10}
            style={tagGroupStyle}
            tagList={tagGroup}
            size="large"
          />
          <p className="w-1/2 text-black">Additional Keyword: </p>
          <TagGroup
            maxTagCount={10}
            style={tagGroupStyle}
            // @ts-ignore
            tagList={[{ color: 'green', children: selectedNodes.join(', ') }]}
            size="large"
          />
        </div>

        <Link
          href={{
            pathname: '/exploration/display',
            query: { queries: finalQuery },
          }}
        >
          <button className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-500 disabled:bg-gray-200 md:w-auto md:text-base">
            Explore
          </button>
        </Link>
      </div>
      <div style={{ position: 'fixed', width: '55%', height: '75%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          connectionLineStyle={connectionLineStyle}
          defaultViewport={defaultViewport}
          fitView
          attributionPosition="bottom-left"
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

function FlowWithProvider() {
  return (
    <ReactFlowProvider>
      <Home />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
