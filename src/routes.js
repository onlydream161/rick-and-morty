import Caracters from "./pages/Caracters";
import CaractersDetail from "./pages/CaractersDetail";
import Episodes from "./pages/Episodes";
import EpisodesDetail from "./pages/EpisodesDetail";
import LocationDetail from "./pages/LocationDetail";
import Locations from "./pages/Locations";
import { CARACTERS, EPISODES, LOCATIONS, MAIN } from "./utils/consts";

export const pageRoutes = [
  {
    path: MAIN,
    Component: Caracters,
  },
  {
    path: LOCATIONS,
    Component: Locations,
  },
  {
    path: EPISODES,
    Component: Episodes,
  },
  {
    path: CARACTERS,
    Component: Caracters,
  },
  {
    path: CARACTERS + "/:id",
    Component: CaractersDetail,
  },
  {
    path: LOCATIONS + "/:id",
    Component: LocationDetail,
  },
  {
    path: EPISODES + "/:id",
    Component: EpisodesDetail,
  },
];
