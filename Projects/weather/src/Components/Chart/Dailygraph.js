// import "./styles.css";
import React from "react";
import { DailygraphSty } from "../Styled/DailyGraphSty";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// let dailyData = JSON.parse(localStorage.getItem("dailyData"));

// const data = dailyData?.list[0]

// console.log(dailyData, "hello");

// const data = [];

// for (let i = 0; i < 9; i++) {
//   data.push({
//     date: dailyData[i]?.dt_txt,
//     temp: dailyData[i]?.main?.temp
//   });
// }

// console.log(data);

const data = [
    {
        temp: 20,
        date: "20/12/22"
    },
    {
        temp: 20,
        date: "20/12/22"
    },
    {
        temp: 20,
        date: "20/12/22"
    },
    {
        temp: 20,
        date: "20/12/22"
    },
]

export default function App() {
  return (
    <DailygraphSty>
      <div className="chart">
        <LineChart
          width={750}
          height={250}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date" />
          <YAxis dataKey="temp" />
          <Tooltip />
          <Legend />
          {/* <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 9 }}
          /> */}
          <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
        </LineChart>
      </div>
    </DailygraphSty>
  );
}
