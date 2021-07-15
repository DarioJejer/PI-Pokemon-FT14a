import './NavBar.css';
import { Link } from 'react-router-dom';
import FilterForType from '../FilterForType/FilterForType';
import SearchBar from '../SearchBar/SearchBar';
import OrderSelector from '../OrderSelector/OrderSelector';

export default function NavBar() {
    return (
        <div className="navbar">    
            <Link to="/pokemons">
                This is the NavBar
            </Link>
            <Link to="/pokemons/createPokemon">
                Create a Pokemon
            </Link>
            <Link to="/pokemons/customPokemons">
                Your Pokemons
            </Link>
            <SearchBar/>
            <FilterForType/>
            <OrderSelector/>
        </div>
    );
  }
  