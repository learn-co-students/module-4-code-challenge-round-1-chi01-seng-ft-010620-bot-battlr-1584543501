import React, { Component } from "react";
import BotCard from "../components/BotCard"


class BotCollection extends Component {
  //your code here
  
  
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
        {this.props.bots.map(bot => {
       return <BotCard addBotToArmy={this.props.addBotToArmy}   bot={bot} />
     })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
