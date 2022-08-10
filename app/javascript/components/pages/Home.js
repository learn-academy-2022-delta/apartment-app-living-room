import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";

export default class Home extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log("logged_in:", logged_in);
    console.log("current_user:", current_user);
    return (
      <>
        {/* logged out user */}
        {!logged_in && <h1>Welcome</h1>}
        {!logged_in && (
          <p>
            Discover your new home search our available apartment listings.
            You'll find your next home here!
          </p>
        )}
        <Nav>
          {!logged_in && (
            <NavItem>
              <a href={sign_in_route} className="nav-link">
                Sign In
              </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <a href={new_user_route} className="nav-link">
                Sign Up
              </a>
            </NavItem>
          )}
        </Nav>

        {/* --------------------------------------------------------------------------------------- */}

        {/* logged in user */}
        {logged_in && <h1>Welcome User</h1>}
        {logged_in && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis
            hendrerit dolor magna. Aliquet eget sit amet tellus cras. Tincidunt
            tortor aliquam nulla facilisi cras fermentum odio eu.
          </p>
        )}
        <Nav>
          {logged_in && (
            <NavItem>
              <button>My Listings</button>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <button>View Listings</button>
            </NavItem>
          )}
        </Nav>
      </>
    );
  }
}
