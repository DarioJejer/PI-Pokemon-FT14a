import { GET_POKEMONS, CREATE_POKEMON, SEARCH_POKEMON, SELECT_POKEMON } from "./constans.js";
import axios from "axios";

export function getPokemons() {
  return function(dispatch) {
    return fetch("http://localhost:3001/pokemons")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_POKEMONS, payload: json });
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
        axios.post("http://localhost:3001/pokemons", {...input, typesIds: []})      
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