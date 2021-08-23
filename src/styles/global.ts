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
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  :root {
    --pale-lilac: #e4e7f4;
    --bluey-grey: #9198af;
    --black: #2a2d3b;
    --light-yellowish-green: #dbff90;
    --white-two: #ffffff;
    --cloudy-blue: #c0c3d2; ￼
  }
`;
