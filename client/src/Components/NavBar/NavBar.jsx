import './NavBar.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { searchPokemon } from '../../Actions/mainAction';
import { connect } from "react-redux";

function NavBar(props) {

    const [selectedPokemonId, setSelectedPokemonId] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        props.searchPokemon(e.target.value);
        setSelectedPokemonId(props.displayPokemons[0].id)
    }

    return (
        <div className="navbar">    
            <Link to="/pokemons">
                This is the NavBar
            </Link>
            <Link to="/pokemons/createPokemon">
                Create a Pokemon
            </Link>
            <form onSubmit={handleSubmit}>
                <label>Search: </label>
                <input type="text" onChange={handleChange}/>
            </form>
        </div>
    );
  }

  function mapStateToProps(state) {
    return {
      displayPokemons: state.displayPokemons
    };
  }
  
  const mapDispatchToProps = {
    searchPokemon
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar);
  