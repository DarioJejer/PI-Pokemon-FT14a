// import './LandingPage.css';
import { Route } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import PokeDetail from "../../Components/PokeDetail/PokeDetail.jsx";
import PokemonForm from "../../Components/PokemonForm/PokemonForm.jsx";
import PokemonsCards from "../../Components/PokemonsCards/PokemonsCards.jsx";

function Home() {
    return (
      <>
        <NavBar />
        <Route exact path="/pokemons" component={PokemonsCards} />
        <Route exact path="/pokemons/createPokemon" component={PokemonForm} />        
        <Route exact path="/pokemons/selectedPokemon" component={PokeDetail} />        
      </>
    );
  }
  
export default Home;