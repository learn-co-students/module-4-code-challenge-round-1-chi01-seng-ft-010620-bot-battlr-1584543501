import React, { Component } from 'react';
// import BotCard from "../components/BotCard";
// import BotSpecs from "../components/BotSpecs";

class YourBotArmy extends Component {
  //your bot army code here...
  // componentDidMount() {
  //   fetch;
  // }
  renderArmy = () => {
    this.filteredBots = this.props.botArmy.map(armybot => {
      return this.props.bot.filter(bot => {
        if (parseInt(armybot) === bot.id) {
          return bot;
        }
      });
    });
    return this.filteredBots;
  };
  renderArmyCard = () => {
    //console.log('hoe', this.renderArmy());
    this.renderArmy().map(bot => {
      return (
        <div className="ui column">
          <div className="ui card" key={bot.id}>
            <div className="image">
              <img alt="oh no!" src={bot.avatar_url} name={bot.id} />
            </div>
            <div className="content">
              <div className="header">
                {bot.name}
                {/* <i className={botTypeClasses[bot.bot_class]} /> */}
              </div>
              <div className="meta text-wrap">
                <small>{bot.catchphrase}</small>
              </div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat" />
                {bot.health}
              </span>

              <span>
                <i className="icon lightning" />
                {bot.damage}
              </span>
              <span>
                <i className="icon shield" />
                {bot.armor}
              </span>
              <span>
                <div className="ui center aligned segment basic">
                  <button
                    className="ui mini red button"
                    onClick={() =>
                      console.log('add code to connect event listener')
                    }
                  >
                    x
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderArmyCard()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
