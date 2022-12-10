import React from "react";
import { RightDetailSty } from "../Styled/RightDetailSty";
import UseFetch from "../API/UseFetch";
import { context } from "../MainBody/MainBody";

export default function RightDetail() {
  var currentTime = new Date();
  var time = currentTime.getHours() + ":" + currentTime.getMinutes();

  var fullTime = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();

  return (
    <>
      <RightDetailSty>
        <>
          <div className="rightCont">
            <div className="rightTop">
              <div className="cityName">
                <h3>Kolkata</h3>
                <h6>IN</h6>
              </div>
              <div className="time">
                <h3>{time}</h3>
              </div>
            </div>
            <div className="rightTemp">
              <div></div>
              <div className="temp">
                <h3>20 &deg C</h3>
                <h6>Dramatic Cloudy</h6>
              </div>
            </div>
          </div>
        </>
      </RightDetailSty>
    </>
  );
}
