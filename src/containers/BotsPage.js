import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: [],
      myBots: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots') 
      .then(resp => resp.json())
      .then(botData => {
        this.setState({
          bots: botData
        })
      })
  }


  addBot = (bot) => {
    if (this.state.myBots.includes(bot)) {
      alert('This bot is already in your army!')
    } else {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  }

  removeBot = (bot) => {
    const deletedBotId = bot.id
    const currentBots = this.state.myBots.filter(bot => {
      return bot.id !== deletedBotId
    })
    this.setState({
      myBots: currentBots
    })
//add db deletion functionality
  }


  unenlistBot = (bot) => {
    const unenlistedBot = bot.id
    const activeBots = this.state.bots.filter(bot => {
      return bot.id !== unenlistedBot
    })
    const activeArmyBots = this.state.myBots.filter(bot => {
      return bot.id !== unenlistedBot
    })
    this.setState({
      bots: activeBots,
      myBots: activeArmyBots
    })
  }

  
  //filter for myBots

  render() {
    return <div>
      <YourBotArmy myBots={this.state.myBots} removeBot={this.removeBot} unenlistBot={this.unenlistBot}/>
      <BotCollection bots={this.state.bots} addBot={this.addBot} unenlistBot={this.unenlistBot}/>
    </div>;
  }
}

export default BotsPage;
