// import './LandingPage.css';
import { Link } from 'react-router-dom';
import NavBar from "../../Components/NavBar/NavBar.jsx";
import PokeCard from "../../Components/PokeCard/PokeCard.jsx";

function Home() {
    return (
      <>
        <NavBar />
        This is the Pokemons Page
        <PokeCard />
      </>
    );
  }
  
export default Home;