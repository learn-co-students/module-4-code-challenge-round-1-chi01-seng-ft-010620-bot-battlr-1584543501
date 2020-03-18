import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = "http://localhost:6001/bots"

class BotsPage extends Component {
  //start here with your code for step one
  //  hold a boolean to see if bots are in army or not.
  // create a new key/value pair on the bots objects to hold this boolean
  // when a bot is clicked. based on its id. It updates the state to be added to recruited bots.

  constructor(){
    super()
    this.state={
      bots: [],
      recruitedBots: []
    }
  }
  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(botsData => {
        const armyBots = botsData.map(bot => {
          return {
            ...bot,
            inArmy: false
          }
        })
        this.setState({
          bots: armyBots
        })
      })
      .catch(err => console.log(err))
  }

  renderRecruitedBots = () => {
    const recruited = this.state.bots.filter(bot => {
      if (bot.inArmy === true) {
        return bot
      }
    })
    return recruited;
  }

  addToArmy = (event, botId) => {
    console.log(botId)
    const updatedBots = this.state.bots.map(bot => {
      if (bot.id === botId) {
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

  removeFromArmy = (event, botId) => {
    console.log(botId)
    if (event.target.tagName !== "BUTTON") {
      const updatedBots = this.state.bots.map(bot => {
        if (bot.id === botId) {
          return {
            ...bot,
            inArmy: false
          }
        } else {
          return bot
        }
      })
      this.setState({
        bots: updatedBots
      })
    }
  }

  deleteBot = (event, botId) => {
    console.log(botId)
    const reqObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    fetch(`${API}/${botId}`, reqObj)
      .then(resp => resp.json())
      .then(message => console.log(message))
      .catch(err => console.log(err))
    const filtered = this.state.bots.filter(bot => {
      if (bot.id !== botId) {
        return bot
      }
    })
    this.setState({
      bots: filtered
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy recruitedBots={this.renderRecruitedBots} removeFromArmy={this.removeFromArmy} deleteBot={this.deleteBot}/>
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} />
      </div>
    )
  }
}

export default BotsPage;
