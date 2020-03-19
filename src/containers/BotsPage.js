import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends Component {
  constructor(){
    super()

    this.state = {
      bots: [],
      army: [],
      showSpec: undefined
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(data => {

      this.setState({
        bots: data
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

      const updatedArmy = this.state.army.filter(bot => {
        return bot.id !== id
      })

      this.setState({
        bots: updatedBots,
        army: updatedArmy
      })




    })

  }

  enlist = (clickedBot) => {
    const botExists = this.state.army.find((bot) => {
      return bot.id === clickedBot.id
    })

    if (!botExists) {
      this.setState({
        army: [...this.state.army, clickedBot],
        showSpec: undefined
      })
    }
  }

  delist = (clickedBot) => {
    const updatedArmy = this.state.army.filter((bot) => {
      return bot.id !== clickedBot.id
    })
    this.setState({
      army: updatedArmy
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

  render() {
    console.log(this.state)
    return <div>
      <YourBotArmy delete={this.delete} bots={this.state.army} handleClick={this.delist} />

        {
          this.state.showSpec ?
          <BotSpecs bot={this.state.showSpec} enlist={this.enlist} goBack={this.goBack}/>
            :
          <BotCollection delete={this.delete} bots={this.state.bots} handleClick={this.showSpec} />
        }

    </div>;
  }
}

export default BotsPage;
