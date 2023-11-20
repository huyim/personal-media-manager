// Copyright (c) Meta Platforms, Inc. and affiliates.
// All rights reserved.

// This source code is licensed under the license found in the
// LICENSE file in the root directory of this source tree.
'use client';

import React, { useContext } from 'react';
import * as _ from 'underscore';
import { modelInputProps } from './Interfaces';
import AppContext from './createContext';

const Stage = () => {
  const {
    clicks: [, setClicks],
    image: [image],
    maskImg: [maskImg, setMaskImg],
  } = useContext(AppContext)!;

  const getClick = (x: number, y: number): modelInputProps => {
    const clickType = 1;
    return { x, y, clickType };
  };

  // Get mouse position and scale the (x, y) coordinates back to the natural
  // scale of the image. Update the state of clicks with setClicks to trigger
  // the ONNX model to run and generate a new mask via a useEffect in App.tsx
  const handleMouseMove = _.throttle((e: any) => {
    let el = e.nativeEvent.target;
    const rect = el.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    const imageScale = image ? image.width / el.offsetWidth : 1;
    x *= imageScale;
    y *= imageScale;
    const click = getClick(x, y);
    if (click) setClicks([click]);
  }, 15);

  const flexCenterClasses = 'flex items-center justify-center';
  const imageClasses = '';
  const maskImageClasses = `absolute opacity-40 pointer-events-none`;

  return (
    <div className={`${flexCenterClasses} h-full w-full`}>
      <div className={`${flexCenterClasses} relative h-[90%] w-[90%]`}>
        {image && (
          <img
            onMouseMove={handleMouseMove}
            onMouseOut={() => _.defer(() => setMaskImg(null))}
            onTouchStart={handleMouseMove}
            src={image.src}
            className={` ${imageClasses}`}
          ></img>
        )}
        {maskImg && (
          <img src={maskImg.src} className={`${maskImageClasses}`}></img>
        )}
      </div>
    </div>
  );
};

export default Stage;
