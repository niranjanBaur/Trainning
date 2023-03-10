import React from 'react'
import Chart from '../../Components/Charts/Chart'
import Featured from '../../Components/Featured/Featured'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Table from '../../Components/Table/Table'
import Widgets from '../../Components/Widgets/Widgets'
import "./home.scss"

// https://www.youtube.com/watch?v=yKV1IGahXqA


const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widgets type = "user"/>
            <Widgets type = "order"/>
            <Widgets type = "earning"/>
            <Widgets type = "balance"/>
          </div>

          <div className='charts'>
            <Featured/>
            <Chart/>
          </div>

          <div className="listContainer">
            <div className="listTitle">
              Latest Transaction
            </div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home