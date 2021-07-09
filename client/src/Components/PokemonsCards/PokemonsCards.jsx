import './PokemonsCards.css';
import PokeCard from "../PokeCard/PokeCard.jsx";
import { connect } from "react-redux";

function PokemonsCards(props) {
    return (
      <div className="window">
        {props.pokemons.map(pokemon => <PokeCard pokemon={pokemon}/>)}
      </div>
    );
  }



  function mapStateToProps(state) {
    return {
      pokemons: state.pokemons
    };
  }
  
  
  export default connect(
    mapStateToProps,
  )(PokemonsCards);
  