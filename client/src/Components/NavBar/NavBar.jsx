import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/pokemons">
                This is the NavBar
            </Link>
        </div>
    );
  }
  
export default NavBar;