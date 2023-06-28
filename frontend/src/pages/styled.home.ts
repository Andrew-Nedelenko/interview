import { styled } from 'styled-components';

interface ISActive {
  isActive: boolean;
}

export const SHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tabs {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: gainsboro;
    text-transform: capitalize;
  }
`;

export const SActiveTab = styled.div<ISActive>`
  font-family: Ubuntu;
  cursor: pointer;
  padding-bottom: 3px;
  border-bottom: ${({ isActive }) => (isActive ? '1px solid black' : '1px solid transparent')};
`;

export const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`
