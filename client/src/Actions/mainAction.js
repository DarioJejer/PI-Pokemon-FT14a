import { SET_UP_POKEMONS, CREATE_POKEMON, 
  SEARCH_POKEMON, SELECT_POKEMON_BY_NAME, SET_UP_TYPES, 
  SELECT_PAGE, FILTER_BY_TYPE, ORDER_BY, 
  RESET_FILTERED_POKEMONS, 
  SET_TYPE_FILTER,
  SET_ORDER_BY,
  SET_POKEMON_SEARCH,
  SET_UP_CUSTOM_POKEMONS,
  RESET_FILTERED_POKEMONS_WITH_CUSTOMS,
  SET_SHOW_CUSTOM_POKEMONS,
  RESET_FILTERS} from "./constans.js";
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
export function setUpCustomPokemons() {
  return function(dispatch) {
    return fetch("http://localhost:3001/customPokemons")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: SET_UP_CUSTOM_POKEMONS, payload: json });
      });
  };
}
export function searchPokemon(pokemonName) {
  return { type: SEARCH_POKEMON, payload: pokemonName }
}
export function setPokemonSearch(type) {
  return { type: SET_POKEMON_SEARCH, payload: type }
}
export function createPokemon(input) {
  return function(dispatch) {
    try{
      return (
        axios.post("http://localhost:3001/pokemons", {...input})      
            .then(newPokemon => {
              alert("Tu pokemon fue creado");
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
export function setShowCustomPokemons(value) {
  return { type: SET_SHOW_CUSTOM_POKEMONS, payload: value }
}
export function selectPokemonByName(pokemonName) {
  return function(dispatch) {    
      return fetch(`http://localhost:3001/pokemons/?name=${pokemonName}`)
      .then(response => {
        if(response.status === 400){
          return undefined;
        }
        return response.json()})
      .then(json => {
          dispatch({ type: SELECT_POKEMON_BY_NAME, payload: json });
        });
  };
}
export function selectPage(pageNumber) {
  return { type: SELECT_PAGE, payload: pageNumber }
}
export function filterPokemonsByType(type) {
  return { type: FILTER_BY_TYPE, payload: type }
}
export function setTypeFilter(type) {
  return { type: SET_TYPE_FILTER, payload: type }
}
export function orderPokemons(compareFunc) {
  return { type: ORDER_BY, payload: compareFunc }
}
export function setOrderPokemonsBy(compareFunc) {
  return { type: SET_ORDER_BY, payload: compareFunc }
}
export function resetFilters() {
  return { type: RESET_FILTERS, payload: {} }
}
export function resetFilteredPokemons() {
  return { type: RESET_FILTERED_POKEMONS, payload: {} }
}
export function resetFilteredPokemonsWithCustoms() {
  return { type: RESET_FILTERED_POKEMONS_WITH_CUSTOMS, payload: {} }
}
