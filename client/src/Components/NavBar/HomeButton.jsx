import { useHistory } from 'react-router-dom';
import { resetFilters, setShowCustomPokemons } from '../../Actions/mainAction';
import { connect } from "react-redux";

function HomeButton(props) {

  const {push} = useHistory();

    const handleButtonClick = () => {
        props.resetFilters();
        props.setShowCustomPokemons(false);
        push("/pokemons");
    }

    return (
        <button onClick={handleButtonClick}>Home</button>
    );
  }

  const mapDispatchToProps = {
    resetFilters,
    setShowCustomPokemons
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(HomeButton);