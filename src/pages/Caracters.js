import React, { useEffect, useState } from "react";

import Icon from "../components/Icon";
import { useDispatch, useSelector } from "react-redux";
import { getCaracter, getPage } from "../components/actions/caracter";
import Card from "../components/Card";
import InputName from "../components/InputName";
import { Link } from "react-router-dom";
import { CARACTERS } from "../utils/consts";

const Caracters = () => {
  const [name, setName] = useState("");

  function handleChange(value) {
    setName(value);
  }
  const dispatch = useDispatch();
  const caracters = useSelector((state) => state.caracter.items);
  const pages = useSelector((state) => state.caracter.page);
  useEffect(() => {
    dispatch(getCaracter(name));
  }, [name]);

  return (
    <>
      <div className="caracters__main-logo">
        <Icon />
      </div>
      <div className="search-block search-block_epsides">
        <InputName onChange={handleChange} />
      </div>
      <div className="caracters__cards">
        {caracters.map((caracter) => (
          <Link
            className="caracters__link-item"
            key={caracter.id}
            to={CARACTERS + caracter.id}
          >
            <Card card={caracter} />
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

export default Caracters;
