import React, {PureComponent} from 'react';
import Counter from './Counter'
import Highscore from './Highscore'
  
class  Player extends PureComponent {

  // console.log(props.name+' rendered')
  render(){  
 
    const {
      name, id, score, index, removePlayer, changeScore,highScore, isHighest
    }=this.props;

    // console.log(isHighest)
  return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Highscore score={score} 
                    isHighest={isHighest}
          />
          { name }
        </span>
  
        <Counter 
        score={ score}
        changeScore={ changeScore }
        index ={index}
        highScore={highScore}
  
        />
      </div>
    );}
  }

  export default Player;