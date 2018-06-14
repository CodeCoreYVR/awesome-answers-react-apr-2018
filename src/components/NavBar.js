import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "./Clock";

function NavBar(props) {
  console.log(props);
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
      <Clock />
    </nav>
  );
}

export default NavBar;
