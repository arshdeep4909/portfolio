import React, { useState } from "react";

import styled from "styled-components";
import background from "../image/background.webp";
import { FaAlignJustify } from "react-icons/fa";
import NavList from "./NavList";

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
          <p href="#">DEV </p>
        </Logo>
        <NavToggle>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
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
  display: flex;
  margin: 0;
  min-height: 7vh;
  justify-content: space-between;
  align-items: center;
  background-color: #080808;
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
  position: absolute;
  top: 20px;
  right: 40px;
  color: white;
  border: none;
  font-size: 30px;
  display: none;
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
