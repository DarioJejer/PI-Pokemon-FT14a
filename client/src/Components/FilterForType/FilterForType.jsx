import { filterPokemonsByType, resetFilteredPokemons, setTypeFilter } from '../../Actions/mainAction';
import { connect } from "react-redux";
import { useState } from 'react';

function FilterForType(props) {

    const [selectedType, setSelectedType] = useState("");
    const newSelectedType = props.filtersForPokemons.type;

    const handleSelect = (e) => {
      props.setTypeFilter("normal");
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
          <label>Filter by Type {newSelectedType}:    
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
      types: state.types,
      filtersForPokemons: state.filtersForPokemons
    };
  }
  
  const mapDispatchToProps = {
    filterPokemonsByType,
    resetFilteredPokemons,
    setTypeFilter
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilterForType);