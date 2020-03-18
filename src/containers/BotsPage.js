import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {

  constructor(){
    super()

    this.state = {
      botList: [],
      myArmy: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
      .then(resp => resp.json())
      .then(botData => {
        const updatedBots = botData.map(botObj => {
          return {
            ...botObj,
            isEnlisted: false
          }
        })
         this.setState({
          botList: updatedBots
        })
      })
  }





 

  addToArmy = (bot) => {

    // this.setState({
    //   ...bot,
    //   isEnlisted: !this.state.isEnlisted
      
    // })
    // console.log(this.state)
   

    if(this.state.myArmy.includes(bot)) {
      console.log("NOPE")
      return
    }

    const updatedBotList = this.state.botList.map(bot => {
      if (bot.id == bot.id) {
        return {
          ...bot,
          isEnlisted: true
        }
      } else{
        return bot
      }
    })

    this.setState({
      myArmy: [...this.state.myArmy, bot],
      
      
    })

  }


// switchEnlisted = (bot) => {
//   return{
//     ...bot,
//     isEnlisted: true
//   }
//   console.log(bot)
// }

  

  render() {
console.log(this.state.myArmy)
    return <div>
    <YourBotArmy myArmy={this.state.myArmy} />
    <BotCollection  botList={this.state.botList} addToArmy={this.addToArmy} switchEnlisted={this.switchEnlisted}/>
      
      

      </div>;
  }
}

export default BotsPage;
