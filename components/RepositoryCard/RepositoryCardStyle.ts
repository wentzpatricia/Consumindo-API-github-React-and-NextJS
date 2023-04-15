import styled from 'styled-components';
import { colorsVariables } from '../../styles/colorsVariables';

export const RepositoryContainer = styled.section`
  background-color: ${colorsVariables.black};
  width: 80%;
  display: flex;
  margin: 50px auto;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 15px;

  h3 {
    color: ${colorsVariables.white};
  }
`;

export const RepositoryBox = styled.div`
  margin: 20px;
  width: 95%;
  padding: 20px;
  border-bottom: ${colorsVariables.borderWhite};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    h3 {
      width: 135px;
      font-weight: lighter;
      float: left;
      margin-right: 10px;
      margin-bottom: 15px;
    }
    strong {
      margin-right: 5px;
    }
    svg {
      color: ${colorsVariables.gray};
      margin-right: 5px;
    }
  }
`;
export const TitleRepo = styled.h2`
  color: ${colorsVariables.purple};
  font-size: 20px;
  margin-bottom: 20px;
`;
