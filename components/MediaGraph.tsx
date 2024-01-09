import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

import VideoNode from './VideoNode';

const initBgColor = '#FFFFFF';

const connectionLineStyle = { stroke: '#000' };
const nodeTypes = {
  videoNode: VideoNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const MediaGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);
  const [input, setInput] = useState();

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const onChange = (event: any) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== '2') {
            return node;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        }),
      );
    };

    setNodes([
      {
        id: '1',
        type: 'input',
        data: { label: 'Zurich' },
        position: { x: 0, y: 50 },
      },
      {
        id: '2',
        type: 'videoNode',
        data: {
          onChange: onChange,
          url: 'http://localhost:8080/v96cgPsS2EDdb5eNhd9eYwAk3dB5r2BgfeW696kbrF48',
        },
        position: { x: -100, y: 100 },
      },
      {
        id: '3',
        type: 'videoNode',
        data: {
          onChange: onChange,
          url: '<http://localhost:8080/v96cgPsS2EDdb5eNhd9eYwAk3dB5r2BgfeW696kbrF48/c/12li--VEhzOhVAFIc2DV2g>',
        },
        position: { x: 120, y: 100 },
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
      {
        id: 'e2b-4',
        source: '2',
        target: '4',
        sourceHandle: 'b',
        animated: true,
        style: { stroke: '#000' },
      },
    ]);
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
      <input
        type="search"
        id="search"
        value={input}
        onChange={handleChange}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search tags..."
        required
      />
      <br />
      {input ? (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          style={{ background: bgColor }}
          nodeTypes={nodeTypes}
          connectionLineStyle={connectionLineStyle}
          defaultViewport={defaultViewport}
          fitView
          attributionPosition="bottom-left"
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      ) : (
        <div>Search tags to get graph...</div>
      )}
    </div>
  );
};

export default MediaGraph;
