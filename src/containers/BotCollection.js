import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  //map through the robots array to put them into the BotCard component

  mapRobots(){
    
    return this.props.robots.map(robot => {
     return <BotCard robotClick={this.props.robotClick} bot={robot}/>
  })}

  render() {
    // console.log(this.props.robotClick)
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.mapRobots()}
          
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
