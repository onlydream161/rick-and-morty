import axios from "axios";
import {
  setEpisodes,
  setFileteredEpisodes,
  setPageEpisodes,
  setSingleEpisode,
} from "../../reducers/EpisodesReducer";

export const getEpisodes = (qwery) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode/?episode=${qwery}`
      );
      //console.log(response);
      dispatch(setEpisodes(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${page}`);

      dispatch(setPageEpisodes(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getfilterEpisodes = (filterEpisodes) => {
  return async (dispatch) => {
    if (filterEpisodes) {
      try {
        const response = await axios.all(
          filterEpisodes?.map((endpoint) => axios.get(endpoint))
        );
        dispatch(setFileteredEpisodes(response.map((item) => item.data)));
      } catch (error) {
        console.log(error);
      }
    }
  };
};
export const getSingleEpisode = (id) => {
  return async (dispatch) => {
    if (id) {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        dispatch(setSingleEpisode(response.data));
      } catch (error) {
        console.log(error);
      }
    }
  };
};
