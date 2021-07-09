import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
      <div className="window">
        <Link to='/pokemons'>
          <button className="enterButton">Enter</button>
        </Link>
      </div>
    );
  }
  
export default LandingPage;


