import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import Image from 'next/image';
import { TagInput } from '@douyinfe/semi-ui';

type props = {
  slides: number[];
  options?: EmblaOptionsType;
  images: string[];
};

const EmblaCarousel: React.FC<props> = (props) => {
  const { slides, options, images } = props;
  const [emblaRef] = useEmblaCarousel(options, [ClassNames()]);
  const imageByIndex = (index: number): string => images[index % images.length];

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image
                className="embla__slide__img"
                src={imageByIndex(index)}
                width={700}
                height={700}
                alt="key frames"
              />
              <div className="mx-auto w-60">
                <TagInput
                  allowDuplicates={false}
                  placeholder="Add tags..."
                  onChange={(v) => console.log(v)}
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
