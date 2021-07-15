import { filterPokemonsByType, resetFilteredPokemons } from '../../Actions/mainAction';
import { connect } from "react-redux";
import { useState } from 'react';

function FilterForType(props) {

    const [selectedType, setSelectedType] = useState("");

    const handleSelect = (e) => {
      let selectedType = e.target.value;
      setSelectedType(selectedType);
      
      if(selectedType === "All"){
        props.resetFilteredPokemons();
      }
      else{
        props.filterPokemonsByType(selectedType);
      }
    }

    return (
        <div>   
          <label>Filter by Type:    
            <select value={selectedType} onChange={handleSelect}>
              <option value="All">All</option>
              {props.types.map(t => {
                return(<option key={t.id} value={t.name}>{t.name}</option>)
              })}
            </select>            
          </label>
        </div>
    );
  }

  function mapStateToProps(state) {
    return {
      types: state.types
    };
  }
  
  const mapDispatchToProps = {
    filterPokemonsByType,
    resetFilteredPokemons
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilterForType);