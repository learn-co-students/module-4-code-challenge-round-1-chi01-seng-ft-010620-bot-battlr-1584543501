import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      bots: [],
      army: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(botsArray => {
      const updatedArray = botsArray.map(bot => {
        return {
          ...bot,
          selected: false
        }
      });
      this.setState({
        bots: updatedArray
      })
    })
  }


  toggleSelected = (botToToggle) => {
    const updatedArray = this.state.bots.map(bot => {
      if(bot.id === botToToggle) {
        if(bot.selected === false){
          return {
            ...bot,
            selected: true
          }
        } else {
          return {
            ...bot,
            selected: false
          }
        }
      } else {
        return bot
      }
    })

    this.setState({
      bots: updatedArray,
    })
    this.updateArmyArray()
  }

  // selectBot = (botToSelect) => {
  //   // console.log(botToSelect)
  //   const updatedArray =  this.state.bots.map(bot => {
  //     if(bot.id === botToSelect) {
  //       return{
  //         ...bot,
  //         selected: true
  //       }
  //     } else {
  //       return bot;
  //     }
  //   })

  //   this.setState({
  //     bots: updatedArray
  //   })

  //   this.updateArmyArray()
  // }


  updateArmyArray = () => {
    const selectedBots = this.state.bots.filter(bot => {
      return bot.selected === true;
    })
    this.setState({
      army: selectedBots
    })
  }

  // deSelectBot = (botToDeSelect) => {
  //   console.log(botToDeSelect)
    // const updatedArray =  this.state.bots.map(bot => {
    //   if(bot.id === botToSelect) {
    //     return{
    //       ...bot,
    //       selected: true
    //     }
    //   } else {
    //     return bot;
    //   }
    // })

    // this.setState({
    //   bots: updatedArray
    // })

    // this.enlistBot()
  // }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} toggleSelected={this.toggleSelected} army={this.state.army} />
      </div>
    );
  }
}

export default App;
