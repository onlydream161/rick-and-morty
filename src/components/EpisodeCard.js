import React from "react";

const EpisodeCard = (props) => {
  const card = props.card;
  return (
    <div className="episodes__card">
      <h3 className="episodes__card-name"> {card.name} </h3>
      <p className="episodes__card-species">{card.air_date}</p>
      <p className="episodes__card-episode">{card.episode}</p>
    </div>
  );
};

export default EpisodeCard;
