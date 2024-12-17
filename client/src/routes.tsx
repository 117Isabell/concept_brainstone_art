import { RouteObject } from "react-router-dom";
import App from "./App";
import Portfolio from "./pages/Portfolio";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
];
