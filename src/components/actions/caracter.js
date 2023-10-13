import axios from "axios";
import {
  setCaracter,
  setPageCaractet,
  setResidenst,
  setSingleCaracter,
} from "../../reducers/caracterReducer";

export const getCaracter = (qwery) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${qwery}`
      );

      dispatch(setCaracter(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${page}`);

      dispatch(setPageCaractet(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSingleCaracter = (id) => {
  return async (dispatch) => {
    if (id) {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        dispatch(setSingleCaracter(response.data));
      } catch (error) {
        console.log(error);
      }
    }
  };
};
export const getResidents = (residents) => {
  return async (dispatch) => {
    if (residents) {
      try {
        const response = await axios.all(
          residents?.map((endpoint) => axios.get(endpoint))
        );
        dispatch(setResidenst(response.map((item) => item.data)));
      } catch (error) {
        console.log(error);
      }
    }
  };
};
