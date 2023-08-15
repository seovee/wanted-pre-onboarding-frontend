import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const HeaderTitle = styled.h1`
  text-align: center;
  font-weight: 200;
  margin-bottom: 50px;
`;

const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavList = styled.li`
  list-style: none;
  font-size: 25px;
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
      <HeaderTitle>
        Wanted Front-End <strong>Assignment🧐</strong>
      </HeaderTitle>
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
            Sign Up
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
