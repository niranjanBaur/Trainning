import React, { Component } from "react";
import { ButtonSty } from "../Styled/ButtonSty";

export default class Button extends Component {
  render() {
    return (
        <>
            <ButtonSty bg="red">
                {this.props.title}
            </ButtonSty>
        </>
    )
  }
}
