import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
 
  renderBots = () => {
    return this.props.bots.map(botObj => {
      return <BotCard bot={botObj} onclick={this.clickListener} />
    })
  }

  clickListener = (event) => {
    console.log(event.target)
    // id = event.target.id
    // this.props.addBot(id)
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
