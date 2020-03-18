import React, { Component } from "react";
import BotCollection from './BotCollection.js';
import YourBotArmy from './YourBotArmy.js';

class BotsPage extends Component {
  //start here with your code for step one
  // constructor(){
  //   super();
  // }

  
  render() {
    return <div>
      <YourBotArmy army={this.props.army} toggleSelected={this.props.toggleSelected} />
      <BotCollection bots={this.props.bots} toggleSelected={this.props.toggleSelected}/>
    </div>;
  }
}

export default BotsPage;
