import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import { connect } from "react-redux";
import { filterPokemonsByType, orderPokemons, resetFilteredPokemons, searchPokemon, setUpPokemons, setUpTypes } from "./Actions/mainAction.js";
import React, { useEffect } from "react";

function App(props) {

  useEffect(() => {
    props.setUpPokemons();
    props.setUpTypes();
  }, []);

  useEffect(() => {

    props.resetFilteredPokemons();

    const selectedType = props.filtersForPokemons.type;
    if(selectedType !== "All"){
      props.filterPokemonsByType(selectedType)
    }
    const pokemonName = props.filtersForPokemons.name;
    props.searchPokemon(pokemonName);

    const selectedOrder = props.filtersForPokemons.orderBy;
    props.orderPokemons(selectedOrder);

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
  filterPokemonsByType,
  orderPokemons,
  searchPokemon
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
