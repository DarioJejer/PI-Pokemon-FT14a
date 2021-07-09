import './PokemonsCards.css';
import PokeCard from "../PokeCard/PokeCard.jsx";

const pokemons = [
  {
    name: "bulbasaur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: [
      "grass",
      "poison"
    ]
  },
  {
    name: "ivysaur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    type: [
      "grass",
      "poison"
    ]
  },
  {
    name: "venusaur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    type: [
      "grass",
      "poison"
    ]
  }];

function PokemonsCards() {
    return (
      <div className="window">
        {pokemons.map(pokemon => <PokeCard pokemon={pokemon}/>)}
      </div>
    );
  }
  
export default PokemonsCards;