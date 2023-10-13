const SET_LOCATIONS = "SET_LOCATINS";
const SET_PAGE_NEXT = "SET_PAGE";
const SET_SINGLE_LOCATION = "SET_SINGLE_LOCATION";
const defaultState = {
  items: [],
  page: "",
  singleLocation: {},
};

export default function locationReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LOCATIONS:
      return {
        ...state,
        items: action.payload.results,
        page: action.payload.info.next,
      };
    case SET_PAGE_NEXT:
      return {
        ...state,
        items: [...state.items, ...action.payload.results],
        page: action.payload.info.next,
      };
    case SET_SINGLE_LOCATION:
      return {
        ...state,
        singleLocation: action.payload,
      };
    default:
      return state;
  }
}

export const setLocations = (locations) => ({
  type: SET_LOCATIONS,
  payload: locations,
});
export const setPageLocation = (page) => ({
  type: SET_PAGE_NEXT,
  payload: page,
});
export const setSingleLocation = (singleLocation) => ({
  type: SET_SINGLE_LOCATION,
  payload: singleLocation,
});
