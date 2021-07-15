import { useHistory } from 'react-router-dom';
import { setPokemonSearch, setOrderPokemonsBy, setTypeFilter } from '../../Actions/mainAction';
import { connect } from "react-redux";

function HomeButton(props) {

    const {push} = useHistory();

    const handleHomeClick = () => {
        props.setPokemonSearch("");
        props.setOrderPokemonsBy(()=>{return 0}); 
        props.setTypeFilter("All");
        push("/pokemons");
    }

    return (
        <button onClick={handleHomeClick}>Home</button>
    );
  }
  
  const mapDispatchToProps = {
    setPokemonSearch,
    setOrderPokemonsBy, 
    setTypeFilter
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(HomeButton);