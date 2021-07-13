import { PokemonsPerPage } from "../Components/PaginationBar/PaginationBar";

export const GET_TYPES = "GET_TYPES";
export const GET_POKEMONS = "GET_POKEMONS";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const SELECT_POKEMON = "SELECT_POKEMON";
export const SELECT_PAGE = "SELECT_PAGE";

export const selectPokemonsByPage = (pokemons, pageNumber) => { 
    return pokemons.slice((pageNumber-1)*PokemonsPerPage, pageNumber*PokemonsPerPage);
}