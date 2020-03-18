import React, { Component } from "react";
import BotCard from '../components/BotCard.js'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => {
            return <BotCard bot={bot} toggleSelected={this.props.toggleSelected} />
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
