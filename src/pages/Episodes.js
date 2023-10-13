import React, { useEffect, useState } from "react";
import EpisodeSvg from "../components/EpisodesSvg";
import InputName from "../components/InputName";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes, getPage } from "../components/actions/episode";
import EpisodeCard from "../components/EpisodeCard";
import { EPISODES } from "../utils/consts";
import { Link } from "react-router-dom";

const Episodes = () => {
  const [episode, setEpisode] = useState("");
  function handleChange(value) {
    setEpisode(value);
  }

  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes.items);

  const pages = useSelector((state) => state.episodes.page);
  useEffect(() => {
    dispatch(getEpisodes(episode));
  }, [episode]);

  return (
    <>
      <div className="location__main-logo">
        <EpisodeSvg />
      </div>
      <div className="search-block search-block_epsides">
        <InputName
          onChange={handleChange}
          placeHolder={"Filter by name or episode (ex. S01 or S01E02)"}
        />
      </div>

      <div className="caracters__cards">
        {episodes.map((episode) => (
          <Link
            className="page-episodes__link"
            key={episode.id}
            to={EPISODES + "/" + episode.id}
          >
            <EpisodeCard card={episode} />
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

export default Episodes;
