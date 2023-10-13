import React from "react";

import { Link } from "react-router-dom";
import { EPISODES } from "../utils/consts";
import ArrowSvg from "./ArrowSvg";

const DeteilCaracterEpisodes = (props) => {
  const card = props.card;
  return (
    <div>
      <Link
        className="single__item-link"
        key={card.id}
        to={EPISODES + "/" + card.id}
      >
        <li>
          <h4>{card.episode}</h4>
          <p>{card.name}</p>
          <p className="episode__date">{card.air_date}</p>
        </li>
        <ArrowSvg />
      </Link>
    </div>
  );
};

export default DeteilCaracterEpisodes;
