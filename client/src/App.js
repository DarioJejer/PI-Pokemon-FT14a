import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import { connect } from "react-redux";
import { filterPokemonsByType, resetFilteredPokemons, setUpPokemons, setUpTypes } from "./Actions/mainAction.js";
import React, { useEffect } from "react";

function App(props) {

  useEffect(() => {
    props.setUpPokemons();
    props.setUpTypes();
  });

  useEffect(() => {
    props.resetFilteredPokemons();
    
    let selectedType = props.filtersForPokemons.type;
    if(selectedType !== "All"){
      props.filterPokemonsByType(selectedType)
    }

  }, [props.filtersForPokemons])

  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route path ="/pokemons" component={Home} />
    </>
  );
}


function mapStateToProps(state) {
  return {
    filtersForPokemons: state.filtersForPokemons
  };
}

const mapDispatchToProps = {
  setUpPokemons,
  setUpTypes,
  resetFilteredPokemons,
  filterPokemonsByType
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
