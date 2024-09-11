import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage/index";
import SearchPage from "../pages/search/index";
import WeatherPage from "../pages/weather/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/weather",
    element: <WeatherPage />,
  },
]);
