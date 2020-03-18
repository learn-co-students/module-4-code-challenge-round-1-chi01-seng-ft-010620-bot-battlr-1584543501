import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      bots:[]
    }
  }


  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(botsData =>  {
      const updatedBots = 
      botsData.map( botObj => {
        return {
          ...botObj, 
          inArmy: false
        }

    })
      this.setState({
        bots: updatedBots
      })
    })

  }

  addBotToArmy = (clickedBot) => {
    const updatedBots = this.state.bots.map(bot => {
      if(clickedBot.id === bot.id) {
        return {
          ...bot,
          inArmy: true
        }
      } else {
        return bot 
      }
    })
    this.setState({
      bots: updatedBots
    })

  }
  
  render() {
    return (
      <div className="App">
        <BotsPage addBotToArmy={this.addBotToArmy} bots={this.state.bots} />
      </div>
    );
  }
}

export default App;
