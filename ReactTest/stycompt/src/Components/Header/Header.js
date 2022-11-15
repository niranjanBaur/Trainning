import React, { Component } from "react";
import Button from "../Button/Button";
import { HeaderSty } from "../Styled/HeaderSty";
import { ThemeProvider } from "styled-components";


export default class Header extends Component {
  render() {
    return (
      <>
        <HeaderSty>
          {/* <div className="headerTop">
            <div><h1>Huddle</h1></div>
            <div>
            <Button title="Try it free"/>
            </div>
          </div> */}
          <div className="headerBottom">
            <div id="leftContent">
              <h2>Build The Community Your Fans Will Love</h2>
              <p>
                allow you to write actual CSS code to style your components. It
                also removes the mapping between components and styles using
                components as a low-level styling construct could not be easier!
              </p>
              <Button title="Get started for free"/>
            </div>
            <div>
                <img src="https://as2.ftcdn.net/v2/jpg/04/44/96/63/1000_F_444966339_u2PU8wwP6g1oNEdirzVICaO2x2EKetzA.jpg" alt="placeholder"/>
            </div>
          </div>
        </HeaderSty>
      </>
    );
  }
}
