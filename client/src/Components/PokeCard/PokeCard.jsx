import './PokeCard.css';
import { Link } from 'react-router-dom';

// const pokemon = {
//     name: "bulbasaur",
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     type: [
//       "grass",
//       "poison"
//     ]};

function PokeCard({pokemon}) {
    return (
      <>
        <div className="box">
            <h3>Name: {pokemon.name}</h3>
            <img src={pokemon.img} className="pokeImg"/>
            {pokemon.type.map(type => 
                <h3>Type: {type}</h3>
            )}
        </div>
      </>
    );
  }
  
export default PokeCard;