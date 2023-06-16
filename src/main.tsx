import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Login from "./components/Login/Login.tsx";
import Register from "./components/Register/Register.tsx";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
