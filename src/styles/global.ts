import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100vh;
}

body {
  background: #f2f2f2;
}

#education {
  border-bottom: none;
}

#about-me {
  margin-top: 3rem;
}

`;
