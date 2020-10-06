import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html,
  body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: #111;
  background: rgb(242, 242, 242);
  }

  a {
    color: inherit;
    text-decoration: none;
    color: blue;
  }

  * {
    box-sizing: border-box;
  }
`;
