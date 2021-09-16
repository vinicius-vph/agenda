import { createGlobalStyle } from 'styled-components';
import 'normalize-package-data';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
    min-width: 500px;
  }

  main {
    max-width: 100vw;
    max-height: 100vh;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  :root {
    --black: #2a2d3b;
    --bluey-grey: #9198af;
    --cloudy-blue: #c0c3d2;
    --dark: #2a2d3b;
    --light-yellowish-green: #dbff90;
    --pale-lilac: #e4e7f4;
    --white: #e1e1e1;
    --white-two: #ffffff;
    --very-light-pink: #fff3f2;
  }
`;
