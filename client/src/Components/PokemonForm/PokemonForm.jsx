import "./PokemonForm.css";
import { connect } from "react-redux";
import { useState } from 'react';
import { createPokemon } from '../../Actions/mainAction.js';

function PokemonForm(props) {
  
  const [input, setInput] = useState({
    name: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    typesIds: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPokemon(input);
  }
    
  const handleInputChange = function(e) {
    setInput({...input,[e.target.name]: e.target.value}); 
  }

  const handleTypeSelection = function(e) {
    if(!input.typesIds.includes(e)){
      setInput({...input, typesIds: [...input.typesIds, e]});
    }
    else
      setInput({...input, typesIds: input.typesIds.filter(t => t !== e)}); 
  }

  return (
    <div className="form-container">
      <form className="pokemon-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label>Name: </label>
          <input type="text" name="name" value={input.name} onChange={handleInputChange} placeholder="Name" /> 
        </div>
        <div>
          <label>Hp: </label>
          <input type="number" name="hp" value={input.hp} onChange={handleInputChange} placeholder="Hp" /> 
        </div>
        <div>
          <label>Attack:  </label>
          <input type="number" name="attack" value={input.attack} onChange={handleInputChange} placeholder="Attack" /> 
        </div>
        <div>
          <label>Defense:  </label>
          <input type="number" name="defense" value={input.defense} onChange={handleInputChange} placeholder="Defense" /> 
        </div>
        <div>
          <label>Speed:  </label>
          <input type="number" name="speed" value={input.speed} onChange={handleInputChange} placeholder="Speed" /> 
        </div>
        <div>
          <label>Height:  </label>
          <input type="number" name="height" value={input.height} onChange={handleInputChange} placeholder="Height" /> 
        </div>
        <div>
          <label>Weight:  </label>
          <input type="number" name="weight" value={input.weight} onChange={handleInputChange} placeholder="Weight" /> 
        </div>
        <div>
          {props.types.map(type => {
            return (
              <div key={type.id}>
                <input type="checkbox" id={type.id} name={type.name} value={type.name} onChange={() => handleTypeSelection(type.id)} />                           
                <label htmlFor={type.id}>{type.name}</label>
              </div>
            )
          })}
        </div>
        <input type="submit" value="Agregar" className="btn btn-primary mb-2" />
      </form>
    </div>
  );
  }

function mapStateToProps(state) {
  return {
    types: state.types
  };
}  

const mapDispatchToProps = {
  createPokemon
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
  