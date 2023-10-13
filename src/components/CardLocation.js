import React from "react";

const CardLocation = (prop) => {
  const location = prop.location;

  return (
    <div className="location__card">
      <h3>{location.name}</h3>
      <p>{location.type}</p>
    </div>
  );
};

export default CardLocation;
