import styled from 'styled-components';
import { colorsVariables } from '../../styles/colorsVariables';

export const ProfileDetailContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 60%;
  margin: 50px auto;
  background: ${colorsVariables.black};
  border-radius: 15px;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const PerfilContainer = styled.div`
  width: 250px;
  h2 {
    margin: 20px 0;
    color: ${colorsVariables.purple};
    border-bottom: ${colorsVariables.borderBottomTitle};
    padding-bottom: 10px;
    text-align: center;
  }
  img {
    width: 250px;
    border: ${colorsVariables.borderImage};
    margin-bottom: 25px;
    border-radius: 50%;
  }
`;

export const PerfilListContainer = styled.div`
  width: 250px;
  div {
    margin: 40px 0;
    display: flex;
  }

  h3 {
    color: ${colorsVariables.white};
    font-size: 30px;
    font-weight: 100;
    margin: 20px 0;
    svg {
      margin-right: 10px;
      color: ${colorsVariables.purple};
    }
  }
  p {
    color: ${colorsVariables.white};
    margin: 10px 0;
    strong {
      margin-right: 10px;
      font-weight: 200px;
    }
    svg {
      margin-right: 10px;
      font-size: 20px;
    }
  }
`;

export const BtnReturn = styled.button`
  margin-right: 30px;
  background-color: ${colorsVariables.white};
  border: none;
  padding: 10px;
  border-radius: 50%;
  transition: all 0.5s;
  :hover {
    transform: scale(1.1);
    border: ${colorsVariables.borderBtn};
    background-color: transparent;
  }
  svg {
    font-size: 25px;
    color: ${colorsVariables.purple};
  }
`;
export const BtnRepository = styled.button`
  background-color: ${colorsVariables.white};
  border: none;
  padding: 10px;
  border-radius: 15px;
  transition: all 0.5s;
  a {
    font-size: 16px;
    color: ${colorsVariables.purple};
  }
  :hover {
    transform: scale(1.1);
    border: ${colorsVariables.borderBtn};
    background-color: transparent;
  }
`;
