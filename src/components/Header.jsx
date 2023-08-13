import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavList = styled.li`
  list-style: none;
  font-size: 35px;
  font-weight: 700;
`;

const NavListLink = styled(NavLink)`
  text-decoration: none;
  color: orange;
`;

function Header() {
  const activeStyle = {
    color: "blue",
  };
  return (
    <>
      <h1>Assignment</h1>
      <NavContainer>
        <NavList>
          <NavListLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to={"/"}
          >
            Home
          </NavListLink>
        </NavList>
        <NavList>
          <NavListLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to={"/signup"}
          >
            Signup
          </NavListLink>
        </NavList>
        <NavList>
          <NavListLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to={"/signin"}
          >
            Sign In
          </NavListLink>
        </NavList>
        <NavList>
          <NavListLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to={"/todo"}
          >
            ToDo
          </NavListLink>
        </NavList>
      </NavContainer>
    </>
  );
}

export default Header;
