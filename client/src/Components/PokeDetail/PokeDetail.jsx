
import "./PokeDetail.css";
import { connect } from "react-redux";
import { CFL } from "../PokeCard/PokeCard";

function PokeDetail(props) { 

    const pokemon = props.pokemon;
    if(pokemon){
      return (
        
        <div className="details-container">
          <div className="details-card">
            <h2>{CFL(pokemon.name)}</h2>
            <img src={pokemon.img} alt={pokemon.name} className="pokeImg" />
            <div className="details-stats">
              <h3> Type: {pokemon.types.join(" - ")} </h3>
              <h3>Hp: {pokemon.hp}</h3>
              <h3>Attack: {pokemon.attack}</h3>
              <h3>Defense: {pokemon.defense}</h3>
              <h3>Speed: {pokemon.speed}</h3>
              <h3>Height: {pokemon.height}</h3>
              <h3>Weight: {pokemon.weight}</h3>
            </div>
          </div>
        </div>
      );      
    }
    else{
      return(
        <div className="fail-details">
          <div className="fail-details-box">
            <span>Ups, we couldn't find your pokemon</span>
          </div>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
        pokemon: state.selectedPokemon
    };
  }
  
  export default connect(
    mapStateToProps,
  )(PokeDetail);
  