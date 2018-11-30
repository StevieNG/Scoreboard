import React from 'react';
import PropTypes from 'prop-types';

const Counter =({ index, score,changeScore, highScore}) => {
// let index = index;

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
          <button className="counter-action decrement" onClick ={()=> changeScore(index, -1) } > - </button>
          {/* <span className="counter-score">{ this.state.score }</span> */}
          <span className="counter-score">{ score }</span>
          {/* <button className="counter-action increment" onClick={this.incrementScore}> + </button> */}
          <button className="counter-action increment" onClick ={()=> changeScore(index, +1)} > + </button>
        </div>
    )
    
  }

  Counter.propTypes ={
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func



  }
  export default Counter;