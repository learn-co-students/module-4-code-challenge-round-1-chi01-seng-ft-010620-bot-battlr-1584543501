import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  
  renderBotCards = () => {
    const enlistedBots = this.props.bots.filter(bot => 
      bot.enlisted === true
    )
    return enlistedBots.map(bot => {
      return <BotCard handleClick={this.props.releaseBot} key={bot.id} bot={bot} dischargeBot={this.props.dischargeBot} />
    })
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
