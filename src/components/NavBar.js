import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "./Clock";

function NavBar(props) {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Welcome
      </NavLink>
      <NavLink exact to="/questions/new">
        New Question
      </NavLink>
      <NavLink exact to="/questions">
        Questions
      </NavLink>
      <NavLink exact to="/session/new">
        Sign In
      </NavLink>
      <Clock />
    </nav>
  );
}

export default NavBar;
