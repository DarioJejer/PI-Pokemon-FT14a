import { SET_UP_POKEMONS, CREATE_POKEMON, SEARCH_POKEMON, SELECT_POKEMON, SET_UP_TYPES, SELECT_PAGE, selectPokemonsByPage, FILTER_BY_TYPE } from "../Actions/constans.js";
import { PokemonsPerPage } from "../Components/PaginationBar/PaginationBar.jsx";

const initialState = {
  types: [],
  pokemons: [],
  filteredPokemons: [],
  displayedPokemons: [], 
  selectedPokemon: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_UP_TYPES:
      return Object.assign({}, state, {
        types: action.payload,
      });
    case SET_UP_POKEMONS:
      return Object.assign({}, state, {
        pokemons: action.payload,
        filteredPokemons: action.payload,
        displayedPokemons: action.payload.slice(0,PokemonsPerPage)
      });
    case CREATE_POKEMON:
      return Object.assign({}, state, {
        pokemons: [...state.pokemons, action.payload]
      });
    case SEARCH_POKEMON:
      return Object.assign({}, state, {
        filteredPokemons: state.pokemons.filter(p => p.name.includes(action.payload))
      });
    case SELECT_POKEMON:
      return Object.assign({}, state, {
        selectedPokemon: action.payload
      });
    case SELECT_PAGE:
      return Object.assign({}, state, {
        displayedPokemons: selectPokemonsByPage(state.filteredPokemons, action.payload)
      });
    case FILTER_BY_TYPE:
      return Object.assign({}, state, {
        filteredPokemons: state.pokemons.filter(p => p.types.includes(action.payload))
    });
    default:
      return state;
  }
};
