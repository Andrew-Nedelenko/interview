import { FC, useState } from 'react';
import { IPictures } from '../../core/types';
import { Point, Points, SArrow, SCarousel, SWrapper, SlideContainer } from './styled.carousel';

interface ICarousel {
  data?: IPictures[];
}

export const Carousel: FC<ICarousel> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!data) {
    return <>No data</>;
  }

  const handleLeftSlide = () => {
    if (currentSlide >= data.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(currentSlide + 1);
  };

  const handleRightSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(data.length - 1);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };

  const handlePointSlide = (value: number) => {
    setCurrentSlide(value);
  };

  return (
    <SWrapper>
      <SCarousel>
        <SArrow isLeft onClick={handleRightSlide} />
        <div className="flex-container">
          {data.map(pic => (
            <SlideContainer currentSlide={currentSlide} className="container" key={pic.id}>
              <img src={pic.url.medium} alt={pic.title} />
            </SlideContainer>
          ))}
        </div>
        <SArrow isLeft={false} onClick={handleLeftSlide} />
      </SCarousel>

      <Points>
        {Array.from(Array(data.length), (_, id) => (
          <Point key={id} isActive={id === currentSlide} onClick={() => handlePointSlide(id)}>
            .
          </Point>
        ))}
      </Points>
    </SWrapper>
  );
};
