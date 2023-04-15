import styled from 'styled-components';
import { colorsVariables } from '../../styles/colorsVariables';

export const ProfileListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin: 20px 0;
  border: ${colorsVariables.borderBottomTitle};
  padding-bottom: 25px;
  border-radius: 15px;
  h2 {
    padding: 25px 0;
    font-weight: 100;
    text-transform: capitalize;
    color: ${colorsVariables.purple};
  }
  button {
    border: none;
    transition: all 0.2s ease-in-out;
    :hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    }
  }
  img {
    border-radius: 50%;
    width: 200px;
  }
`;
