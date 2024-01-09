import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({}) {
  return (
    <div className="rounded-md border-2 border-stone-400 bg-white px-4 py-2 shadow-md">
      <div className="flex">
        <video
          controls
          src={
            'http://localhost:8080/v96cgPsS2EDdb5eNhd9eYwAk3dB5r2BgfeW696kbrF48'
          }
          width={320}
          height={180}
        ></video>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
}

export default memo(CustomNode);
