import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  
  renderBotCards = () => {
    return this.props.botList.map(bot => {
      return <BotCard  addToArmy={this.props.addToArmy} bot={bot} switchEnlisted={this.props.switchEnlisted} />
    })
  }

  render() {

    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBotCards()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
