import "./PaginationBar.css";
import { connect } from "react-redux";
import { selectPage } from "../../Actions/mainAction";
import { useState } from "react";

export const PokemonsPerPage = 12;

function PaginationBar(props) { 

    const [pageNumber, setPageNumber] = useState(1);
    const numOfPagesOnBar = 3;
    let totalNumberOfPages = 0;

    const handleClick = (newPageNumber) => {
        setPageNumber(newPageNumber);
        props.selectPage(newPageNumber);
    }

    const renderPageNumeration = () => {
        let numeration = []
        props.pokemons.map((_p,i)=> {
            if((i)%PokemonsPerPage==0)
                numeration.push(<button key={i} onClick={()=>handleClick((i/PokemonsPerPage)+1)}>{(i/PokemonsPerPage)+1}</button>);
        })
        totalNumberOfPages = numeration.length;
        if(pageNumber > totalNumberOfPages - numOfPagesOnBar/2){
            return numeration.splice(-numOfPagesOnBar);
        }
        if(pageNumber > numOfPagesOnBar-1){
            return numeration.slice(pageNumber-(numOfPagesOnBar-1), pageNumber+(numOfPagesOnBar-2));
        }        
        return numeration.slice(0,numOfPagesOnBar);
    }

    const renderPrevButton = () => {
        let result = [];
        if(pageNumber > 1)
         result.push(<button onClick={()=>handleClick(pageNumber-1)}>Prev</button>);       
        if(pageNumber>(numOfPagesOnBar/2 + 1))
            result.push(<span>...</span>);
        return result;
    }

    const renderNextButton = () => {
        let result = [];
        if(pageNumber<(totalNumberOfPages - numOfPagesOnBar/2))
            result.push(<span>...</span>);
        if(pageNumber < totalNumberOfPages)
            result.push(<button onClick={()=>handleClick(pageNumber+1)}>Next</button>);       
        return result;
    }

  return (
    <>
      <div className="pagination-bar">
        {renderPrevButton()}
        {renderPageNumeration()}
        {renderNextButton()}
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