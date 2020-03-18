import React, { Component } from "react";
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          <BotCard bot={this.props.bot} addBot={this.props.addBot} deleteBot={this.props.deleteBot}/>
       <BotSpecs bot={this.props.bot}/>
        </div>
      </div>
    );
  }
}

export default BotCollection;
