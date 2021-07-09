
import {GET_POKEMONS} from '../Actions/mainAction.js';

const initialState = {
    pokemons: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return Object.assign({}, state, {
                pokemons: action.payload
              });
        default:
            return state;
    }
};