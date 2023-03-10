import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { productInputs, userInputs } from "./FormSource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">

            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>

            <Route path="users/">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs = {userInputs} title="Add new user"/>}/>
            </Route>

            <Route path="product">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs = {productInputs} title="Add new products"/>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// Kuljit Singh6:02 PM
// function SomeComp(){
//   const [counter,setCounter]=useState(0);
//   return <div>
//   <Counter counter={counter} setCounter={setCounter}/>
//   <SomeExpensiveWidget/>
//   <SomeExpensiveWidget/>
//   </div>
// }
 
// function Counter({counter,setCounter}){
//   return <button onClick={()=>setCounter(counter=>counter+1)}>{counter}</button>
// }
// Kuljit Singh6:08 PM
// function SomeComp({ id }) {
//   const [count, setCount] = useState(0);
//   const updateCount = () => {
//     setCount(count => count + 1);
//     console.log(count);
//   };
 
//   return <div onClick={updateCount}>{count}</div>;
// }
// Kuljit Singh6:11 PM
// class SomeClass extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      isBtnClicked: false,
//    };
//  }
 
//  handleClick(e) {
//    this.setState({ isBtnClicked: true });
//  }
 
//  render() {
//    return (
//      <>
//        {this.state.isBtnClicked ? 'Btn Clicked' : "Btn Didn't Clicked"}
//        <button onClick={this.handleClick}>click me</button>
//      </>
//    );
//  }
// }
// Kuljit Singh6:17 PM
// function App() {
//  const [info,setInfo]=useState({firstName:"",lastName:""});
 
//  const updateInfo=(e)=>{
//   setInfo((info)=>({...info,[e.target.name]:e.target.value}))
//  }
 
//   return (
//     <div className="App">
//       <input type="text" value={info.firstName} name="firstName" id="firstName" placeholder='First name' onChange={updateInfo}/>
//       <input type="text" value={info.lastName} name="lastName" id="lastName" placeholder="Last Name" onChange={updateInfo}/>
//     </div>
//   );
// }