import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.js";
import Home from "./Pages/Home/Home.js";


function App() {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/pokemons" component={Home} />
    </>
  );
}

export default App;
