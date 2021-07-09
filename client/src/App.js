import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import Home from "./Components/Home/Home.js";


function App() {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/pokemons" component={Home} />
    </>
  );
}

export default App;
