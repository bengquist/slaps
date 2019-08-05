import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 15px;
    background: rgba(247, 247, 247, 1);
    height: 100vh;
    box-sizing: border-box;
  }
  body {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
  :root {
    --step-up-5: 2em;
    --step-up-4: 1.7511em;
    --step-up-3: 1.5157em;
    --step-up-2: 1.3195em;
    --step-up-1: 1.1487em;
    /* baseline: 1em */
    --step-down-1: 0.8706em;
    --step-down-2: 0.7579em;
    --step-down-3: 0.6599em;
    --step-down-4: 0.5745em;
    --step-down-5: 0.5em;
    /* Colors */
    --header: rgb(0,0,0);
  }
  @font-face {
    font-family: 'pt-sans';
    src: url('/static/Poppins-Medium.woff')
    format('woff2');
    font-weight: normal; 
    font-style: normal;
  }
  @font-face {
    font-family: 'pt-sans';
    src: url('/static/Poppins-SemiBold.woff')
    format('woff2');
    font-weight: bold; 
    font-style: bold;
  }
  @font-face {
    font-family: 'pt-sans';
    src: url('/static/Poppins-Bold.woff')
    format('woff2');
    font-weight: bolder; 
    font-style: bolder;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul, button {
    font-family: "pt-sans"
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  p, h1 {
    margin: 0;
  }
  ol, ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    background: none;
    border: none;
    color: inherit;

    :hover {
      cursor: pointer;
    }
    :focus {
      outline: none;
    }
  }
  /* Links */
  a {
    text-decoration: none;
    color: inherit;
  &.active {
      text-decoration: none;
    }
  }
`;
