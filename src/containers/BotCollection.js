import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  // renderBots = () => {
    
  // }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          { 
            this.props.bots.map(bot => {
              return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} delete={this.props.delete} />
            })
          }
        </div>
      </div>
    );
  }
}

export default BotCollection;
