import React, { Component } from "react";
import { NavbarSty } from "../Styled/NavbarSty";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <NavbarSty>
          <div className="img"><h1>Huddle</h1></div>
          <div className="list">
            <li>Home</li>
            <li>About</li>
            <li>Tech</li>
            <li>Contact</li>
          </div>
        </NavbarSty>
      </>
    );
  }
}
