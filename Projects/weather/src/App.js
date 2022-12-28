import './App.css';
import MainBody from './Components/MainBody/MainBody';
// import RightDetail from './Components/RightDetail/RightDetail';
import SideNav from './Components/SideNav/SideNav';
// import Card from './Components/Card/Card';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Map from './Pages/Map/Map';
import SaveLocation from './Pages/SaveLocation/SaveLocation';


function App() {

  const weatherData = (data) => {

    // console.log(data)

    data = JSON.stringify(data)


      return data
  }

  return (
    <div className="App">

      <Router>
     
        <SideNav/>
          <Routes>
            <Route exact path='/' element={<MainBody weatherData = {weatherData}/>}/>
            <Route exact path='/map' element={<Map/>}/>
            <Route exact path='/savelocation' element={<SaveLocation/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
