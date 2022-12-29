import React, { createContext, useEffect, useState } from "react";
import { MainBodySty } from "../Styled/MainBodySty";
import UseFetch from "../API/UseFetch";
import RightDetail from "../RightDetail/RightDetail";
import Dailygraph from "../Chart/Dailygraph"
import { useNavigate } from "react-router";

export const Context = createContext();

export default function MainBody() {
  let daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthsList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
  ];

  var currentdate = new Date();
  var date =
    daysList[currentdate.getDay()] +
    " , " +
    currentdate.getDate() +
    " " +
    monthsList[currentdate.getMonth()] +
    " " +
    currentdate.getFullYear();

  // const [city,setCity] = useState(null)
  const [search, setSearch] = useState("Kolkata");
  const [savedList, setSaveList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("details")) || [];
    setSaveList(details);
  }, []);

  const { data } = UseFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8ac94042192b7f6c370bd5ad6e97b7f5`
  );
  // if (loading) return <h1>Loading ...</h1>;
  // if (err) console.log(err);

  // console.log(data);

  // const savedList = []

  const btnCLicked = (e) => {
    // e.preventDefault()

    let data = localStorage.getItem("weatherData");
    data = JSON.parse(data);

    let detailsData = localStorage.getItem("details");
    detailsData = JSON.parse(detailsData);

    // console.log(data.data.name)

    const details = {
      temp: data.data?.main.temp,
      cityName: data.data?.name,
      countryName : data.data?.sys?.country,
      dateAndTime: date   
    };

    // console.log(details);

    // console.log(savedList);


    // localStorage.setItem("details", JSON.stringify([...savedList, details]));

    //==========================================================
    //==========================================================
    //==========================================================

    if (detailsData !== null) {
      // console.log(95, search);
      // console.log(96, detailsData);
      // localStorage.setItem("details",JSON.stringify([...savedList, details]))

      const existOrNot = detailsData?.some(
        (data) => data?.cityName.toUpperCase() === search.toUpperCase()
      );

      // console.log(existOrNot);

      if (!existOrNot) {

        localStorage.setItem(
          "details",
          JSON.stringify([...savedList, details])
        );

        alert("Data added successfully")
      }
      else{
        alert("Data already present")
      }
    } else {

      setSaveList([...savedList, details]);
      localStorage.setItem("details", JSON.stringify([...savedList, details]));
      alert("Data added successfully")

    }

    // navigate("/savelocation")
  };

  // console.log(savedList, 101);
  return (
    <>
      <Context.Provider value={data}>
        {/* {props.weatherData(data)} */}
        <MainBodySty>
          <div className="mainContainer">
            <div className="mainTop">
              <div className="date">
                <div>
                  <h2>Hello, Niranjan</h2>
                </div>
                <div>
                  <h4>{date}</h4>
                </div>
              </div>
              <div className="search">
                <input
                  type="search"
                  id="search"
                  placeholder="Search Location Here"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    // event.defaultPrevented();
                  }}
                  autoComplete="off"
                />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <button id="saveBtn" onClick={btnCLicked}>
                Save
              </button>
              <div className="mainTopIcons">
                <i id="notify" class="fa-solid fa-bell"></i>
                <i id="profile" class="fa-solid fa-user"></i>
              </div>
            </div>

            {!data ? (
              <p>No Data Found or incorrect city searched</p>
            ) : (
              <div className="overView">
                <div className="overViewTop">
                  <div>
                    <h3>Today Overview</h3>
                  </div>
                  <div>
                    <h5>
                      More Details{" "}
                      <i
                        id="redirect"
                        class="fa-solid fa-arrow-up-right-from-square"
                      ></i>
                    </h5>
                  </div>
                </div>
                <div className="overviewDetail">
                  <div className="windSpeed">
                    <div id="windIcn">
                      <i class="fa-solid fa-wind"></i>
                    </div>
                    <div id="windDetails">
                      <h5>Wind Speed</h5>
                      <h2>{data?.data?.wind?.speed} km/hr</h2>
                    </div>
                  </div>
                  <div className="windSpeed">
                    <div id="windIcn">
                      <i class="fa-solid fa-wind"></i>
                    </div>
                    <div id="windDetails">
                      <h5>Wind Degree</h5>
                      <h2>{data?.data?.wind?.deg}°</h2>
                    </div>
                  </div>

                  <div className="humidity">
                    <div id="humidityIcn">
                      <i class="material-icons">water_drop</i>
                    </div>
                    <div id="windDetails">
                      <h5>Humidity</h5>
                      <h2>{data?.data?.main?.humidity} %</h2>
                    </div>
                  </div>
                  <div className="rainChance">
                    <div id="rainIcn">
                      <i class="fa-solid fa-cloud-rain"></i>
                    </div>
                    <div id="windDetails">
                      <h5>Rain Chance</h5>
                      <h2>{data?.data?.clouds?.all} %</h2>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </MainBodySty>
        <Dailygraph></Dailygraph>
        <RightDetail></RightDetail>
      </Context.Provider>
    </>
  );
}
