import React, { Component } from "react";
import BotCard from '../components/BotCard'



class YourBotArmy extends React.Component {

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          <h2>My Bots</h2>
        {this.props.yourBotArmy.map(bot => <BotCard bot={bot} removeBot={this.props.removeBot}/> )
        }
          </div>
        </div>
      </div>
    );
  }
}


export default YourBotArmy;





