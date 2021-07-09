import './PokeCard.css';
import { Link } from 'react-router-dom';

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