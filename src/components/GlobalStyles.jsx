import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:  0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;

    }
    //expnaded style is for the button style when nav bar is expanded 
    .expanded {
    opacity: 1;
    box-shadow: 0px 0px 3px 3px #d1d1d1;
  }
  h2 {
    margin-top: 50px;
    color: #9adcf0;
    text-transform: uppercase;
    font-size: 2rem;
  }
 
  .semi-heading {
    font-weight: bold;
    font-size: 1.4rem;
  }


.ScrollButton{
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: green;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  p {
    text-transform: uppercase;
    color: white;
    font-size: 13px;
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    div {
      position: relative;
      top: 5px;
    }
  }
  div {
    display: flex;
    align-items: center;
  }
}

`;

export default GlobalStyle;
