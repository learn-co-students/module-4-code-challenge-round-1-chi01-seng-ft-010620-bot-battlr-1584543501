import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => {
            return <BotCard 
            bot={bot} 
            changeArmy={this.props.changeArmy} 
            deleteRobot={this.props.deleteRobot}
            changeClick={this.props.changeClick}/>
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
