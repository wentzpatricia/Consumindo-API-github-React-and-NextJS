import styled from 'styled-components';
import { colorsVariables } from '../../styles/colorsVariables';

export const HeaderContainer = styled.header`
  height: 90px;
  display: flex;
  background-color: ${colorsVariables.black};
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  color: ${colorsVariables.white};
  font-weight: 100;
  font-size: 40px;
  svg {
    margin-left: 10px;
    color: ${colorsVariables.purple};
    transition: 0.5s ease-out;
    :hover {
      transform: scale(1.2);
      transition: 0.5s ease-out;
    }
  }
`;
