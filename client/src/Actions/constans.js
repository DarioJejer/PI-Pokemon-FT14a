import { PokemonsPerPage } from "../Components/PaginationBar/PaginationBar";

export const SET_UP_TYPES = "SET_UP_TYPES";
export const SET_UP_POKEMONS = "SET_UP_POKEMONS";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const SELECT_POKEMON = "SELECT_POKEMON";
export const SELECT_PAGE = "SELECT_PAGE";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const ORDER_BY = "ORDER_BY";
export const RESET_FILTERED_POKEMONS = "RESET_FILTERED_POKEMONS";


export const selectPokemonsByPage = (pokemons, pageNumber) => { 
    return pokemons.slice((pageNumber-1)*PokemonsPerPage, pageNumber*PokemonsPerPage);
}