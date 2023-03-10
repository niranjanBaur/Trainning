import "./App.css";
import Header from "./Container/Header";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ProductListing from "./Container/ProductListing";
import ProductDetails from "./Container/ProductDetails";

function App() {
  return (
    <div className="App">
        <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element = {<ProductListing/>}/>
          <Route exact path="/product/:productId" element={<ProductDetails/>}/>
          <Route>404 Page not found</Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
