import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionNewPage from "./QuestionNewPage";
import SignInPage from "./SignInPage";
import WelcomePage from "./WelcomePage";
import NotFoundPage from "./NotFoundPage";
import { Authenticator, Authenticate } from "./Authenticator";
import AuthRoute from "./AuthRoute";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <Authenticator>
        <Router>
          <div className="App">
            <Authenticate>{props => <NavBar auth={props} />}</Authenticate>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <AuthRoute
                redirect={false}
                path="/session/new"
                component={SignInPage}
              />
              <AuthRoute
                exact
                path="/questions"
                component={QuestionIndexPage}
              />
              <AuthRoute path="/questions/new" component={QuestionNewPage} />
              <Route path="/questions/:id" component={QuestionShowPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </Authenticator>
    );
  }
}

export default App;
