import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: []
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

  //render bots fn
  //filter for myBots

  render() {
    return <div>
      <YourBotArmy />
      <BotCollection bots={this.state.bots} />
    </div>;
  }
}

export default BotsPage;
