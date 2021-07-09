export const GET_POKEMONS = "GET_POKEMONS";

export function getPokemons() {
    return function(dispatch) {
      return fetch("http://localhost:3001/pokemons")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_POKEMONS", payload: json });
        });
    };
}