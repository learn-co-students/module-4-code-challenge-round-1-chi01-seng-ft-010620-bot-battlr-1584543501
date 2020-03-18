import React, { Component } from "react";
import BotCard from '../components/BotCard';
import BotSpecs from '../components/BotSpecs';


class BotCollection extends Component {
  constructor(props){
    super()
    this.state = {
      showDeets: props.showDeets,
      deetBot: {}
    }
  }
  

  renderDeets = (bot) => {
    this.setState({
      showDeets: true,
      deetBot: bot
    })
  }

  hideDeets = () => {
    this.setState({
      showDeets: false,
      deetBot: {}
    })
  }
  

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.state.showDeets ? <BotSpecs bot={this.state.deetBot} addToArmy={this.props.addToArmy} hideDeets={this.hideDeets} /> : this.props.bots.map(bot => {
            return <BotCard bot={bot} key={bot.id} renderDeets={this.renderDeets} addToArmy={this.props.addToArmy} dropBot={this.props.dropBot} />
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
