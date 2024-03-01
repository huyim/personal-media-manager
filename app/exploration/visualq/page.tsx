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

const BACKEND = 'http://localhost:8080/';

const connectionLineStyle = { stroke: '#000' };
const nodeTypes = {
  videoNode: VideoNode,
  imageNode: ImageNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const VisualQuery = () => {
  const [queryResult, setQueryResult] = useState<string | null>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [tag, setTag] = useState<string | null>(null);
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [videoType, setVideotype] = useState<string | null>(null);
  const [fileId, setFileId] = useState<string | null>(null);

  const searchParams = useSearchParams();

  /**
   * Get Media from MeGraS
   */
  useEffect(() => {
    async function fetchMedia() {
      setFileId(searchParams.get('id'));
      setMediaUrl(BACKEND + fileId);
      setVideotype(searchParams.get('ftype'));
    }
    fetchMedia();
  });

  //   useEffect(() => {
  //     setTag(searchParams.get('queries'));

  //     async function query() {
  //       let options = {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           s: [],
  //           p: ['<https://schema.org/category>'],
  //           o: [tag + '^^String'],
  //         }),
  //       };

  //       try {
  //         let response = await fetch(BACKEND + 'query/quads', options);

  //         if (response == undefined) return;
  //         let data = await response.json();

  //         data.results.forEach((res: any) => {
  //           setQueryResult(res.s.replace('<', '').replace('>', ''));
  //         });
  //         console.log(data);
  //       } catch (error: any) {
  //         console.log(error);
  //       }
  //     }
  //     query();
  //   });

  useEffect(() => {
    async function fetchMedia() {
      setFileId(searchParams.get('id'));
      setMediaUrl(BACKEND + fileId);
      setVideotype(searchParams.get('ftype'));
    }

    console.log(mediaUrl);
    setNodes([
      {
        id: '1',
        type: 'input',
        data: { label: 'tag' },
        position: { x: 0, y: 50 },
      },
      {
        id: '2',
        type: 'imageNode',
        data: {
          url: mediaUrl,
        },
        position: { x: -100, y: 100 },
      },
    ]);

    setEdges([
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
        style: { stroke: '#000' },
      },
      {
        id: 'e2a-3',
        source: '1',
        target: '3',
        animated: true,
        style: { stroke: '#000' },
      },
    ]);
    fetchMedia();
  }, []);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds),
      ),
    [],
  );
  return (
    <div style={{ position: 'fixed', width: '55%', height: '75%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
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

export default VisualQuery;
