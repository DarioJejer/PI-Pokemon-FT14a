import { useHistory } from 'react-router-dom';
import { setPokemonSearch, setOrderPokemonsBy, setTypeFilter, getCustomPokemons } from '../../Actions/mainAction';
import { connect } from "react-redux";

function CustomPokemonsButton(props) {

    const {push} = useHistory();

    const handleButtonClick = () => {
        props.setPokemonSearch("");
        props.setOrderPokemonsBy(()=>{return 0}); 
        props.setTypeFilter("All");
        props.getCustomPokemons();
        push("/pokemons");
    }

    return (
        <button onClick={handleButtonClick}>Your Pokemons</button>
    );
  }
  
  const mapDispatchToProps = {
    setPokemonSearch,
    setOrderPokemonsBy, 
    setTypeFilter,
    getCustomPokemons
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(CustomPokemonsButton);