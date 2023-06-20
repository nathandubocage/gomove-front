import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Welcome from "./components/Welcome/Welcome.tsx";
import Login from "./components/Login/Login.tsx";
import Register from "./components/Register/Register.tsx";
import Introduction from "./components/Introduction/Introduction.tsx";
import Answers from "./components/Answers/Answers.tsx";

import "./index.scss";
import Home from "./components/Account/Home/Home.tsx";

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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
