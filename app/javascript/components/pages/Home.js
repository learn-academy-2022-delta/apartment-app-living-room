import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Welcome</h1>
        <h3>
          Discover your new home search our available apartment listings. You'll
          find your next home here!
        </h3>
        <Button>Sign-In</Button>
        <Button>Sign-Out</Button>
      </>
    );
  }
}
