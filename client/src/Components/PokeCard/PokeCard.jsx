import "./PokeCard.css";
// import { Link } from 'react-router-dom';

function PokeCard({ pokemon }) { 
  return (
    <>
      <div className="box">
        <h3>{CFL(pokemon.name)}</h3>
        <div className="image-box">
          <img src={pokemon.img} alt={pokemon.name} className="pokeImg" />
        </div>
        <h3> {pokemon.types.map(t => CFL(t)).join(` - `)} </h3>
      </div>
    </>
  );
}

export const CFL = (name) => name[0].toUpperCase() + name.slice(1);

export default PokeCard;
