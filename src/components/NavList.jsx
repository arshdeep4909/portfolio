import React from "react";
import styled from "styled-components";

function NavList() {
  return (
    <Navlist>
      <List>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </List>
    </Navlist>
  );
}

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

const Navlist = styled.div`
  display: none;
  color: white;
  background-color: #080808;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default NavList;
