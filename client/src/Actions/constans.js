import { PokemonsPerPage } from "../Components/PaginationBar/PaginationBar";

export const SET_UP_TYPES = "SET_UP_TYPES";
export const SET_UP_POKEMONS = "SET_UP_POKEMONS";
export const SET_UP_CUSTOM_POKEMONS = "SET_UP_CUSTOM_POKEMONS";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const SET_SHOW_CUSTOM_POKEMONS = "SET_SHOW_CUSTOM_POKEMONS";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const SET_POKEMON_SEARCH = "SET_POKEMON_SEARCH";
export const SELECT_POKEMON_BY_NAME = "SELECT_POKEMON_BY_NAME";
export const SELECT_PAGE = "SELECT_PAGE";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const SET_TYPE_FILTER = "SET_TYPE_FILTER";
export const ORDER_BY = "ORDER_BY";
export const SET_ORDER_BY = "SET_ORDER_BY";
export const RESET_FILTERS = "RESET_FILTERS";
export const RESET_FILTERED_POKEMONS = "RESET_FILTERED_POKEMONS";
export const RESET_FILTERED_POKEMONS_WITH_CUSTOMS = "RESET_FILTERED_POKEMONS_WITH_CUSTOMS";

export const selectPokemonsByPage = (pokemons, pageNumber) => { 
    return pokemons.slice((pageNumber-1)*PokemonsPerPage, pageNumber*PokemonsPerPage);
}