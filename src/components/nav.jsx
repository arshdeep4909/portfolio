import styled from "styled-components";
import background from "../image/background.webp";

const Nav = () => {
  return (
    <NavBar>
      <Logo>
        <p href="#">Dev</p>
      </Logo>
      <NavList>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </NavList>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  margin: 0;
  height: 7vh;
  font-family: "Grape Nuts", cursive;
  justify-content: space-between;
  align-items: center;
  background-color: #080808;
`;
const Logo = styled.div`
  p {
    text-decoration: none;
    border: none;
    border-radius: 2rem;
    font-size: 3rem;
    padding: 1px 10px;
    margin: 1rem 3rem;
    color: white;
    transition: all 0.3s ease;
  }
  p:hover {
    cursor: pointer;
    color: #9adcf0;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 6px;
  height: 100%;
  list-style: none;
  color: white;
  font-size: 1.5rem;
  font-weight: lighter;
  li {
    margin-right: 3rem;
    &:hover {
      cursor: pointer;
      color: #9adcf0;
    }
  }
`;

export default Nav;

// font-family: 'Poppins', sans-serif;
