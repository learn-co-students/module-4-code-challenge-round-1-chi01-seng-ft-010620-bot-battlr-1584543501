import React, { Component } from "react";
import BotsCollection from './BotsPage'
import YourBotArmy from './YourBotArmy'
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'
import BotCollection from "./BotCollection";

class BotsPage extends Component {
  //start here with your code for step one

  constructor() {
    super();
    this.state = {
      bots: []
    }
    
  }
  

  componentDidMount(){
    fetch('http://localhost:6001/bots')
      .then(resp => resp.json())
      .then(botsData => this.setState({
        bots: botsData
      }))
  }

  render() {

    return <div>{/* put your components here */
      <div>
        <YourBotArmy />
        <BotCollection bots={this.state.bots}/>
      </div>
    }</div>;
  }
}

export default BotsPage;
