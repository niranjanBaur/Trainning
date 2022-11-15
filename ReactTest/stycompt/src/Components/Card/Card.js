import React, { Component } from "react";
import { CardSty } from "../Styled/CardSty";

export default class Card extends Component {
  render() {
    return (
    <CardSty>
        <div>
          <h2>Grow Together</h2>
          <p>
            allow you to write actual CSS code to style your components. It also
            removes the mapping between components and styles using components
            as a low-level styling construct could not be easier!
          </p>
        </div>
        <div>
            <img src="https://t4.ftcdn.net/jpg/04/82/22/03/240_F_482220399_zBErNXSCaqFoetPAtx8KhygjPYPIbpBm.jpg"/>
        </div>
      </CardSty>
    );
  }
}
