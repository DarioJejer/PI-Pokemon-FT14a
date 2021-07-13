import './NavBar.css';
import { Link, useHistory } from 'react-router-dom';
import { searchPokemon, selectPokemon } from '../../Actions/mainAction';
import { connect } from "react-redux";
import FilterForType from '../FilterForType/FilterForType';

function NavBar(props) {

    const {push} = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        props.searchPokemon("");
        if(props.displayedPokemons.length !== 0)
          push("pokemons/selectedPokemon");
    }

    const handleChange = (e) => {
        props.searchPokemon(e.target.value);
        if(props.displayedPokemons.length !== 0)
          props.selectPokemon(props.displayedPokemons[0].id);
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
            <FilterForType/>
        </div>
    );
  }

  function mapStateToProps(state) {
    return {
      displayedPokemons: state.displayedPokemons
    };
  }
  
  const mapDispatchToProps = {
    searchPokemon,
    selectPokemon
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar);
  