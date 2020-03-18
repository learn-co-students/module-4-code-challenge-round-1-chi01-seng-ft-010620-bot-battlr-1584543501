import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  
  constructor() {
    super()
    this.state = {
      allBots: []
    }
  }
  
  componentDidMount = () => {
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(botData => {
      const arrayWithEnlistedStatus = botData.map(bot => {
        return {...bot, enlisted: false}
      })

      this.setState({
        allBots: arrayWithEnlistedStatus
      })
    })
  }

  enlistBot = (id) => {
    const updatedArray = this.state.allBots.map(bot => {
      if (bot.id === id) {
        return {...bot, enlisted: true}
      } else {
        return bot
      }
    })
    this.setState({
      allBots: updatedArray
    })
  }
  
  releaseBot = (id) => {
    const updatedArray = this.state.allBots.map(bot => {
      if (bot.id === id) {
        return {...bot, enlisted: false}
      } else {
        return bot
      }
    })
    this.setState({
      allBots: updatedArray
    })
  }

  dischargeBot = (id) => {
    const reqObj = {
      method: 'DELETE'
    }
    let updatedArray = this.state.allBots.filter(bot =>
      bot.id !== id)
    this.setState({
      allBots: updatedArray
    })
    fetch(`http://localhost:6001/bots/${id}`, reqObj)
  }

  render() {
    return <div>
      <YourBotArmy bots={this.state.allBots} releaseBot={this.releaseBot} dischargeBot={this.dischargeBot} />
      <BotCollection bots={this.state.allBots} enlistBot={this.enlistBot} dischargeBot={this.dischargeBot} />
    </div>;
  }
}

export default BotsPage;
