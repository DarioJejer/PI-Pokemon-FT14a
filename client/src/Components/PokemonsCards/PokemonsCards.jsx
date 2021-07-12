import './PokemonsCards.css';
import PokeCard from "../PokeCard/PokeCard.jsx";
import { connect } from "react-redux";

function PokemonsCards(props) { 
    return (
      <div className="window"> 
        {props.displayPokemons.map(pokemon => <PokeCard key={pokemon.id} pokemon={pokemon}/>)}
      </div>
    );
  }

  function mapStateToProps(state) {
    return {
      displayPokemons: state.displayPokemons
    };
  }
  
  export default connect(
    mapStateToProps,
  )(PokemonsCards);
  