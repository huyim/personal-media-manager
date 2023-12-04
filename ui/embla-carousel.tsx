import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';

const images = [
  'http://localhost:8080/ix8HBwMDH__-IbInayjWJOU3rymRveDGsSe12mMmrD2EFv1j1jVBpyA',
  'http://localhost:8080/iACDw-fH8_P5yVsZCvKus8et4qhYQ70NJZHzUEoTDdr-ZHM1AttlCug',
  'http://localhost:8080/in7__n8iAAAFIfZ-2TQZJKAZa4rpbk3SsbRXqIiwCgs1VZ4qsGoSZ7A',
];

const imageByIndex = (index: number): string => images[index % images.length];

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [ClassNames()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="key frames"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
