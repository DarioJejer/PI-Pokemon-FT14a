import { useHistory } from 'react-router-dom';
import { resetFilteredPokemons, searchPokemon, selectPokemon } from '../../Actions/mainAction';
import { connect } from "react-redux";

function SearchBar(props) {

    const {push} = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        props.resetFilteredPokemons();
        if(props.displayedPokemons.length !== 0)
          push("pokemons/selectedPokemon");
    }

    const handleChange = (e) => {
        props.searchPokemon(e.target.value);
        if(props.displayedPokemons.length !== 0)
          props.selectPokemon(props.displayedPokemons[0].id);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search: </label>
            <input type="text" onChange={handleChange}/>
        </form>
    );
  }

  function mapStateToProps(state) {
    return {
      displayedPokemons: state.displayedPokemons
    };
  }
  
  const mapDispatchToProps = {
    searchPokemon,
    selectPokemon,
    resetFilteredPokemons
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);