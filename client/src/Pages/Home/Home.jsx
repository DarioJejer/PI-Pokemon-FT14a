// import './LandingPage.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import PokeDetail from "../../Components/PokeDetail/PokeDetail.jsx";
import PokemonForm from "../../Components/PokemonForm/PokemonForm.jsx";
import PokeCards from "../../Components/PokeCards/PokeCards.jsx";
import UrlError from "../UrlError/UrlError.jsx";

function Home() {
    return (
      <>
        <NavBar />  
        <Switch>
          <Route exact path="/pokemons" component={PokeCards} />
          <Route exact path="/pokemons/createPokemon" component={PokemonForm} />        
          <Route exact path="/pokemons/selectedPokemon" component={PokeDetail} />        
          <Route path="/*" component={UrlError}/>
        </Switch>
      </>
    );
  }
  
export default Home;