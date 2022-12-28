import React from "react";
import "./Map.css";

export default function Map() {

  let data = localStorage.getItem("weatherData")

  data = JSON.parse(data)

  const coord = data?.data?.coord
  
  const {lon , lat} = coord

  console.log(lon)


  return (
    <>
      <div id="mapCont">
        <iframe
          id="mapIframe"
          title="map"
          src={`//maps.google.com/maps?q=${lat},${lon}&z=6&output=embed`}
        ></iframe>
      </div>
    </>
  );
}


