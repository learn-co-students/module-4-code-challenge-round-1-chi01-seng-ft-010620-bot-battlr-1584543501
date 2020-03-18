import React, { Component } from "react";
import BotCard from '../components/BotCard';
import BotSpecs from '../components/BotSpecs';
class YourBotArmy extends Component {
  constructor(){
    super()
    this.state = {
      showDeets: false,
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
      <div className="ui segment inverted olive bot-army" >
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {this.state.showDeets ? <BotSpecs bot={this.state.deetBot} addToArmy={this.props.addToArmy} hideDeets={this.hideDeets} /> : this.props.myBots.map(bot => {
            return <BotCard bot={bot} key={bot.id} renderDeets={this.renderDeets} dropBot={this.props.dropBot} addToArmy={this.props.addToArmy} />
          })}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
