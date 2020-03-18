import React, { Component } from "react";
import BotArmyCard from '../components/BotArmyCard'
import BotSpecs from '../components/BotSpecs'

class YourBotArmy extends Component {
  //your bot army code here...
  renderArmy = () => {
    console.log(this.props.recruitedBots())
    const bots = this.props.recruitedBots()
    return bots.map(bot => {
      return <BotArmyCard bot={bot} removeFromArmy={this.props.removeFromArmy} deleteBot={this.props.deleteBot}/>
    })
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmy()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
