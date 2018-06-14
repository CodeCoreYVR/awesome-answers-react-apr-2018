import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "./Clock";

function NavBar(props) {
  const { auth } = props;

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
      {auth.user === null ? (
        <NavLink exact to="/session/new">
          Sign In
        </NavLink>
      ) : (
        <span>👩‍💻 {auth.user.full_name}</span>
      )}
      <Clock />
    </nav>
  );
}

export default NavBar;
