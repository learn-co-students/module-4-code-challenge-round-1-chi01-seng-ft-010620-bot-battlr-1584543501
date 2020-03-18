import React, { Component } from "react";

class YourBotArmy extends Component {

  
  
  render() {
    console.log(this.props)
    const { bot } = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            <p>Your Bot Army</p>
            <p>Name: {bot.name}</p>
            <p>Healt: {bot.health}</p>
            <img src={bot.avatar_url} />
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
