import { GET_POKEMONS, CREATE_POKEMON } from "../Actions/constans.js";

const initialState = {
  pokemons: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return Object.assign({}, state, {
        pokemons: action.payload
      });
    case CREATE_POKEMON:
      return Object.assign({}, state, {
        pokemons: [...state.pokemons, action.payload]
      });

    default:
      return state;
  }
};
