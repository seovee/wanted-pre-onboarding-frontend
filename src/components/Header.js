import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
        <li>
          <Link to={"/signin"}>Sign In</Link>
        </li>
        <li>
          <Link to={"/todo"}>ToDo</Link>
        </li>
      </ul>
    </h1>
  );
}

export default Header;
