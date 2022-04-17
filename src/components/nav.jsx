import React, { useState } from "react";

import styled from "styled-components";
import { FaAlignJustify } from "react-icons/fa";
import NavList from "./NavList";
import Link from "react-scroll/modules/components/Link";

const Nav = () => {
  const [expandNav, setExpandNav] = useState(false);
  //Event Handlers
  const ExpandNavHandler = (state) => {
    setExpandNav(!state);
  };
  return (
    <>
      <NavBar>
        <Logo>
          <Link to="home" spy={true} smooth={true}>
            <p>DEV </p>
          </Link>
        </Logo>
        <NavToggle>
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
        </NavToggle>
        <ToggleButton onClick={() => ExpandNavHandler(expandNav)}>
          <FaAlignJustify />
        </ToggleButton>
      </NavBar>
      {expandNav && <NavList />}
    </>
  );
};

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  display: flex;
  margin: 0;
  min-height: 55px;
  height: 5vh;
  justify-content: space-between;
  align-items: center;
  background-color: #080808;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const Logo = styled.div`
  p {
    font-family: "Grape Nuts", cursive;
    text-decoration: none;
    border: none;
    border-radius: 2rem;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 1px 5px;
    margin: 1rem 2rem;
    color: white;
    transition: all 0.3s ease;
  }
  p:hover {
    cursor: pointer;
    color: #9adcf0;
  }
`;

const NavToggle = styled.ul`
  display: none;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  align-items: center;
  padding-top: 6px;
  height: 100%;
  list-style: none;
  color: white;
  font-size: 1.5rem;
  font-weight: lighter;
  li {
    margin-right: 3rem;
    font-size: 1rem;

    &:hover {
      cursor: pointer;
      color: #9adcf0;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const ToggleButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 40px;
  color: white;
  border: none;
  font-size: 30px;
  background: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export default Nav;

// font-family: 'Poppins', sans-serif;
