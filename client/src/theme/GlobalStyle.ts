import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

    body {
        background-color: ${({ theme }) => theme.colors.light};
    }

    ul {
        list-style-type: none;
}

    img {
        max-width: 100%;
        height: auto;
    }
    button {
        cursor: pointer;
    }
    @media print { 
        @page {
            margin: 0;
        } 
        body {
            margin: 0;
        }
    }
`;

export default GlobalStyle;
