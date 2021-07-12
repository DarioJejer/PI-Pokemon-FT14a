import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import { connect } from "react-redux";
import { getPokemons, getTypes } from "./Actions/mainAction.js";
import React, { useEffect } from "react";

function App(props) {

  useEffect(() => {
    props.getPokemons();
    props.getTypes();
  });

  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route path ="/pokemons" component={Home} />
    </>
  );
}

const mapDispatchToProps = {
  getPokemons,
  getTypes
};

export default connect(null, mapDispatchToProps)(App);
