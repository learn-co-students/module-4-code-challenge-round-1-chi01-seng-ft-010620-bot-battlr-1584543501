import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  
  renderBotCards = () => {
    return this.props.bots.map(bot => {
      return <BotCard handleClick={this.props.enlistBot} key={bot.id} bot={bot} dischargeBot={this.props.dischargeBot}/>
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBotCards()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
