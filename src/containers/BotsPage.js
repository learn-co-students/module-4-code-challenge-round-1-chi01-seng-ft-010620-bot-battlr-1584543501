import React, { Component } from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'
class BotsPage extends Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      bots: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(botsData => {const newBots = botsData.map(botsObj => {
      return {
        ...botsObj, inArmy: false
      }
    })
  this.setState({
    bots: newBots
  })
  }
  )
  }


  
  addBot = (e) => {
    console.log(e)
    // switches inArmy to false for bot with id of e. 
  }

  dischardBot = (botId) => {
    fetch(`http://localhost:6001/bots/${botId}`,deleteObj)
    .then(resp => resp.json())
  }

  render() {
    
    return <div>
      <BotCollection addBot={this.addBot} botArr={this.state.bots}/>
      <YourBotArmy />
    </div>;
  }
}

export default BotsPage;
