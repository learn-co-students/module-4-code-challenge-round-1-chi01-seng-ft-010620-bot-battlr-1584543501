import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...
  // render all bots that have an inArmy of true
  render() {
    console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              // this.props.bots.map(botObj =>{
              //   botObj.inArmy ? <BotCard /> : null
              // })
            }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
