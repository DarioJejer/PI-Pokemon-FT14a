import { SET_UP_POKEMONS, CREATE_POKEMON, 
  SEARCH_POKEMON, SELECT_POKEMON, SET_UP_TYPES, 
  SELECT_PAGE, FILTER_BY_TYPE, ORDER_BY, 
  RESET_FILTERED_POKEMONS } from "./constans.js";
import axios from "axios";

export function setUpTypes() {
  return function(dispatch) {
    return fetch("http://localhost:3001/types")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: SET_UP_TYPES, payload: json });
      });
  };
}

export function setUpPokemons() {
  return function(dispatch) {
    return fetch("http://localhost:3001/pokemons")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: SET_UP_POKEMONS, payload: json });
      });
  };
}

export function searchPokemon(pokemonName) {
  return { type: SEARCH_POKEMON, payload: pokemonName }
}

export function createPokemon(input) {
  return function(dispatch) {
    try{
      return (
        axios.post("http://localhost:3001/pokemons", {...input})      
            .then(newPokemon => {
              let payload = {
                id: newPokemon.data.id,
                name: newPokemon.data.name,
                img: "https://bitsofco.de/content/images/2018/12/broken-1.png",
                types: newPokemon.data.types.map(t => t.name)
              } 
              dispatch({ type: CREATE_POKEMON, payload });
            }) 
      )
    }catch(error){
      console.log(error.message);
    }
  };
}

export function selectPokemon(pokemonId) {
  return function(dispatch) {    
    return fetch(`http://localhost:3001/pokemons/${pokemonId}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: SELECT_POKEMON, payload: json });
      });
  };
}

export function selectPage(pageNumber) {
  return { type: SELECT_PAGE, payload: pageNumber }
}

export function filterPokemonsByType(type) {
  return { type: FILTER_BY_TYPE, payload: type }
}

export function resetFilteredPokemons() {
  return { type: RESET_FILTERED_POKEMONS, payload: {} }
}

export function orderPokemons(compareFunc) {
  return { type: ORDER_BY, payload: compareFunc }
}