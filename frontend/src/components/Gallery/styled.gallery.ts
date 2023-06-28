import { styled } from 'styled-components';

export const SGallery = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  gap: 15px;
  flex-wrap: wrap;
  .picture {
    border: 1px solid gainsboro;
    max-width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    display: flex;
    justify-content: center;
    font-family: Ubuntu;
    font-size: 14px;
    padding: 5px 10px;
  }
`;
