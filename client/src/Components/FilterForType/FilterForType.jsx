import { filterPokemonsByType } from '../../Actions/mainAction';
import { connect } from "react-redux";
import { useState } from 'react';

function FilterForType(props) {

    const [selectedType, setSelectedType] = useState("");

    const handleSelect = (e) => {
      setSelectedType(e.target.value);
      props.filterPokemonsByType(e.target.value);
    }

    return (
        <div>   
          <label>Filter by Type:    
            <select value={selectedType} onChange={handleSelect}>
              <option value="" disabled hidden/>
              <option value="">All</option>
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
    filterPokemonsByType
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilterForType);