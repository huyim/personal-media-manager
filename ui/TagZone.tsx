import React, { useState } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import Image from 'next/image';
import { TagInput, Cascader } from '@douyinfe/semi-ui';

import { useImageSize } from 'react-image-size';
import { Dataset } from './category';

type props = {
  slides: number[];
  options?: EmblaOptionsType;
  images: string[];
  mediatype: any;
};

const BACKEND = 'http://localhost:8080/';

const EmblaCarousel: React.FC<props> = (props) => {
  const { slides, options, images, mediatype } = props;
  const [emblaRef] = useEmblaCarousel(options, [ClassNames()]);
  const imageByIndex = (index: number): string => images[index % images.length];
  const [dimensions] = useImageSize(imageByIndex(0));

  const [value, setValue] = useState('Search or select...');
  const onChange = (val: any) => {
    setValue(val);
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              {mediatype === 'video' ? (
                <video
                  controls
                  src={imageByIndex(index)}
                  width={320}
                  height={180}
                ></video>
              ) : (
                <Image
                  className="embla__slide__img"
                  src={imageByIndex(index)}
                  width={700}
                  height={700}
                  alt="key frames"
                />
              )}

              <div className="mx-auto w-60">
                {/* <TagInput
                  allowDuplicates={false}
                  placeholder="Add tags..."
                  onChange={(v) => {
                    var options = {
                      method: 'POST',
                      body: JSON.stringify({
                        quads: [
                          {
                            s: '<' + imageByIndex(index) + '>',
                            p: '<https://schema.org/category>',
                            o: v[v.length - 1] + '^^String',
                          },
                        ],
                      }),
                    };
                    console.log(v[v.length - 1]);
                    try {
                      let response = fetch(BACKEND + 'add/quads', options);
                    } catch (error: any) {
                      console.log(error);
                    }
                  }}
                /> */}
                <Cascader
                  style={{ width: 250 }}
                  treeData={Dataset}
                  placeholder="Search or select..."
                  multiple
                  filterTreeNode
                  onChange={(v: any) => {
                    var options = {
                      method: 'POST',
                      body: JSON.stringify({
                        quads: [
                          {
                            s: '<' + imageByIndex(index) + '>',
                            p: '<https://schema.org/category>',
                            o: v[v.length - 1] + '^^String',
                          },
                        ],
                      }),
                    };
                    console.log(v[v.length - 1]);
                    try {
                      let response = fetch(BACKEND + 'add/quads', options);
                    } catch (error: any) {
                      console.log(error);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
