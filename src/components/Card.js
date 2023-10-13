import React from "react";

const Card = (prop) => {
  const card = prop.card;
  return (
    <div className="caracters__card">
      <img className="caracters__card-img" src={card.image} alt="" />
      <div className="caracters__card-content">
        <h3 className="caracters__card-name"> {card.name} </h3>
        <p className="caracters__card-species">{card.species}</p>
      </div>
    </div>
  );
};

export default Card;
