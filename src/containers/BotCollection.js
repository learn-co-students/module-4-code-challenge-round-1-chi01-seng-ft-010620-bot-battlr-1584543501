import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
 
  renderBots = () => {
    return this.props.bots.map(botObj => {
      return <BotCard bot={botObj} handleBot={this.props.addBot} unenlistBot={this.props.unenlistBot} />
    })
  }

  
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
