import { createGlobalStyle } from 'styled-components';
import { colorsVariables } from './colorsVariables';

const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    background-color:${colorsVariables.white};
    color: ${colorsVariables.black};
    min-height: 100vh;
    font-weight:200;
    font-family: 'Arial', sans-serif;
}

  button {
  cursor: pointer;
}
  ul,
  nav,
  a,
  li {
  text-decoration: none;
  list-style: none;
}
`;

export default GlobalStyle;
