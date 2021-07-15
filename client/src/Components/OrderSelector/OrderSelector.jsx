import { orderPokemons, resetFilteredPokemons } from '../../Actions/mainAction';
import { connect } from "react-redux";
import { useState } from 'react';

function OrderSelector(props) {

    const [selectedOrder, setSelectedOrder] = useState("");

    const handleSelect = (e) => {
        let selectedOrder = e.target.value;
        setSelectedOrder(selectedOrder);
        if(selectedOrder === "Default"){
            props.resetFilteredPokemons();
        }
        else{
            props.orderPokemons(selectFunction(selectedOrder));
        }
    }

    const selectFunction = (targetFunc) => {
        switch (targetFunc) {
            case "alphaAscen":
                return alphaAscen;
            case "alphaDesc":
                return alphaDesc;
            case "byForceAscen":
                return byForceAscen;
            case "byForceDesc":
                return byForceDesc;
        }
    } 

    const alphaAscen = (firstEl, secondEl) => {
        if(firstEl.name < secondEl.name)
            return -1;
        return 1;
    }

    const alphaDesc = (firstEl, secondEl) => {
        if(firstEl.name < secondEl.name)
            return 1;
        return -1;
    }

    const byForceAscen = function (firstEl, secondEl) {
        return firstEl.attack - secondEl.attack
    }

    const byForceDesc = (firstEl, secondEl) => {
        return secondEl.attack - firstEl.attack
    }

    return (
        <div>   
          <form>
            <label>Order By:               
                <select value={selectedOrder} onChange={handleSelect}>
                    <option value="Default">Default</option>
                    <option value="alphaAscen">Alphabetically ↑</option>
                    <option value="alphaDesc">Alphabetically ↓</option>
                    <option value="byForceAscen">By Force ↑</option>
                    <option value="byForceDesc">By Force ↓</option>
                </select>            
            </label>
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
    orderPokemons,
    resetFilteredPokemons
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrderSelector);