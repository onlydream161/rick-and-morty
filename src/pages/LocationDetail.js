import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleLocation } from "../components/actions/location";
import { getResidents } from "../components/actions/caracter";
import { CARACTERS } from "../utils/consts";
import Card from "../components/Card";
import LinkBack from "../components/LinkBack";

const LocationDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singleLocation = useSelector((state) => state.locations.singleLocation);
  const residents = useSelector((state) => state.caracter.residents);

  useEffect(() => {
    dispatch(getSingleLocation(params.id));
  }, []);
  useEffect(() => {
    dispatch(getResidents(singleLocation.residents));
  }, [singleLocation]);
  return (
    <div className="single-location__page">
      <LinkBack />
      <h1>{singleLocation.name}</h1>
      <div className="single-location__info">
        <div>
          <h3>Type</h3>
          <p>{singleLocation.type}</p>
        </div>
        <div>
          <h3>Dimension</h3>
          <p>{singleLocation.dimension}</p>
        </div>
      </div>
      <h2>Residents</h2>
      <div className="caracters__cards">
        {residents?.map((resident) => (
          <Link
            className="caracters__link-item"
            key={resident.id}
            to={CARACTERS + resident.id}
          >
            <Card card={resident} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LocationDetail;
