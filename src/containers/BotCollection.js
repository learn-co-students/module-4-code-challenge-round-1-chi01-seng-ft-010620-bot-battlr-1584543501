import React, { Component } from "react";
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'
import YourBotArmy from './YourBotArmy'

class BotCollection extends Component {
  renderBots = () => {
    console.log(this.props.bots)
    return this.props.bots.map(bot => {
      return <BotCard bot={bot} key={bot.id} addToArmy={this.props.addToArmy}/>
    })
  }

  // renderSpecs = () => {
  //   return this.props.bots.map(bot => {
  //     return <BotSpecs bot={bot} key={bot.id}/>
  //   })
  // }
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
