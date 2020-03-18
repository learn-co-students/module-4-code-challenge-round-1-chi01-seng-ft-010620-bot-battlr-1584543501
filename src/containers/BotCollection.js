import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
  

  renderBotCards = () => {
    return this.props.botCollection.map(bot => {
      return <BotCard 
        bot={bot} addBot={this.props.addBot}
        />
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBotCards()}
          
        </div>
      </div>
    );
  }
}


export default BotCollection;

