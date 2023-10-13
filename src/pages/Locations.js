import React, { useEffect, useState } from "react";
import LocationSvg from "../components/LocationSvg";
import { useDispatch, useSelector } from "react-redux";
import { getLocations, getPage } from "../components/actions/location";
import CardLocation from "../components/CardLocation";
import InputName from "../components/InputName";
import { Link } from "react-router-dom";
import { LOCATIONS } from "../utils/consts";

const Locations = () => {
  const [name, setName] = useState("");

  function handleChange(value) {
    setName(value);
  }
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations.items);
  const pages = useSelector((state) => state.locations.page);
  useEffect(() => {
    dispatch(getLocations(name));
  }, [name]);

  return (
    <>
      <div className="location__main-logo">
        <LocationSvg />
      </div>
      <div className="search-block search-block_epsides">
        <InputName onChange={handleChange} />
      </div>
      <div className="location__cards">
        {locations.map((card) => (
          <Link
            className="caracters__link-item"
            key={card.id}
            to={LOCATIONS + "/" + card.id}
          >
            <CardLocation location={card} />
          </Link>
        ))}
      </div>
      <button
        className={pages ? "button__next" : "button__next disabled"}
        onClick={() => {
          dispatch(getPage(pages));
        }}
      >
        Load More
      </button>
    </>
  );
};

export default Locations;
