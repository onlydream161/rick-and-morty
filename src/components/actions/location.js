import axios from "axios";
import {
  setLocations,
  setPageLocation,
  setSingleLocation,
} from "../../reducers/locationsReducer";

export const getLocations = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/?name=${name}`
      );

      dispatch(setLocations(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getPage = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${page}`);

      dispatch(setPageLocation(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getSingleLocation = (id) => {
  return async (dispatch) => {
    if (id) {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/location/${id}`
        );
        dispatch(setSingleLocation(response.data));
      } catch (error) {
        console.log(error);
      }
    }
  };
};
