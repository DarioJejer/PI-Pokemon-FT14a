import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchPokemon } from '../../Actions/mainAction';
import { connect } from "react-redux";

function NavBar(props) {

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
        props.searchPokemon(input);
    }
    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input);
        props.searchPokemon(input);
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
                <input type="text" value={input} onChange={handleChange}/>
            </form>
        </div>
    );
  }
  
  const mapDispatchToProps = {
    searchPokemon
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(NavBar);
  