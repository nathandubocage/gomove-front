import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Welcome from "./components/Welcome/Welcome.tsx";
import Login from "./components/Login/Login.tsx";
import Register from "./components/Register/Register.tsx";
import Introduction from "./components/Introduction/Introduction.tsx";
import Answers from "./components/Answers/Answers.tsx";
import Home from "./components/Account/Home/Home.tsx";
import Criteria from "./components/Account/Criteria/Criteria.tsx";
import Criterias from "./components/Criterias/Criterias.tsx";
import TravelDate from "./components/Settings/TravelDate/TravelDate.tsx";
import Passengers from "./components/Settings/Passengers/Passengers.tsx";
import Price from "./components/Settings/Price/Price.tsx";
import Destination from "./components/Settings/Destination/Destination.tsx";
import Food from "./components/Criteria/Food/Food.tsx";
import Hobbies from "./components/Criteria/Hobbies/Hobbies.tsx";
import Room from "./components/Criteria/Room/Room.tsx";
import Weather from "./components/Criteria/Weather/Weather.tsx";
import Travel from "./components/Criteria/Travel/Travel.tsx";
import Single from "./components/Single/Single.tsx";
import BookingSelectReturn from "./components/Single/BookingSelectReturn/BookingSelectReturn.tsx";
import Summary from "./components/Single/Summary/Summary.tsx";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/introduction",
    element: <Introduction />,
  },
  {
    path: "/answers",
    element: <Answers />,
  },
  {
    path: "/account",
    element: <Home />,
  },
  {
    path: "/criterias",
    element: <Criterias />,
  },
  {
    path: "/criteria",
    element: <Criteria />,
  },
  {
    path: "/travel-date",
    element: <TravelDate />,
  },
  {
    path: "/passengers",
    element: <Passengers />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/hobbies",
    element: <Hobbies />,
  },
  {
    path: "/travel",
    element: <Travel />,
  },
  {
    path: "/single/:id",
    element: <Single />,
  },
  {
    path: "/single/:id/booking",
    element: <BookingSelectReturn />,
  },
  {
    path: "/single/:id/summary",
    element: <Summary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
);
