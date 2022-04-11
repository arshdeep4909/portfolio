import React from "react";
import styled from "styled-components";
import { SiGmail } from "react-icons/si";

function About() {
  return (
    <AboutSection>
      <h2>About</h2>
      <p className="about-heading">Personal Info</p>
      <Info>
        <div className="hello">
          <h3>Hello!</h3>
          <p>
            My name is Arshdeep Singh. I am a passionate Web Developer using
            technologies to build amazing products and solving problems. My main
            experience is in front-end developemnt. However, I am very eager to
            learn about back-end technologies.
          </p>

          <p>
            I would love to hear from you. A project, job opportunity or just a
            chat. Feel free to contact me.
          </p>
          <button>
            <SiGmail className="mail-button" />
            Get in Touch
          </button>
        </div>
        <Skills>
          <h3>Skills</h3>
          <div>
            <button>html</button>
            <button>css</button>
            <button>Javascript</button>
            <button>React</button>
            <button>Redux</button>
            <button>Git</button>
            <button>MYSQL</button>
          </div>
        </Skills>
      </Info>
    </AboutSection>
  );
}

const AboutSection = styled.div`
  max-width: 1800px;
  margin: auto;

  h2 {
    margin-top: 50px;
    color: #9adcf0;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .about-heading {
    font-weight: bold;
    font-size: 1.4rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 2fr 1fr;
  margin: 4rem 20vw;
  p {
    margin-top: 10px;
  }
  .hello {
    margin-right: 40px;

    button {
      background-color: transparent;
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 5px;
      margin: 20px 0;
      text-align: center;
      .mail-button {
        margin: 3px 5px 0 0;
        color: #292929;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Skills = styled.div`
  .div {
    display: flex;
  }
  button {
    border: none;
    margin: 5px 10px 5px 0;
    border-radius: 5px;
    padding: 5px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export default About;
