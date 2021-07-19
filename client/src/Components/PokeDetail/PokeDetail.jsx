
import "./PokeDetail.css";
import { connect } from "react-redux";

function PokeDetail(props) { 

    const pokemon = props.pokemon;
    console.log(pokemon);
    if(pokemon){
      return (
        <div className="details-container">
          <div className="details-card">
            <h3>Name: {pokemon.name}</h3>
            <img src={pokemon.img} alt={pokemon.name} className="pokeImg" />
            <h3> Type: {pokemon.types.join(", ")} </h3>
            <h3>Hp: {pokemon.hp}</h3>
            <h3>Attack: {pokemon.attack}</h3>
            <h3>Defense: {pokemon.defense}</h3>
            <h3>Speed: {pokemon.speed}</h3>
            <h3>Height: {pokemon.height}</h3>
            <h3>Weight: {pokemon.weight}</h3>
          </div>
        </div>
      );      
    }
    else{
      return(
        <div>Ups, we couldn't find your pokemon</div>
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
  