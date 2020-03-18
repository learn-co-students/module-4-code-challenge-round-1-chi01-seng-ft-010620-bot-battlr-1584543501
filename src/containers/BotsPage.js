import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotCard from '../components/BotCard'

class BotsPage extends Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      robots: [],
      included: false
    }
  }
  handleRobotClick(){
    this.setState({
      included: !this.state.included
    })
   }

    // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  componentDidMount(){
    fetch("http://localhost:6001/bots/")
    .then( resp => resp.json() )
    .then( robotData => this.setState({
      robots: robotData
    }) )
  }
 
  


  //if the botCard is clicked want to add that botCard to YoourBotArmy component

  render() {
    return <div>
    <BotCollection robotClick={this.handleRobotClick} robots={this.state.robots}/>
    <YourBotArmy showRobot={this.handleRobotClick} something={this.state.included ? <BotCard /> : null}/>
    </div>;
  }
}

{/* render() {
  return (
    <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
} */}



//YourBotArmy will have robot cards appear when a robot is clicked on. 
//need to add event listener to the cards
//onCLick event listener will render a card to the YorBotArmy container

export default BotsPage;
