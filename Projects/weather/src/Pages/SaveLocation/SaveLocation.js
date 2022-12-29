import React from "react";
import EachList from "./EachList";
import "./SaveLocation.css";
import { v4 as uuid } from 'uuid';


export default function SaveLocation() {
  let data = localStorage.getItem("details");

  data = JSON.parse(data).sort();

  return (
    <div key={uuid()} className="listCont">
      {data?.map((res) => {
        return <EachList temp={res.temp}  city={res.cityName} country={res.countryName || "--"} time={res.dateAndTime}></EachList>;
      })}
    </div>
  );
}
