import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F1F1F1;
    color: #ffffff;
    --webkit-font-smoothing: antialiased;

    height: 100vh;
    width: 100vw;
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
