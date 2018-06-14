import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionNewPage from "./QuestionNewPage";
import SignInPage from "./SignInPage";
import WelcomePage from "./WelcomePage";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/session/new" component={SignInPage} />
            <Route exact path="/questions" component={QuestionIndexPage} />
            <Route path="/questions/new" component={QuestionNewPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
