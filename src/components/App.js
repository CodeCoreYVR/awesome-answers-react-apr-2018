import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// PAGES
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";
import WelcomePage from "./WelcomePage";

import NavBar from "./NavBar";
import Session from "../requests/session";

class App extends Component {
  componentDidMount() {
    Session.create({
      email: "js@winterfell.gov",
      password: "supersecret"
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={WelcomePage} />
          <Route path="/questions" component={QuestionIndexPage} />
          {/* <QuestionShowPage /> */}
        </div>
      </Router>
    );
  }
}

export default App;
