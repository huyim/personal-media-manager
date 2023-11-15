import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function App() {
  const [frame, setFrame] = useState([]);
  const url =
    'http://localhost:8080/iACDw-fH8_P5yVsZCvKus8et4qhYQ70NJZHzUEoTDdr-ZHM1AttlCug';

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'http://localhost:8080/iACDw-fH8_P5yVsZCvKus8et4qhYQ70NJZHzUEoTDdr-ZHM1AttlCug',
      );
      const jsonResult = await result.json();

      setFrame(jsonResult);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
      <div className="mt-4 flex justify-center gap-1.5 text-black md:mt-0 md:flex-col">
        Key Frames
      </div>
      <div className="mx-auto w-80">
        <Image
          alt="file uploader preview"
          style={{ objectFit: 'cover' }}
          src={
            'http://localhost:8080/iACDw-fH8_P5yVsZCvKus8et4qhYQ70NJZHzUEoTDdr-ZHM1AttlCug'
          }
          width={320}
          height={218}
          layout="fixed"
        />
      </div>
    </div>
  );
}
