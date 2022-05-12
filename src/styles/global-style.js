import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme: { color } }) => color.grey500};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding:0;
    margin:0;
  }
  a {
    transition: .5s;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme: { color } }) => color.mainPurple}
  }

  button {
    color: ${({ theme: { color } }) => color.mainPurple}
  }

  .ant-btn-primary {
 background-color: ${({ theme: { color } }) => color.mainPurple};
 border: ${({ theme: { color } }) => color.mainPurple};

 &:hover{
    background-color: ${({ theme: { color } }) => color.mainPurple};
 }

 }
}
  `;
