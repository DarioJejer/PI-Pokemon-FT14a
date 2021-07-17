import './UrlError.css';
import { Link } from 'react-router-dom';

function UrlError() {
    return (
      <div className="error-page">
        <p>Page not found, return to Home: </p>
        <Link to='/pokemons'>
          <button className="enterButton">Enter</button>
        </Link>
      </div>
    );
  }
  
export default UrlError;