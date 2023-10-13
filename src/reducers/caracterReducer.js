const SET_CARACTER = "SET_CARACTER";
const SET_PAGE_NEXT = "SET_PAGE";
const SET_SINGLE_ITEM = "SET_SINGLE_ITEM";
const SET_RESIDENTS = "SET_RESIDENTS";
const defaultState = {
  items: [],
  page: "",
  singleItem: {},
  residents: [],
};

export default function caracterReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CARACTER:
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
    case SET_SINGLE_ITEM:
      return {
        ...state,
        singleItem: action.payload,
      };
    case SET_RESIDENTS:
      return {
        ...state,
        residents: action.payload,
      };
    default:
      return state;
  }
}

export const setCaracter = (caracter) => ({
  type: SET_CARACTER,
  payload: caracter,
});

export const setPageCaractet = (page) => ({
  type: SET_PAGE_NEXT,
  payload: page,
});
export const setSingleCaracter = (singleCaracter) => ({
  type: SET_SINGLE_ITEM,
  payload: singleCaracter,
});
export const setResidenst = (residents) => ({
  type: SET_RESIDENTS,
  payload: residents,
});
