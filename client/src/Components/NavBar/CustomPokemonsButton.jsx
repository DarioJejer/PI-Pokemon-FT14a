import { useHistory } from 'react-router-dom';
import { setShowCustomPokemons, resetFilters } from '../../Actions/mainAction';
import { connect } from "react-redux";

function CustomPokemonsButton(props) {

    const {push} = useHistory();

    const handleButtonClick = () => {
        props.resetFilters();
        props.setShowCustomPokemons(true);
        push("/pokemons");
    }

    return (
        <button onClick={handleButtonClick}>Your Pokemons</button>
    );
  }

  const mapDispatchToProps = {
    resetFilters,
    setShowCustomPokemons,
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(CustomPokemonsButton);