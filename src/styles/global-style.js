import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme: { color } }) => color.grey500};
    overscroll-behavior: none;
    color: ${({ theme }) => theme.color.mainPurple};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding:0;
    margin:0;
  }
  a {
    transition: .5s;
    cursor: pointer;
  text-decoration: none;

  }`;
