import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import { connect } from "react-redux";
import { setUpPokemons, setUpTypes } from "./Actions/mainAction.js";
import React, { useEffect } from "react";

function App(props) {

  useEffect(() => {
    props.setUpPokemons();
    props.setUpTypes();
  });

  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route path ="/pokemons" component={Home} />
    </>
  );
}

const mapDispatchToProps = {
  setUpPokemons,
  setUpTypes
};

export default connect(null, mapDispatchToProps)(App);
