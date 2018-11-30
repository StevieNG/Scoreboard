import React,{Component } from 'react';
import Header from './Header';
// import Counter from './Counter';    not needed as already import in Player
import Player from './Player'
import AddPlayerForm from './AddPlayerForm';

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{ props.title }</h1>
//       <span className="stats">Players: {props.totalPlayers}</span> 
//     </header>
//   );
// }

// class Counter extends React.Component {
//   state = { 
//     score: 0 
//   };
  
//   incrementScore = () => {
//     this.setState( prevState => ({
//       score: prevState.score + 1
//     }));
//   }

//   decrementScore = () => {
//     this.setState( prevState => ({
//       score: prevState.score - 1
//     }));
//   }

//   render() {
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//         <span className="counter-score">{ this.state.score }</span>
//         <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//       </div>
//     );
//   }
// }
  
// const Player = (props) => {
//   return (
//     <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
//         { props.name }
//       </span>

//       <Counter />
//     </div>
//   );
// }

class App extends Component {
  state = {
    players: [
      {
        name: "le",
        score: 0,
        id: 1
      },
      {
        name: "stuart",
        score: 0,
        id: 2
      },
      {
        name: "dan",
        score: 0,
        id: 3
      },
      {
        name: "dean",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId =4;


      handleScoreChange =(index, delta) =>{
           this.setState( prevState => ({
        score: prevState.players[index].score += delta
      }));
 console.log('index' + index,'delta' + delta )

    }

    handleAddPlayer =(name) =>{
      console.log(...this.state.players)
      console.log(this.state.players)
        this.setState(prevState =>{
          return {players:[

            ...prevState.players,
             {
                name,
                score: 0,
                id: this.prevPlayerId +=1
             }

    
          ]}})}
  

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

    //   incrementScore = () => {
    //   this.setState( prevState => ({
    //     score: prevState.score + 1
    //   }));
    // }

    // handleScoreChange =(delta) =>{
    //   console.log(delta)

    // }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
          players ={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={ player.score}
            id={player.id}
            key={player.id.toString()} 
            changeScore = {this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}     
            index ={index}      
          />
          
        )}

              <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>

    );
  }
}

export default App;
