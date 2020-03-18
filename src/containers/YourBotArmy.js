import React, { Component } from "react";
import BotsPage from './BotsPage'

class YourBotArmy extends Component {
  //your bot army code here...

  constructor(props){
    super(props)
    this.state = {
      botArmy: []
    }

  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
