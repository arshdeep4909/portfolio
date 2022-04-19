import styled from "styled-components";
import { FaGithub, FaLinkedin, FaAngleDown } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import background from "../image/background.png";
import Link from "react-scroll/modules/components/Link";

const Home = () => {
  return (
    <>
      <Main id="home">
        <div className="margin">
          <p className="hello"> ── HELLO THERE</p>
          <h1>I am Arshdeep Singh.</h1>
          <h1>I am a Front-End Developer.</h1>
        </div>
        <Buttons>
          <a
            href="https://github.com/arshdeep4909"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/a-singh-"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:arshdeep4909@gmail.com?subject=Hello%20Arshdeep!">
            <SiGmail />
          </a>
        </Buttons>

        <Link to="about" spy={true} smooth={true}>
          <div className="ScrollButton">
            <p>Scroll down</p>
            <div>
              <FaAngleDown />
            </div>
          </div>
        </Link>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  padding-top: 4rem;
  .hello {
    color: #9adcf0;
  }
  p {
    padding: 2rem;
    text-align: center;
  }
  h1 {
    font-size: 2.5rem;
    padding: 10px;
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
  a {
    margin-right: 20px;
    padding: 2px 6px 0 6px;
    font-size: 30px;
    height: 50px;
    width: 50px;
    border-radius: 10px;
    border: none;
    transition: all 0.3s ease;
    background: transparent;
    color: white;

    &:hover {
      cursor: pointer;
      background-color: white;
      color: black;
    }
  }
`;

export default Home;
