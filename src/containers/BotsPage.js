import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs'

class BotsPage extends Component {

  constructor() {
    super()
    this.state = {
      bots: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(robots => {
      robots.map(robot => {
        robot.isClicked = false
        robot.inArmy = false
        return robot
      })
      this.setState({
        bots: robots
      })
    })
  }

  changeArmy = (bot) => {
    const newBots = this.state.bots.map(robot => {
      if (robot.id === bot.id) {
        robot.inArmy = !robot.inArmy
      } return robot
    })
    this.setState({
      bots: newBots
    })
  }

  myArmy = () => {
    return this.state.bots.filter(bot => {
      return bot.inArmy
    })
  }

  deleteRobot = (bot) => {
    const deleteObj = {
      method: "DELETE",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bot)
    }
    fetch(`http://localhost:6001/bots/${bot.id}`, deleteObj)
      .then(resp => resp.json())
      .then(robot => {
        console.log(robot)
        this.componentDidMount()
      })
  } 

  changeClick = (robot) => {
    const newBots = this.state.bots.map(bot => {
      if (robot.id === bot.id) {
        bot.isClicked = !bot.isClicked
      } return bot
    })
    this.setState({
      bots: newBots
    })
  }

  fliterClicked = () => {
    return this.state.bots.find(bot => {
      return bot.isClicked
    })
  }
    
  

  render() {
    console.log(this.state)
    return <div>
      <YourBotArmy 
      myArmy={this.myArmy()}
      changeClick={this.changeClick} 
      changeArmy={this.changeArmy}
      deleteRobot={this.deleteRobot}/>
      {this.fliterClicked() ? <BotSpecs 
      bot={this.fliterClicked()}
      changeArmy={this.changeArmy}
      changeClick={this.changeClick} /> : 
      <BotCollection 
      changeClick={this.changeClick} 
      changeArmy={this.changeArmy} 
      bots={this.state.bots}
      deleteRobot={this.deleteRobot}/>}
    </div>;
  }
}

export default BotsPage;
