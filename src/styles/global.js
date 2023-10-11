import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'Pixelify Sans', cursive; 
  } */
  html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  /* font-weight: normal; */
  font-family: 'Pixelify Sans', cursive;
 
}

ol, ul, li {
  list-style: none;

}
img {
  max-width: 100%;
  height: auto;
}
`;
export default GlobalStyle;
