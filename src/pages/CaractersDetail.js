import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleCaracter } from "../components/actions/caracter";
import { LOCATIONS } from "../utils/consts";
import { getfilterEpisodes } from "../components/actions/episode";
import DeteilCaracterEpisodes from "../components/DeteilCaracterEpisodes";
import ArrowSvg from "../components/ArrowSvg";
import LinkBack from "../components/LinkBack";

const CaractersDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singleCaracter = useSelector((state) => state.caracter.singleItem);
  const locationId = singleCaracter?.location?.url.lastIndexOf("/");
  const filterEpisodes = useSelector((state) => state.episodes.filterEpisodes);

  useEffect(() => {
    dispatch(getSingleCaracter(params.id));
  }, []);

  useEffect(() => {
    dispatch(getfilterEpisodes(singleCaracter.episode));
  }, [singleCaracter]);

  return (
    <>
      <LinkBack />
      <div className="single__img-block">
        <img
          className="single__item-img"
          src={singleCaracter.image}
          alt={singleCaracter.name}
        />
      </div>
      <h1 className="single__item-name">{singleCaracter.name}</h1>
      <div className="single__information-block">
        <div className="single__information-left">
          <h2>Informations</h2>
          <ul>
            <li>
              <h4>Gender</h4>
              <p>{singleCaracter.gender}</p>
            </li>
            <li>
              <h4>Status</h4>
              <p>{singleCaracter.status}</p>
            </li>
            <li>
              <h4>Specie</h4>
              <p>{singleCaracter.species}</p>
            </li>
            <li>
              <h4>Origin</h4>
              <p>{singleCaracter?.origin?.name}</p>
            </li>
            <li>
              <h4>Type</h4>
              <p>{singleCaracter.type ? singleCaracter.type : "Unknown"}</p>
            </li>
            <Link
              className="single__item-link"
              to={LOCATIONS + singleCaracter?.location?.url.slice(locationId)}
            >
              <li>
                <h4>Location</h4>
                <p>{singleCaracter?.location?.name}</p>
              </li>
              <ArrowSvg />
            </Link>
          </ul>
        </div>
        <div className="single__information-right">
          <h2>Episodes</h2>
          <ul>
            {filterEpisodes.map((episod) => (
              <DeteilCaracterEpisodes key={episod.id} card={episod} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CaractersDetail;
