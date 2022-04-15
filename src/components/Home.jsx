import styled from "styled-components";
import { FaGithub, FaLinkedin, FaAngleDown } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import background from "../image/background.png";
const Home = () => {
  return (
    <>
      <Main>
        <div className="margin">
          <p> ── HELLO THERE</p>
          <h1>I am Arshdeep Singh.</h1>
          <h1>I am a Front-End Developer.</h1>
        </div>
        <Buttons>
          <button>
            <FaGithub />
          </button>
          <button>
            <FaLinkedin />
          </button>
          <button>
            <SiGmail />
          </button>
        </Buttons>
        <div className="ScrollButton">
          <p>Scroll down</p>
          <div>
            <FaAngleDown />
          </div>
        </div>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 93vh;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  padding-top: 4rem;
  p {
    font-size: 1.5rem;
    margin: 0;
    color: #9adcf0;
    padding: 2rem;
    text-align: center;
  }
  h1 {
    font-size: 2.5rem;
    /* padding: 2rem; */
  }
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    .margin {
      margin: 2rem;
    }
    p {
      text-align: inherit;
    }
  }
`;

const Buttons = styled.div`
  margin-top: 30px;
  button {
    margin-right: 20px;
    padding-top: 3px;
    font-size: 30px;
    height: 50px;
    width: 50px;
    border-radius: 10px;
    border: none;
    transition: all 0.3s ease;
    &:hover {
      cursor: pointer;
      background-color: black;
      color: white;
    }
  }
`;

export default Home;
