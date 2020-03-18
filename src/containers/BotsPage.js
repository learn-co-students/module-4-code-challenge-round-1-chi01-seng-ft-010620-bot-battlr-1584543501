import React, { Component } from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //I had no idea why renderBots() call was coming back undefined on line 28ish.
  // I've spent an hour trying to tweak it to work. finally got it. 
  // Unable to get my YourBotArmy working. 
  // I'm fairly certain putting the bulk of my logic in App.js was a mistake.
  // The bulk of the logic found there would have likely been more appropriate in BotsPage.
  // Commenting my call to renderBotArmy so you can at least see that I rendered bots.
  
  renderBotArmy = () => {
    const armyBots = this.props.bots.map(bot => {
      if (bot.inArmy) {
        return <YourBotArmy bots={armyBots} />
      } else {
        return bot
      }
    })
  }
   
      
  render() {
    return <div>
      <BotCollection addBotToArmy={this.props.addBotToArmy} bots = {this.props.bots} />
      {this.renderBotArmy()}
    </div>;
  }
}

export default BotsPage;
