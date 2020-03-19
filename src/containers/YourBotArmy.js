import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  renderBots = () => {
    return this.props.myBots.map(botObj => {
      return <BotCard bot={botObj} handleBot={this.props.removeBot} unenlistBot={this.props.unenlistBot} />
    })
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
