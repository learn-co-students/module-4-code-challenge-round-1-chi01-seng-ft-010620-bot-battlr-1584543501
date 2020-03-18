import React, { Component } from "react";
import YourBotArmy from "./YourBotArmy";

class BotCollection extends Component {
  //your code here
  renderBots = () => {

    return this.props.bots.map(botObj => {
      return <YourBotArmy bot={botObj} key={botObj.id}/>
    })
  }

  
  render() {
    return (
      
      <div className="ui four column grid">
        {this.renderBots()}
        <div className="row">
          Collection of all bots
        
        </div>
        
      </div>
    );
  }
}

export default BotCollection;
