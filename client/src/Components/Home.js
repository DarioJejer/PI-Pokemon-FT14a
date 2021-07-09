import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="window">
        <Link to='/pokemons'>
          <button className="enterButton">Enter</button>
        </Link>
      </div>
    );
  }
  
export default Home;


