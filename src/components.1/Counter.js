import React from 'react';


const Counter =(props) => {
let index =props.index;

    return (    // state = { 
    //   score: 0 
    // };
    
    // incrementScore = () => {
    //   this.setState( prevState => ({
    //     score: prevState.score + 1
    //   }));
    // }
  
    // decrementScore = () => {
    //   this.setState( prevState => ({
    //     score: prevState.score - 1
    //   }));
    // }
        <div className="counter">
          {/* <button className="counter-action decrement" onClick={this.decrementScore}> - </button> */}
          <button className="counter-action decrement" onClick ={()=> props.changeScore(index, -1) } > - </button>
          {/* <span className="counter-score">{ this.state.score }</span> */}
          <span className="counter-score">{ props.score }</span>
          {/* <button className="counter-action increment" onClick={this.incrementScore}> + </button> */}
          <button className="counter-action increment" onClick ={()=> props.changeScore(index, +1)} > + </button>
        </div>
    )
    
  }


  export default Counter;