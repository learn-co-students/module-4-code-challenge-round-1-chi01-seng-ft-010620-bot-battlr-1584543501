import React, { Component } from "react";
import BotCollection from "./BotCollection";


const endPoint = 'http://localhost:6001/bots'
class BotsPage extends Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      bots: []
    }
  }

  componentDidMount(){
    fetch(endPoint)
    .then(resp => resp.json())
    .then(bots => {
      this.setState({
        bots: bots
      })
    })
  }



  render() {
    const { bots } = this.state
    return <div>
    <BotCollection bots={bots}/>
    </div>;
  }
}

export default BotsPage;
