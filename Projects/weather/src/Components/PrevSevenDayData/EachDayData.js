import axios from "axios";
import React, { useEffect, useState } from "react";
import UseFetch from "../API/UseFetch";
import "./EachDayData.css";

export default function EachDayData() {
  const APP_ID = "32ba0bfed592484379e51106cef3f204";
  const cnt = 7;

  let weatherData = localStorage.getItem("weatherData");
  weatherData = JSON.parse(weatherData);

  let city = weatherData?.data?.name;

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=32ba0bfed592484379e51106cef3f204&units=metric`;

  //   console.log(city);

  const [data, setData] = useState(null);

  const lat = weatherData?.data?.coord?.lat;
  const lon = weatherData?.data?.coord?.lon;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res?.data);
    });
    localStorage.setItem("dailyData",JSON.stringify(data?.list))
  }, [city]);

  // console.log(data);

  const dayList = [];

  for (let i = 0; i < 9; i++) {
    dayList.push(data?.list[i]);
  }

  // console.log(dayList);

  return (
    <>
      {/* <div className="sevenDayCont"> */}
      {/* <h3>Seven Day Data</h3> */}

      {dayList.map((res) => {
        return (
          <div className="sevenDayCont">
            <div className="eachDay"> 
              <div className="dayDetails">
                <div id="icn">
                  <i class="fa-solid fa-cloud-sun"></i>
                </div>
                <div id="temp">{res?.main?.temp}°C</div>
              </div>
                <div id="date">{res?.dt_txt}</div>
            </div>
          </div>
        );
      })}
      {/* </div> */}
    </>
  );
}
