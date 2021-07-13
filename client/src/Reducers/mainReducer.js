import { GET_POKEMONS, CREATE_POKEMON, SEARCH_POKEMON, SELECT_POKEMON, GET_TYPES, SELECT_PAGE, selectPokemonsByPage } from "../Actions/constans.js";
import { PokemonsPerPage } from "../Components/PaginationBar/PaginationBar.jsx";

const initialState = {
  types: [],
  pokemons: [],
  displayedPokemons: [], 
  selectedPokemon: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      return Object.assign({}, state, {
        types: action.payload,
      });
    case GET_POKEMONS:
      return Object.assign({}, state, {
        pokemons: action.payload,
        displayedPokemons: action.payload.slice(0,PokemonsPerPage)
      });
    case CREATE_POKEMON:
      return Object.assign({}, state, {
        pokemons: [...state.pokemons, action.payload],
        displayedPokemons: [...state.pokemons, action.payload]
      });
    case SEARCH_POKEMON:
      return Object.assign({}, state, {
        displayedPokemons: state.pokemons.filter(p => p.name.includes(action.payload))
      });
    case SELECT_POKEMON:
      return Object.assign({}, state, {
        selectedPokemon: action.payload
      });
    case SELECT_PAGE:
      return Object.assign({}, state, {
        displayedPokemons: selectPokemonsByPage(state.pokemons, action.payload)
      });
    default:
      return state;
  }
};
