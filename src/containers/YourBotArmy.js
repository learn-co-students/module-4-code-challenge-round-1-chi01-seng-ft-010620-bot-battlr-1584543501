import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.myArmy.map(robot => {
              return <BotCard 
              bot={robot} 
              changeArmy={this.props.changeArmy} 
              deleteRobot={this.props.deleteRobot}
              changeClick={this.props.changeClick}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
