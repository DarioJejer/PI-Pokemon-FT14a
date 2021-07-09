// import './LandingPage.css';
import { Link } from 'react-router-dom';
import NavBar from "../../Components/NavBar/NavBar.jsx";
import PokemonsCards from "../../Components/PokemonsCards/PokemonsCards.jsx";

function Home() {
    return (
      <>
        <NavBar />
        <PokemonsCards />
      </>
    );
  }
  
export default Home;