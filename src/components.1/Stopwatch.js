import React from 'react'

class Stopwatch extends React.Component{
    state ={
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
        }

    tick=()=>{
        // console.log('ticking...')
        if(this.state.isRunning){
            const now = Date.now();
            this.setState( prevState=> ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now -prevState.previousTime)
            }))
        }
    }
    componentDidMount(){
            // console.log('stopwatch mounted!!')
            this.intervalID = setInterval(() => this.tick(),100)
        }
        
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }


    handleStopwatch =() =>{
        this.setState(prevState=>({
            isRunning: !this.state.isRunning

        }))

        if(!this.state.isRunning){
            this.setState({
                previousTime:Date.now()
            })



           console.log(this.state.previousTime) 
        }


    }

    handleReset =() =>{
        this.setState({ elapsedTime: 0,
                        isRunning: false        })
    }

    render (){
        const seonds = Math.floor(this.state.elapsedTime /1000 );
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                    <span className="stopwatch-time">{seonds}</span>
                    <button onClick = {this.handleStopwatch}>{this.state.isRunning ? 'Stop':'Start'}</button>
                    <button onClick = {this.handleReset}>Reset</button>
            
            
            </div>
        )}}


export default Stopwatch;