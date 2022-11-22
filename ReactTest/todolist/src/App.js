import "./App.css";
import PokeCard from "./Components/API/PokeCard";
import MuiCard from "./Components/Card/MuiCard";
import MuiAppbar from "./Components/Navbar/MuiAppbar";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <>
      <MuiAppbar/>
      <MuiCard width={"60%"} ele={<Todo/>}/>
      {/* <MuiCard width={"60%"} ele={<PokeCard/>}/> */}

      <div className="cardCont">
        <PokeCard/>
      </div>
      
    </>
  );
}

export default App;
