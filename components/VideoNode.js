import React, { memo, useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { Image } from '@douyinfe/semi-ui';

const BACKEND = 'http://localhost:8080/';

export default memo(({ data }) => {
  const [videoType, setVideoType] = useState(false);
  let url = data.url;
  if (url.includes('segment')) {
    url =
      url.split('/')[0] + '//' + url.split('/')[2] + '/' + url.split('/')[3];
  }

  useEffect(() => {
    async function query() {
      let options = {
        method: 'POST',
        body: JSON.stringify({
          s: ['<' + url + '>'],
          p: ['<http://megras.org/schema#mediaType>'],
          o: [],
        }),
      };

      try {
        let response = await fetch(BACKEND + 'query/quads', options);

        if (response == undefined) return;
        let data = await response.json();

        // console.log(data.url);

        data.results.forEach((res) => {
          if (res.o === 'VIDEO^^String') {
            setVideoType(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    //console.log(videoType);
    query();
  }, []);

  return (
    <div className="rounded-md border-2 border-stone-400 bg-white px-4 py-2 shadow-md">
      <div className="flex">
        {videoType ? (
          <iframe controls src={data.url} width={320} height={180}></iframe>
        ) : (
          <Image src={data.url} width={320} height={180} />
        )}
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
