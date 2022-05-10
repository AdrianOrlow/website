import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily.primary}, sans-serif;
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.gray};
    font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
    line-height: normal;
  }

  #__next {
    max-width: 100vw;
    overflow: hidden;
  }
  
  h1, h2, h3, h4, h5 {
    margin: 0;
  }
  
    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
    }
    
    @font-face {
      font-family: "Poppins";
      src: url("/static/fonts/Poppins/Poppins-Regular.ttf");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Poppins";
      src: url("/static/fonts/Poppins/Poppins-Bold.ttf");
      font-style: normal;
      font-weight: 600;
      font-display: swap;
    }
   
    .fade-enter {
      opacity: 0;
    }
    
    .fade-enter-active {
      opacity: 1;
      transition: opacity 200ms;
    }
    
    .fade-exit {
      opacity: 1;
    }
    
    .fade-exit-active {
      opacity: 0;
      transition: opacity 200ms;
    }
`;

export default GlobalStyle;
