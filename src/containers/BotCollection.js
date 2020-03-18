import React, { Component } from "react";
import BotCard from '../components/BotCard'
class BotCollection extends Component {
  //your code here

  render() {
    
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.botArr.map(botObj=> {
            return <BotCard key={botObj.id} addBot={this.props.addBot} bot={botObj}/>
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
