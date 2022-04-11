import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInbox, FaAngleDown } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Main>
        <p> ── HELLO THERE</p>
        <h2>I am Arshdeep Singh.</h2>
        <h2>I am a Front-End Developer.</h2>
        <Buttons>
          <button>
            <FaGithub />
          </button>
          <button>
            <FaLinkedin />
          </button>
          <button>
            <FaInbox />
          </button>
        </Buttons>
        <ScrollButton>
          <p>Scroll down</p>
          <div>
            <FaAngleDown />
          </div>
        </ScrollButton>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 93vh;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  padding-top: 4rem;
  p {
    font-size: 1.5rem;
    margin: 0;
    color: #9adcf0;
    padding: 2rem;
  }
  h2 {
    font-size: 2.5rem;
    /* padding: 2rem; */
  }
  background-image: url("https://images.unsplash.com/photo-1595214134789-84fd51be3fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80");
  background-size: cover;
  background-repeat: no-repeat;
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

const ScrollButton = styled.button`
  display: flex;
  margin-top: 15rem;
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
`;
export default Home;
