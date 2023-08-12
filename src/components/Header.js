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
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/signin"}>Sign In</Link>
        </li>
      </ul>
    </h1>
  );
}

export default Header;
