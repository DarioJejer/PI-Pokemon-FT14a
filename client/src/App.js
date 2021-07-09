import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Home from "./Pages/Home/Home.jsx";


function App() {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/pokemons" component={Home} />
    </>
  );
}

export default App;
