import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from "react";

function PokemonCard({name, hp, sprites}) {

const [sprite, setSprite] = useState(`${sprites.front}`)

  const handleClick = () =>{ 
    console.log("clicked")
    sprite === `${sprites.front}` ?  setSprite(`${sprites.back}`) : setSprite(`${sprites.front}`)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={sprite} onClick={handleClick} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
