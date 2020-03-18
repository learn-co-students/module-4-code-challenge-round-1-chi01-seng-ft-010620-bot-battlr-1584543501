import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from '../components/SortBar';

class BotsPage extends Component {
  constructor(){
    super();
    this.state = {
      bots: [],
      myBots: [],
      showDeets: false,
      category: "health",
      filter: "Support"

    }
  }
  componentDidMount(){
    fetch("http://localhost:6001/bots")
    .then(resp => resp.json())
    .then(robos => {
      this.setState({
        bots: robos
      })
    })
  }

  addToArmy = (newBot) => {
    const inBots = this.state.bots.find(bot => bot.id === newBot.id)
    const myClasses = this.state.myBots.map(myB => myB.bot_class)
    const updatedBots = this.state.bots.filter(bot => bot.id !== newBot.id)
    const updatedMyBots = this.state.myBots.filter(bot => bot.id !== newBot.id)
    if (!inBots){
      return this.setState({
        bots: [...this.state.bots, newBot],
        myBots: updatedMyBots
      })
    } else if (!myClasses.includes(newBot.bot_class)){
      this.setState({
        bots: updatedBots,
        myBots: [...this.state.myBots, newBot]
      })
    } else {
      alert("Class Slot Taken")
    }
  } 

  dropBot = (newBot) => {
    const reqObj = {
      method: "delete",
      headers: {
        "Content-Type": 'application/json'
      }
    }
    const updatedBots = this.state.bots.filter(bot => bot.id !== newBot.id)
    const updatedMyBots = this.state.myBots.filter(bot => bot.id !== newBot.id)

    fetch(`http://localhost:6001/bots/${newBot.id}`, reqObj)
    .then(resp => resp.json())
    .then(robo => {
      this.setState({
        bots: updatedBots,
        myBots: updatedMyBots
      })
    })
  }

  toggleDeets = () => {
    this.setState({
      showDeets: !this.state.showDeets
    })
  }

  addSort = (event) => {
    event.preventDefault();
    const sortedBots = this.state.bots.sort((bota, botb) => {
      return botb[this.state.category] - bota[this.state.category] 
    })
    this.setState({
      bots: sortedBots
    })
  }

  changeCategory = (event) => {
    this.setState({
      category: event.target.value
    })
  }
// Filter Classes to be done
  // addFilter = (event) => {
  //   event.preventDefault();
  //   const filteredBots = this.state.bots.filter((bot) => {
  //     return bot.class === this.state.filter
  //   })
  //   this.setState({
  //     bots: filteredBots
  //   })
  // }

  // changeFilter = (event) => {
  //   this.setState({
  //     category: event.target.value
  //   })
  // }

  render() {
  return <div>
    {/* <h3> Filter By Class:</h3>
    {<FilterBar changeFilter={this.changeFilter} addFilter={this.addFilter/>} */}
    <h3>Sort By:</h3>
    {<SortBar changeCategory={this.changeCategory} addSort={this.addSort} />}
    <h1>Your Army</h1>
    {<YourBotArmy myBots={this.state.myBots} toggleDeets={this.toggleDeets} dropBot={this.dropBot} addToArmy={this.addToArmy}/>}
    <h2>Collection</h2>
    {<BotCollection bots={this.state.bots} toggleDeets={this.toggleDeets} showDeets={this.state.showDeets} dropBot={this.dropBot} addToArmy={this.addToArmy} />}</div>;
  }
}

export default BotsPage;
