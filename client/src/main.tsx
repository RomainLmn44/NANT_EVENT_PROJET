import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import MyCalendar from "./components/Calendar/Calendar";
import Agenda from "./pages/Agenda/Agenda";
import Aleatoire from "./pages/Aleatoire/Aleatoire";
import Art from "./pages/Art";
import Evenements from "./pages/Evenements";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import Home from "./pages/HomePage/HomePage";
import LogoHome from "./pages/LogoHome/LogoHome";

import MapPage from "./pages/MapPage/MapPage";
import Music from "./pages/MusicPage/Music";
import Show from "./pages/Show";
import Sport from "./pages/Sport";

import UserPage from "./pages/UserPage";

import NaoNight from "./pages/NaoNight/NaoNight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogoHome />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Agenda",
        element: <Agenda />,
      },
      { path: "/Aleatoire", element: <Aleatoire /> },
      {
        path: "MapPage",
        element: <MapPage />,
      },
      {
        path: "Music",
        element: <Music />,
      },
      {
        path: "Sport",
        element: <Sport />,
      },
      {
        path: "Show",
        element: <Show />,
      },
      {
        path: "Art",
        element: <Art />,
      },
      {
        path: "Event/:id",
        element: <Evenements />,
        loader: ({ params }) =>
          fetch(
            `https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=id_manif%3A${params.id}`,
          ),
      },
      {
        path: "Userpage",
        element: <UserPage />,
      },
      { path: "FavoritePage", element: <FavoritePage /> },
    ],
  },
  {
    path: "/Naonight",
    element: <NaoNight />,
  },
  {
    path: "/Calendar",
    element: <MyCalendar />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

console.warn(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_TOKEN,
);

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
