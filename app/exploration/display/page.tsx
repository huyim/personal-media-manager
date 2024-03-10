'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

import VideoNode from '../../../components/VideoNode';
import ImageNode from '../../../components/ImageNode';
import { Dataset } from '../../../ui/category';

let id = 0;
const getId = () => `${id++}`;

const BACKEND = 'http://localhost:8080/';

const connectionLineStyle = { stroke: '#000' };
const nodeTypes = {
  videoNode: VideoNode,
  imageNode: ImageNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const MediaDisplay = () => {
  const [queryResult, setQueryResult] = useState<string[]>([]);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const searchParams = useSearchParams();
  const queries = searchParams.get('queries');

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

  let queryList: string[] = [];
  if (queries !== null) {
    const queryTemp = queries.split(',');

    for (let i = 0; i < queryTemp.length; i++) {
      if (queryTemp[i] !== '') {
        for (let j = 0; j < fullTags.length; j++) {
          if (fullTags[j].toLowerCase().includes(queryTemp[i].toLowerCase())) {
            queryList.push(fullTags[j]);
          }
        }
      }
    }
  }
  //@ts-ignore
  if (queries?.split(',').length > 1) {
    useEffect(() => {
      async function query() {
        const id = getId();
        setNodes([
          {
            id: id,
            type: 'input',
            //@ts-ignore
            data: {
              label: queries,
            },
            position: { x: 0, y: 50 },
          },
        ]);

        let media_res: any[] = [];

        for (let q = 0; q < queryList.length; q++) {
          let options = {
            method: 'POST',
            body: JSON.stringify({
              s: [],
              p: ['<https://schema.org/category>'],
              o: [queryList[q] + '^^String'],
            }),
          };

          console.log(queryList[q]);
          try {
            let response = await fetch(BACKEND + 'query/quads', options);

            if (response == undefined) return;
            let data = await response.json();

            data.results.forEach((res: any) => {
              media_res.push(res.s.replace('<', '').replace('>', ''));
            });
          } catch (error: any) {
            console.log(error);
          }
        }
        var occurrences = media_res.reduce(function (obj, item) {
          obj[item] = (obj[item] || 0) + 1;
          return obj;
        }, {});
        let pos = 50;
        for (var key in occurrences) {
          if (occurrences[key] > 1) {
            const id_video = getId();
            const newNode = {
              id: id_video,
              type: 'videoNode',
              data: {
                url: key,
              },
              position: { x: -250 + pos, y: 100 },
              parentNode: id,
            };

            setNodes((nds) => nds.concat(newNode));
            setEdges((eds) =>
              eds.concat({
                id: id_video,
                source: id,
                target: id_video,
              }),
            );
          }
          pos = pos + 50;
        }
      }

      query();
    }, []);
  }

  if (queries?.split(',').length === 1) {
    useEffect(() => {
      async function query() {
        const id = getId();
        setNodes([
          {
            id: id,
            type: 'input',
            data: { label: queries },
            position: { x: 0, y: 50 },
          },
        ]);
        let pos = 50;
        for (let q = 0; q < queryList.length; q++) {
          let options = {
            method: 'POST',
            body: JSON.stringify({
              s: [],
              p: ['<https://schema.org/category>'],
              o: [queryList[q] + '^^String'],
            }),
          };

          try {
            let response = await fetch(BACKEND + 'query/quads', options);

            if (response == undefined) return;
            let data = await response.json();

            data.results.forEach((res: any) => {
              const id_video = getId();
              const newNode = {
                id: id_video,
                type: 'videoNode',
                data: {
                  url: res.s.replace('<', '').replace('>', ''),
                },
                position: { x: -250 + pos, y: 100 },
                parentNode: id,
              };

              setNodes((nds) => nds.concat(newNode));
              setEdges((eds) =>
                eds.concat({
                  id: id_video,
                  source: id,
                  target: id_video,
                }),
              );

              pos = pos + 50;
            });
          } catch (error: any) {
            console.log(error);
          }
        }
      }

      query();
    }, []);
  }
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
    </div>
  );
};

export default MediaDisplay;
