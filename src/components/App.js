import React from 'react';
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

class App extends React.Component {
  state = {
    players: [
      {
        name: "le",
        score: 0,
        id: 1,
        isHighest: false
      },
      {
        name: "stuart",
        score: 0,
        id: 2,
        isHighest: false
      },
      {
        name: "dan",
        score: 0,
        id: 3,
        isHighest: false
      },
      {
        name: "dean",
        score: 0,
        id: 4,
        isHighest: false
      }
    ]
  };


  prevPlayerId =4;

//   tick=()=>{
//     // console.log('ticking...')
//     if(this.state.isRunning){
//         const now = Date.now();
//         this.setState( prevState=> ({
//             previousTime: now,
//             elapsedTime: prevState.elapsedTime + (now -prevState.previousTime)
//         }))
//     }
// }
      handleScoreChange =(index, delta) =>{
           this.setState( prevState => ({
        score: prevState.players[index].score += delta,
        }),()=>{this.handleHighScore()  
          })
        
       
      // this.handleHighScore();
       
    }

    handleHighScore =() =>{ 
      let scores=[];
      // console.log("something")
      //  let higestIndex=[]
      //  highestScore=0;
        // higestIndex=scores.indexOf(Math.max(...scores))
          // if (playerList.score===highestScore){
          //   playerList.isHighest =true
          //   console.log(playerList + ' equals ' + highestScore)
          // }
        //   else {
        //     playerList.isHighest=false
        //     console.log(playerList + " doesnt equal "+ highestScore)
        //   }
        //   return playerList
        // })
this.state.players.map((playerList) =>{
scores.push(playerList.score)
playerList.isHighest=false
return playerList})
let highestScore= Math.max(...scores)


        this.state.players.map((playerList)=>{
          if (playerList.score===highestScore){
            this.setState({ 
            isHighest: playerList.isHighest=true 
          })}

          else {
            this.setState( { 
              isHighest: playerList.isHighest=false 
            })
          }
          return playerList
        })
      
        // this.setState( prevState => ({
          
        //  isHighest: prevState.players[higestIndex].isHighest=true
        // })) 
      
     }
   
    handleAddPlayer =(name) =>{
      // console.log(...this.state.players)
      // console.log(this.state.players)
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
    setTimeout(this.handleLastPlayer, 1);
  }

  handleLastPlayer =() =>{
    if (this.state.players.length>0){
       this.handleHighScore()

    }

  }

    //   incrementScore = () => {
    //   this.setState( prevState => ({
    //     score: prevState.score + 1
    //   }))
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
            isHighest = {player.isHighest}  
            // highScore={this.handleHighScore}

          />
          
        )}

              <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>

    )}}


export default App;
