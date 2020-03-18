import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  
  constructor(){
    super()
    this.state = {
      botCollection: [],
      yourBotArmy: []
      

    }
  }

  componentDidMount() {
    fetch("http://localhost:6001/bots")
      .then(res => res.json())
      .then(botCollection => this.setState({ botCollection }));
  };


  addBot = (bot) => {
    this.setState({
      yourBotArmy: [...this.state.yourBotArmy, bot]
    })
  }

  removeBot = (bot) => {
    this.setState({
      yourBotArmy: this.state.yourBotArmy.filter(b => b !== bot) 
    })
  }

  render() {
    return (
      <div>

        <YourBotArmy yourBotArmy={this.state.yourBotArmy} removeBot={this.removeBot} />
        <BotCollection botCollection={this.state.botCollection} addBot={this.addBot} />
      
     
    </div>
        
      
    )
  }

}


export default BotsPage;
