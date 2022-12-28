import React from "react";
import { RightDetailSty } from "../Styled/RightDetailSty";
import { Context } from "../MainBody/MainBody";
import EachDayData from "../PrevSevenDayData/EachDayData";

export default function RightDetail() {
  var currentTime = new Date();
  // var time = currentTime.getHours() + ":" + currentTime.getMinutes();

  // var fullTime =
  //   currentTime.getHours() +
  //   ":" +
  //   currentTime.getMinutes() +
  //   ":" +
  //   currentTime.getSeconds();

  return (
    <>
      <Context.Consumer>
        {(data) => {
          // console.log(data)
          return (
            <RightDetailSty>
              <>
                <div className="rightCont">
                  <div className="rightTop">
                    <div className="cityName">
                      <h3>{data?.data?.name}</h3>
                      <h6>{data?.data?.sys.country}</h6>
                    </div>
                    <div className="time">
                      <h3>{currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h3>
                    </div>
                  </div>
                  <div className="rightTemp">
                    <div id="tempIcn"><i class="fa-solid fa-cloud-sun"></i></div>
                    <div className="temp">
                      <h3>{data?.data?.main.temp}° C</h3>
                      <h6>{data?.data?.weather[0].main}</h6>
                    </div>
                  </div>

                  <EachDayData></EachDayData>
                </div>
              </>
            </RightDetailSty>
          );
        }}
      </Context.Consumer>
    </>
  );
}
