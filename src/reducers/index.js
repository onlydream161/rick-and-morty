import { applyMiddleware, combineReducers, createStore } from "redux";
import caracterReducer from "./caracterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import locationReducer from "./locationsReducer";
import episodesReducer from "./EpisodesReducer";

const rootReducer = combineReducers({
  caracter: caracterReducer,
  locations: locationReducer,
  episodes: episodesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
