import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "./Clock";

function NavBar(props) {
  const { auth } = props;

  const signOut = event => {
    event.preventDefault();

    auth.signOut();
  };

  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Welcome
      </NavLink>
      {auth.user === null ? (
        <NavLink exact to="/session/new">
          Sign In
        </NavLink>
      ) : (
        <React.Fragment>
          <NavLink exact to="/questions/new">
            New Question
          </NavLink>
          <NavLink exact to="/questions">
            Questions
          </NavLink>
          <a href="#" onClick={signOut}>
            Sign Out
          </a>
          <span>👩‍💻 {auth.user.full_name}</span>
        </React.Fragment>
      )}
      <Clock />
    </nav>
  );
}

export default NavBar;
