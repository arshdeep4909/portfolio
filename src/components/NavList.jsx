import React from "react";
import styled from "styled-components";
import Link from "react-scroll/modules/components/Link";

function NavList() {
  return (
    <Navlist id="nav-list">
      <List>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
        {/* <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li> */}
      </List>
    </Navlist>
  );
}

const Navlist = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  margin-top: 55px;
  display: none;
  color: white;
  background-color: #080808;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 1.5rem;
  font-weight: lighter;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  li {
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
    transition: all 0.2s ease-out;
    &:hover {
      cursor: pointer;
      background-color: white;
      color: #080808;
    }
  }
`;

export default NavList;
