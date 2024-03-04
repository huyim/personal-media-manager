import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

import { Checkbox } from '@douyinfe/semi-ui';

export default memo(({ data }) => {
  return (
    <div className="rounded-md border-2 border-stone-400 bg-white px-4 py-2 shadow-md">
      <div className="flex">
        {/* <Checkbox onChange={data.onChange} aria-label="Node select"> */}
        {data.label}
        {/* </Checkbox> */}
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
});
