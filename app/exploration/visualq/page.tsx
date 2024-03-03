'use client';

import { useSearchParams } from 'next/navigation';
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { IconAlertCircle, IconTickCircle } from '@douyinfe/semi-icons';

import VideoNode from '../../../components/VideoNode';
import ImageNode from '../../../components/ImageNode';
import Link from 'next/link';

const BACKEND = 'http://localhost:8080/';

const connectionLineStyle = { stroke: '#000' };
const nodeTypes = {
  videoNode: VideoNode,
  imageNode: ImageNode,
};

let id = 0;
const getId = () => `${id++}`;

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const VisualQuery = () => {
  const [queryResult, setQueryResult] = useState<string[]>([]);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  //   const [tag, setTag] = useState<string | null>(null);
  const connectingNodeId = useRef(null);

  const searchParams = useSearchParams();

  const fileId = searchParams.get('id');
  const mediaUrl = BACKEND + fileId;
  const fileType = searchParams.get('ftype');

  /**
   * Get Media from MeGraS
   */

  useEffect(() => {
    async function query() {
      const id = getId();
      if (fileType === 'video') {
        setNodes([
          {
            id: id,
            type: 'videoNode',
            data: {
              url: mediaUrl,
            },
            position: { x: -100, y: 100 },
          },
        ]);
      } else {
        setNodes([
          {
            id: id,
            type: 'imageNode',
            data: {
              url: mediaUrl,
            },
            position: { x: -100, y: 100 },
          },
        ]);
      }

      const id_locations = getId();
      const id_people = getId();
      const id_time = getId();
      const id_events = getId();

      let options = {
        method: 'POST',
        body: JSON.stringify({
          s: ['<' + mediaUrl + '>'],
          p: ['<https://schema.org/category>'],
          o: [],
        }),
      };

      try {
        let response = await fetch(BACKEND + 'query/quads', options);

        if (response == undefined) return;
        let data = await response.json();

        /** Node initialization */
        if (data.results.length > 0) {
          const locationsNode = {
            id: id_locations,
            position: {
              x: -300,
              y: 350,
            },
            data: { label: 'Location' },
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

          const peopleNode = {
            id: id_people,
            position: {
              x: 300,
              y: 350,
            },
            data: { label: 'People' },
          };

          setNodes((nds) => nds.concat(peopleNode));
          setEdges((eds) =>
            eds.concat({
              id: id_people,
              source: id,
              target: id_people,
              label: 'who?',
            }),
          );

          const timeNode = {
            id: id_time,
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

          const eventsNode = {
            id: id_events,
            position: {
              x: 300,
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
        }

        let lx = 0;
        let ly = 100;
        let px = 0;
        let py = 100;
        let tx = 0;
        let ty = 100;
        let ex = 0;
        let ey = 100;
        data.results.forEach(async (res: any) => {
          //   setQueryResult((prevQuery) => [
          //     ...prevQuery,
          const queries = res.o.replace('^^String', '');
          //   ]);

          const tags = queries.split(',');
          const id_temp = getId();

          /** Find similar media */
          let options = {
            method: 'POST',
            body: JSON.stringify({
              s: [],
              p: ['<https://schema.org/category>'],
              o: [res.o],
            }),
          };
          let urlList: any[] = [];

          try {
            let response = await fetch(BACKEND + 'query/quads', options);

            if (response == undefined) return;
            let data = await response.json();

            data.results.forEach((res: any) => {
              const url = res.s.replace('<', '').replace('>', '');
              if (url != mediaUrl) {
                urlList.push(url);
              }
              console.log(url);
            });
          } catch (error: any) {
            console.log(error);
          }

          if (tags[0] === 'locations') {
            const locationNode1 = {
              id: id_temp,
              position: {
                x: -300 + lx,
                y: 350 + ly,
              },
              data: { label: tags[1] },
            };
            setNodes((nds) => nds.concat(locationNode1));
            setEdges((eds) =>
              eds.concat({
                id: id_temp,
                source: id_locations,
                target: id_temp,
              }),
            );

            if (tags.length > 2) {
              const id_temp2 = getId();
              const locationsNode2 = {
                id: id_temp2,
                position: {
                  x: -300 + lx,
                  y: 350 + 2 * ly,
                },
                data: { label: tags[2] },
              };

              setNodes((nds) => nds.concat(locationsNode2));
              setEdges((eds) =>
                eds.concat({
                  id: id_temp2,
                  source: id_temp,
                  target: id_temp2,
                }),
              );

              if (urlList.length > 0) {
                let u_temp = 100;
                for (let i = 0; i < urlList.length; i++) {
                  const id_temp3 = getId();
                  const relatedNode = {
                    id: id_temp3,
                    position: {
                      x: -300 + lx,
                      y: 350 + 2 * ly + u_temp,
                    },
                    type: 'videoNode',
                    data: {
                      url: urlList[i],
                    },
                  };

                  setNodes((nds) => nds.concat(relatedNode));
                  setEdges((eds) =>
                    eds.concat({
                      id: id_temp3,
                      source: id_temp2,
                      target: id_temp3,
                      label: 'related media',
                    }),
                  );
                }
              }
            }

            lx = lx - 175;
          } else if (tags[0] === 'time') {
            const timeNode1 = {
              id: id_temp,
              position: {
                x: -300 + tx,
                y: 0 - ty,
              },
              data: { label: tags[1] },
            };
            setNodes((nds) => nds.concat(timeNode1));
            setEdges((eds) =>
              eds.concat({
                id: id_temp,
                source: id_temp,
                target: id_time,
              }),
            );

            if (tags.length > 2) {
              const id_temp2 = getId();
              const timeNode2 = {
                id: id_temp2,
                position: {
                  x: -300 + tx,
                  y: 0 - 2 * ty,
                },
                data: { label: tags[2] },
              };

              setNodes((nds) => nds.concat(timeNode2));
              setEdges((eds) =>
                eds.concat({
                  id: id_temp2,
                  source: id_temp2,
                  target: id_temp,
                }),
              );
              if (urlList.length > 0) {
                let u_temp = 100;
                for (let i = 0; i < urlList.length; i++) {
                  const id_temp3 = getId();
                  const relatedNode = {
                    id: id_temp3,
                    position: {
                      x: -300 + tx,
                      y: 0 - 2 * ty - u_temp,
                    },
                    type: 'videoNode',
                    data: {
                      url: urlList[i],
                    },
                  };

                  setNodes((nds) => nds.concat(relatedNode));
                  setEdges((eds) =>
                    eds.concat({
                      id: id_temp3,
                      source: id_temp3,
                      target: id_temp2,
                      label: 'related media',
                    }),
                  );
                }
              }
            }
            tx = tx - 175;
          } else if (tags[0] === 'events') {
            const eventsNode1 = {
              id: id_temp,
              position: {
                x: 300 - ex,
                y: 0 - ey,
              },
              data: { label: tags[1] },
            };
            setNodes((nds) => nds.concat(eventsNode1));
            setEdges((eds) =>
              eds.concat({
                id: id_temp,
                source: id_temp,
                target: id_events,
              }),
            );

            if (tags.length > 2) {
              const id_temp2 = getId();
              const eventsNode2 = {
                id: id_temp2,
                position: {
                  x: 300 - ex,
                  y: 0 - 2 * ey,
                },
                data: { label: tags[2] },
              };

              setNodes((nds) => nds.concat(eventsNode2));
              setEdges((eds) =>
                eds.concat({
                  id: id_temp2,
                  source: id_temp2,
                  target: id_temp,
                }),
              );
              if (urlList.length > 0) {
                let u_temp = 100;
                for (let i = 0; i < urlList.length; i++) {
                  const id_temp3 = getId();
                  const relatedNode = {
                    id: id_temp3,
                    position: {
                      x: 300 - ex,
                      y: 0 - 2 * ey - u_temp,
                    },
                    type: 'videoNode',
                    data: {
                      url: urlList[i],
                    },
                  };

                  setNodes((nds) => nds.concat(relatedNode));
                  setEdges((eds) =>
                    eds.concat({
                      id: id_temp3,
                      source: id_temp3,
                      target: id_temp2,
                      label: 'related media',
                    }),
                  );
                }
              }
            }
            ex = ex + 175;
          } else if (tags[0] === 'people') {
            const peopleNode1 = {
              id: id_temp,
              position: {
                x: 300 + px,
                y: 350 + py,
              },
              data: { label: tags[1] },
            };
            setNodes((nds) => nds.concat(peopleNode1));
            setEdges((eds) =>
              eds.concat({
                id: id_temp,
                source: id_people,
                target: id_temp,
              }),
            );

            if (tags.length > 2) {
              const id_temp2 = getId();
              const peopleNode2 = {
                id: id_temp2,
                position: {
                  x: 300 + px,
                  y: 350 + 2 * py,
                },
                data: { label: tags[2] },
              };

              setNodes((nds) => nds.concat(peopleNode2));
              setEdges((eds) =>
                eds.concat({
                  id: id_temp2,
                  source: id_temp,
                  target: id_temp2,
                }),
              );
              if (urlList.length > 0) {
                let u_temp = 100;
                for (let i = 0; i < urlList.length; i++) {
                  const id_temp3 = getId();
                  const relatedNode = {
                    id: id_temp3,
                    position: {
                      x: 300 + px,
                      y: 350 + 2 * py + u_temp,
                    },
                    type: 'videoNode',
                    data: {
                      url: urlList[i],
                    },
                  };

                  setNodes((nds) => nds.concat(relatedNode));
                  setEdges((eds) =>
                    eds.concat({
                      id: id_temp3,
                      source: id_temp2,
                      target: id_temp3,
                      label: 'related media',
                    }),
                  );
                }
              }
            }
            px = px + 175;
          }
        });
      } catch (error: any) {
        console.log(error);
      }
    }

    query();
  }, []);

  return (
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

      <div className="text-yellow-600">
        <IconAlertCircle style={{ color: '#8B8000' }} />
        If no relations presented, please upload and add tags first.
        {/* <Link
          href={{
            pathname: '/tag',
            query: { id: fileId, ftype: fileType },
          }}
        >
          <button
            disabled={!fileId}
            className="w-1/20 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-green-400 disabled:bg-gray-200 md:w-auto md:text-base"
          >
            Add Tags
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default VisualQuery;
