import "./PaginationBar.css";
import { connect } from "react-redux";
import { selectPage } from "../../Actions/mainAction";

function PaginationBar(props) { 

    let pageNumber = 0; 

    const handleClick = (newPageNumber) => {
        pageNumber = newPageNumber;
        props.selectPage(pageNumber);
    }

  return (
    <>
      <div className="pagination-bar">
        <button onClick={()=>handleClick(pageNumber-1)}>Prev</button>
        {props.pokemons.map((p,i)=> {
            if((i)%3==0)
                return <button onClick={()=>handleClick((i/3)+1)}>{(i/3)+1}</button>
        })}
        <span>...</span>
        <button onClick={()=>handleClick(pageNumber+1)}>Next</button>
      </div>
    </>
  );
}
const mapDispatchToProps = {
    selectPage
  }

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PaginationBar);