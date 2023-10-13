import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleEpisode } from "../components/actions/episode";
import { getResidents } from "../components/actions/caracter";
import { CARACTERS } from "../utils/consts";
import Card from "../components/Card";
import LinkBack from "../components/LinkBack";

const EpisodesDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singleEpisode = useSelector((state) => state.episodes.singleEpisode);
  const casts = useSelector((state) => state.caracter.residents);

  useEffect(() => {
    dispatch(getSingleEpisode(params.id));
  }, []);
  useEffect(() => {
    dispatch(getResidents(singleEpisode.characters));
  }, [singleEpisode]);
  return (
    <div className="single-location__page">
      <LinkBack />
      <h1>{singleEpisode.name}</h1>
      <div className="single-location__info">
        <div>
          <h3>Episode</h3>
          <p>{singleEpisode.episode}</p>
        </div>
        <div>
          <h3>Date</h3>
          <p>{singleEpisode.air_date}</p>
        </div>
      </div>
      <h2>Cast</h2>
      <div className="caracters__cards">
        {casts?.map((resident) => (
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

export default EpisodesDetail;
