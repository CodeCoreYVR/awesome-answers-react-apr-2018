import React, { Component } from "react";

const initialAuth = {
  loading: true,
  user: null
};

const { Consumer, Provider } = React.createContext(initialAuth);

export class Authenticator extends Component {
  constructor(props) {
    super(props);

    this.state = initialAuth;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false, user: { firstName: "Jon Snow" } });
    }, 5000);
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const Authenticate = props => {
  const { children } = props;

  return <Consumer>{auth => children(auth)}</Consumer>;
};
