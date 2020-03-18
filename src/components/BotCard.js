import React from 'react';

const botTypeClasses = {
  Assault: 'icon military',
  Defender: 'icon shield',
  Support: 'icon plus circle',
  Medic: 'icon ambulance',
  Witch: 'icon magic',
  Captain: 'icon star'
};

const BotCard = props => {
  return props.bot.map(bot => {
    return (
      <div className="ui column">
        <div
          className="ui card"
          key={bot.id}
          onClick={ bot => {
            props.addBot(bot);
          }}
        >
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} name={bot.id}/>
          </div>
          <div className="content">
            <div className="header">
              {props.bot.name}
              <i className={botTypeClasses[bot.bot_class]} />
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
                  name={bot.id}
                  className="ui mini red button"
                  onClick={(event) =>
                    props.deleteBot(event)
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

export default BotCard;
