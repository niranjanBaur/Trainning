import './App.css';
import MainBody from './Components/MainBody/MainBody';
import RightDetail from './Components/RightDetail/RightDetail';
import SideNav from './Components/SideNav/SideNav';
// import Card from './Components/Card/Card';



function App() {
  return (
    <div className="App">
      <MainBody></MainBody>
      <SideNav></SideNav>
      <RightDetail></RightDetail>
    </div>
  );
}

export default App;
