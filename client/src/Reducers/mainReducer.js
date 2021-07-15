import { SET_UP_POKEMONS, CREATE_POKEMON, SEARCH_POKEMON, SELECT_POKEMON, SET_UP_TYPES, SELECT_PAGE, selectPokemonsByPage, FILTER_BY_TYPE, ORDER_BY, RESET_FILTERED_POKEMONS, SET_TYPE_FILTER, SET_ORDER_BY, SET_POKEMON_SEARCH } from "../Actions/constans.js";
import { PokemonsPerPage } from "../Components/PaginationBar/PaginationBar.jsx";

const initialState = {
  types: [],
  pokemons: [],
  filteredPokemons: [],
  displayedPokemons: [], 
  selectedPokemon: {},
  filtersForPokemons: {
    name: "",
    type: "All",
    orderBy: () => {return 0}
  }
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
        displayedPokemons: action.payload.slice(0,PokemonsPerPage),
        selectedPokemon: action.payload[0]
      });
    case CREATE_POKEMON:
      return Object.assign({}, state, {
        pokemons: [...state.pokemons, action.payload]
      });
    case SELECT_POKEMON:
      return Object.assign({}, state, {
        selectedPokemon: action.payload
      });
    case SELECT_PAGE:
      return Object.assign({}, state, {
        displayedPokemons: selectPokemonsByPage(state.filteredPokemons, action.payload)
      });
    case SEARCH_POKEMON:
      return Object.assign({}, state, {
        filteredPokemons: state.filteredPokemons.filter(p => p.name.includes(action.payload))
      });
    case SET_POKEMON_SEARCH:
      return Object.assign({}, state, {
        filtersForPokemons: {...state.filtersForPokemons, name: action.payload}
      });      
    case FILTER_BY_TYPE:
      return Object.assign({}, state, {
        filteredPokemons: state.filteredPokemons.filter(p => p.types.includes(action.payload))
      });
    case SET_TYPE_FILTER:
      return Object.assign({}, state, {
        filtersForPokemons: {...state.filtersForPokemons, type: action.payload}
      });
    case ORDER_BY:
      return Object.assign({}, state, {
        filteredPokemons: [...state.filteredPokemons].sort(action.payload)
      });
    case SET_ORDER_BY:
      return Object.assign({}, state, {
        filtersForPokemons: {...state.filtersForPokemons, orderBy: action.payload}
      });    
    case RESET_FILTERED_POKEMONS:
      return Object.assign({}, state, {
        filteredPokemons: [...state.pokemons]
      });
    default:
      return state;
  }
};
