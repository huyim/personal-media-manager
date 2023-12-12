import React, { useState } from 'react';
import { Card, Space, Button } from '@douyinfe/semi-ui';
import Link from 'next/link';

// Node component
interface NodeProps {
  url: string;
  type: string;
}

const Node: React.FC<NodeProps> = ({ url, type }) => {
  const fileId = url.split('/')[3];

  if (type === 'img') {
    return (
      <Card
        shadows="hover"
        style={{ maxWidth: 280, backgroundColor: '#EEF0E5' }}
        bodyStyle={{
          display: 'flex',
          alignItems: 'center',
        }}
        cover={<img src={url} />}
      >
        <Space align="start">
          <Button theme="solid" type="primary" size="small">
            Usage
          </Button>
          <Link
            href={{
              pathname: '/tag',
              query: { id: fileId, ftype: type },
            }}
          >
            <Button theme="borderless" type="primary" size="small">
              Edit
            </Button>
          </Link>
        </Space>
      </Card>
    );
  } else if (type === 'video') {
    return (
      <Card
        shadows="hover"
        style={{ maxWidth: 280, backgroundColor: '#EEF0E5' }}
        bodyStyle={{
          display: 'flex',
          alignItems: 'center',
        }}
        cover={<video controls src={url} />}
      >
        <Space align="start">
          <Button theme="solid" type="primary" size="small">
            Usage
          </Button>
          <Link
            href={{
              pathname: '/tag',
              query: { id: fileId, ftype: type },
            }}
          >
            <Button theme="borderless" type="primary" size="small">
              Edit
            </Button>
          </Link>
        </Space>
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
      url: 'http://localhost:8080/vX5nOIzU86CW302_2-Gj5YuUG_cDqs6l0yqsJ1cY18A4',
      type: 'video',
    },
    {
      url: 'http://localhost:8080/icGAZPj4PDx_7JrTZ340q_rBlXiVCtMlUdx3MYOa9rhBV86jQo_tjeA',
      type: 'img',
    },
    // more nodes...
  ]);

  return (
    <div>
      {data.map((node, index) => (
        <Node key={index} url={node.url} type={node.type} />
      ))}
    </div>
  );
};

export default MediaGraph;
