import "./PokeCard.css";
// import { Link } from 'react-router-dom';

function PokeCard({ pokemon }) { 
  return (
    <>
      <div className="box">
        <h3>Name: {pokemon.name}</h3>
        <img src={pokemon.img} alt={pokemon.name} className="pokeImg" />
        {pokemon.types.map(type => <h3 key={type}> Type: {type} </h3>)}
      </div>
    </>
  );
}

export default PokeCard;
