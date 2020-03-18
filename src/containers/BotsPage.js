import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

const API = 'http://localhost:6001/bots'

class BotsPage extends Component {
  constructor() {
    super()
    this.state = {
      bots: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then( resp => resp.json() )
      .then( bots => {
        this.setState({
          bots: bots
      })
    })
  }

  addedBots = () => {
    return this.state.bots.filter(bot => bot.isAddedToArmy)
  }

  addClick = (botId) => {
    console.log(botId)
    const botArmy = this.state.bots.map(bot => {
      if (bot.id !== botId) {
        return bot
      } else {
        return {
          ...bot,
          isAddedToArmy: true
        }
      }
    })
    this.setState({
      bots: botArmy
    })
  }

  saveArmy = () => {
    const reqObj= {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.botArmy)
    }

    fetch(API)
      .then( resp => resp.json() )
      .then( )
  }

  render() {
    return <div>
        <BotCollection bots={this.state.bots}/>
        <YourBotArmy />
      </div>;
  }
}

export default BotsPage;

// render all bots in BotCollection 
// add listener to card so bot can be added to personal army
  // probably should be a patch
// add listner to X to remove bot from personal army
