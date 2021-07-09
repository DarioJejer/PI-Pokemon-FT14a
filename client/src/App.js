import './App.css';
import { Route } from "react-router-dom";
import Home from "./Components/Home.js";


function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
}

export default App;
