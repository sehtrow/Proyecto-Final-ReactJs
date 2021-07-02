import React, { Component } from "react";
import Error from "../Error";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {    
    this.setState({ hasError: true });    
  }

  render() {
    if (this.state.hasError) {
      return <Error/>;
    }else{
      return <div>{this.props.children}</div>;
    }
  }
}

export default ErrorBoundary;