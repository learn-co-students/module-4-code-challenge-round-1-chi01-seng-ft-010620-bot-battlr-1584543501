import React, { Component } from 'react';
// import BotCard from '../components/BotCard'
// import BotSpecs from '../components/BotSpecs'
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: [],
    deleted: []
  };
  componentDidMount() {
    fetch(`http://localhost:6001/bots`)
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        this.setState({
          bots: data
        });
      });
  }
  addBot = event=> {
    event.persist()
    // console.log(event.target.name)
    this.setState(previousState => {
      return { botArmy: previousState.botArmy.concat(event.target.name) };
    });
    // console.log("new army bot",this.state.botArmy)
  };

  deleteBot=(event)=>{
    event.persist()
    console.log(event.target.name)
    this.setState(previousState => {
      return { deleted: previousState.deleted.concat(event.target.name) };
    });

  }
  render() {
    //console.log(this.state.botArmy)
    return (
      <div> 
        <YourBotArmy botArmy={this.state.botArmy} bot={this.state.bots}/>
        <BotCollection bot={this.state.bots} addBot={this.addBot} deleteBot={this.deleteBot} />
       
      </div>
    );
  }
}

export default BotsPage;

// dd an individual bot to my army by clicking on it. The selected bot should render in the YourBotArmy component.
// The bot can be enlisted only once. The bot does not disappear from the BotCollection.
