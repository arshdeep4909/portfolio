import styled from "styled-components";

const Home = () => {
  return (
    <Main>
      <p> ── HELLO THERE</p>
      <h2>I am Arshdeep Singh.</h2>
      <h2>I am a Front-End Developer.</h2>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  height: 93vh;
  margin: 0;
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

export default Home;
