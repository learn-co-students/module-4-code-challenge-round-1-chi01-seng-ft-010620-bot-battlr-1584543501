import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {

  renderBotCards = () => {
    return this.props.bots.map(bot => {
      return <BotCard 
        bot={bot} 
        addClick={this.props.addClick} />
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
