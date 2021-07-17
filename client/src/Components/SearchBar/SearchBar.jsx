import { useHistory } from 'react-router-dom';
import { selectPokemonByName, setPokemonSearch } from '../../Actions/mainAction';
import { connect } from "react-redux";

function SearchBar(props) {

    const {push} = useHistory();
    const input = props.filtersForPokemons.name;

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        props.selectPokemonByName(input);
        push("pokemons/selectedPokemon");
    }

    const handleChange = (e) => {
        props.setPokemonSearch(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search: </label>
            <input type="text" value={input} onChange={handleChange}/>
        </form>
    );
  }

  function mapStateToProps(state) {
    return {
      filtersForPokemons: state.filtersForPokemons   
  };
  }
  
  const mapDispatchToProps = {
    selectPokemonByName,
    setPokemonSearch
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);