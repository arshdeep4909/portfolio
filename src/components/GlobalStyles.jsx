import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:  0;
        padding: 0;
        box-sizing: border-box;
    }
    //expnaded style is for the button style when nav bar is expanded 
    .expanded {
    opacity: 1;
    box-shadow: 0px 0px 3px 3px #d1d1d1;
  }
    
`;

export default GlobalStyle;
