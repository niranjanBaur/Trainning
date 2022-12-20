import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import RegistrationForm from "./Components/Register/RegistrationForm";

function App() {
  // axios
  //   .post("https://reqres.in/api/register", {
  //     email: "jojo@gamil.com",
  //     password: "hooloo",
  //   })
  //   .then((res) => console.log(res));

  return <div className="App">
    <RegistrationForm/>
  </div>;
}

export default App;
