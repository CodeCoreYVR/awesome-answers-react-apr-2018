import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionNewPage from "./QuestionNewPage";
import WelcomePage from "./WelcomePage";
import { Authenticator, Authenticate } from "./Authenticator";

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
      <Authenticator>
        <Router>
          <div className="App">
            <Authenticate>{auth => <NavBar auth={auth} />}</Authenticate>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/questions" component={QuestionIndexPage} />
              <Route path="/questions/new" component={QuestionNewPage} />
              <Route path="/questions/:id" component={QuestionShowPage} />
            </Switch>
          </div>
        </Router>
      </Authenticator>
    );
  }
}

export default App;
