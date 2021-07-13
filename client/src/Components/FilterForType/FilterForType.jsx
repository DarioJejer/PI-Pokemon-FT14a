import { filterPokemonsByType } from '../../Actions/mainAction';
import { connect } from "react-redux";

function FilterForType(props) {

    const handleSelect = (e) => {
        props.filterPokemonsByType(e.target.value);
    }

    return (
        <div>   
          <label htmlFor="types">Filter by Type: </label>
          <select id="types" name="types" onChange={handleSelect}>
            <option value="none" selected disabled hidden/>
            <option value="">All</option>
            {props.types.map(t => {
              return(<option key={t.id} value={t.name}>{t.name}</option>)
            })}
          </select>            
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