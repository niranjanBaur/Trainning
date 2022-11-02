import React from "react";
import './Display.css'

export default function Display(props) {

  const { title } = props;

  return <div className="todo">{title}</div>;
}
