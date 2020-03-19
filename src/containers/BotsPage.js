import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends Component {
  constructor(){
    super()

    this.state = {
      bots: [],
      showSpec: undefined
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(allBots => {

      const updatedBots = allBots.map(bot => {
        return {
          ...bot,
          enlisted: false 
        }
      })

      this.setState({
        bots: updatedBots
      })
    })
  }


  delete = (e, id) => {
    e.stopPropagation()

    const reqObj = {
      method: 'DELETE'
    }

    fetch(`http://localhost:6001/bots/${id}`, reqObj)
    .then(resp => resp.json())
    .then(data => {

      const updatedBots = this.state.bots.filter(bot => {
        return bot.id !== id
      })

      this.setState({
        bots: updatedBots,
      })
    })

  }

  enlist = (clickedBot) => {
    const updatedBots = this.state.bots.map(bot => {
      if (bot.id === clickedBot.id) {
        return {
          ...clickedBot,
          enlisted: true
        }
      } else {
        return bot
      }
    })

    this.setState({
      bots: updatedBots
    })
  }

  delist = (clickedBot) => {
    const updatedBots = this.state.bots.map(bot => {
      if (bot.id === clickedBot.id) {
        return {
          ...clickedBot,
          enlisted: false
        }
      } else {
        return bot
      }
    })

    this.setState({
      bots: updatedBots
    })
  }

  showSpec = (bot) => {
    this.setState({
      showSpec: bot
    })
  }

  goBack = () => {
    this.setState({
      showSpec: undefined
    })
  }


  findArmyBots = () => {
    return this.state.bots.filter(bot  => bot.enlisted)
  }

  render() {
    console.log(this.state)
    return <div>
      <YourBotArmy delete={this.delete} bots={this.findArmyBots()} handleClick={this.delist} />
      <BotCollection delete={this.delete} bots={this.state.bots} handleClick={this.enlist} />
    </div>;
  }
}

export default BotsPage;



        // {
          // this.state.showSpec ?
          // <BotSpecs bot={this.state.showSpec} enlist={this.enlist} goBack={this.goBack}/>
            // :
        // }
