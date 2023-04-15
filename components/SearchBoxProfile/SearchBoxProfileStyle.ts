import styled from 'styled-components';
import { colorsVariables } from '../../styles/colorsVariables';

export const SearchBoxProfileContainer = styled.form`
  display: flex;
  input {
    height: 40px;
    width: 400px;
    border-radius: 10px;
    border: ${colorsVariables.borderBtn};
    background-color: ${colorsVariables.white};
    padding-left: 10px;
    ::placeholder {
      color: ${colorsVariables.purple};
      padding-left: 10px;
      opacity: 0.5;
    }
  }
  svg {
    margin-left: 10px;
    font-size: 40px;
    color: ${colorsVariables.purple};
    transition: 0.5s ease-out;
    :hover {
      transform: scale(1.2);
      transition: 0.5s ease-out;
    }
  }
`;
