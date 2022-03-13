import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        transition: all .5s linear;
    }
    .credit-link {
        color: ${({theme}) => theme.text};
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#121212',
    primary: '#6200ee',
  };
  
  export const darkTheme = {
    body: 'rgb(49, 59, 114)',
    text: '#fff',
    primary: '#bb86fc',
  };