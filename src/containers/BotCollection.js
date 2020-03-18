import React, { Component } from "react";
import BotsPage from '../containers/BotsPage'
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  constructor(props){
    super(props)
  }

 

  renderBots = (props) => {
    return this.props.bots.map(bot => {
         return <BotCard bot={bot} />
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots(this.props)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
