import React from "react";
import "./EachList.css";

export default function EachList(props) {
  let data = localStorage.getItem("weatherData");
  data = JSON.parse(data);

  return (
    <>
      <div className="eachListCont">
        <div className="tempAndCity">
          <div id="temp">{props.temp}° C</div>
          <div id="city">{props.city} <span id="country">({props.country})</span></div>
        </div>

        <div id="date_and_time">{props.time}</div>
        <div id="delBtn">
          <button id="delBtn">Delete</button>
        </div>
      </div>
    </>
  );
}
