import React, { useState } from 'react';
import { Card } from '@douyinfe/semi-ui';

// Node component
interface NodeProps {
  src: string;
  type: string;
}

const Node: React.FC<NodeProps> = ({ src, type }) => {
  if (type === 'img') {
    return <img src={src} alt="" style={{ width: '100px', height: '100px' }} />;
  } else if (type === 'video') {
    return (
      <Card
        shadows="hover"
        style={{ maxWidth: 200, backgroundColor: '#EEF0E5' }}
        bodyStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {' '}
        <iframe
          style={{ objectFit: 'cover' }}
          src={src}
          width={160}
          height={90}
        ></iframe>
      </Card>
    );
  } else {
    return null;
  }
};

// Graph component
const MediaGraph = () => {
  const [data, setData] = useState([
    {
      src: 'http://localhost:8080/vX5nOIzU86CW302_2-Gj5YuUG_cDqs6l0yqsJ1cY18A4',
      type: 'video',
    },
    {
      src: 'http://localhost:8080/v96cgPsS2EDdb5eNhd9eYwAk3dB5r2BgfeW696kbrF48',
      type: 'video',
    },
    // more nodes...
  ]);

  return (
    <div>
      {data.map((node, index) => (
        <Node key={index} src={node.src} type={node.type} />
      ))}
    </div>
  );
};

export default MediaGraph;
