import './NavBar.css';
import { Link } from 'react-router-dom';
import FilterForType from '../FilterForType/FilterForType';
import SearchBar from '../SearchBar/SearchBar';
import OrderSelector from '../OrderSelector/OrderSelector';
import HomeButton from './HomeButton';

export default function NavBar() {
    return (
        <div className="navbar">    
            <HomeButton/>
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
  