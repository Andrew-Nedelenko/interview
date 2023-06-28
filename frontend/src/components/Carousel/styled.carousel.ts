import { styled } from 'styled-components';

interface ISlideContainer {
  currentSlide: number;
}

interface IPoint {
 isActive: boolean;
}


interface ISArrow {
 isLeft: boolean;
}

export const SWrapper = styled.div`
  background-color: black;
  padding: 30px 0;
`

export const SCarousel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  .flex-container {
    background-color: black;
    max-width: 400px;
    display: flex;
    overflow: hidden;
  }
`;

export const SlideContainer = styled.div<ISlideContainer>`
  max-width: 300px;
  line-height: 0;
  transform: translateX(-${({ currentSlide }) => currentSlide * 100}%);
  transition: transform 0.3s ease-in-out;
  img {
    max-width: inherit;
  }
`;

export const Points = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3em;
  line-height: 0;
`;



export const Point = styled.div<IPoint>`
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'white' : 'grey')};
`;



export const SArrow = styled.div<ISArrow>`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &::before {
    content: '';
    width: 9px;
    height: 4px;
    display: block;
    background-color: white;
    transform: ${({ isLeft }) => (isLeft ? 'rotate(-50deg)' : 'rotate(50deg)')};
  }
  &::after {
    content: '';
    width: 9px;
    height: 4px;
    display: block;
    background-color: white;
    transform: ${({ isLeft }) => (isLeft ? 'rotate(50deg)' : 'rotate(-50deg)')};
  }
`;
