const SET_CARACTER = "SET_CARACTER";
const SET_PAGE_NEXT = "SET_PAGE";
const SET_FILTERED_EPISODES = "SET_FILTERED_EPISODES";
const SET_SINGLE_EPISODE = "SET_SINGLE_EPISODE";
const defaultState = {
  items: [],
  page: "",
  filterEpisodes: [],
  singleEpisode: {},
};

export default function episodesReducer(state = defaultState, action) {
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
    case SET_FILTERED_EPISODES:
      return {
        ...state,
        filterEpisodes: action.payload,
      };
    case SET_SINGLE_EPISODE:
      return {
        ...state,
        singleEpisode: action.payload,
      };
    default:
      return state;
  }
}

export const setEpisodes = (episodes) => ({
  type: SET_CARACTER,
  payload: episodes,
});

export const setPageEpisodes = (page) => ({
  type: SET_PAGE_NEXT,
  payload: page,
});
export const setFileteredEpisodes = (filerEpisodes) => ({
  type: SET_FILTERED_EPISODES,
  payload: filerEpisodes,
});
export const setSingleEpisode = (episode) => ({
  type: SET_SINGLE_EPISODE,
  payload: episode,
});
