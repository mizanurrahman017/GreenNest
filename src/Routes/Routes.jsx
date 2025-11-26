import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import HomePage from "../pages/Home/Home";
import Details from "../component/Details/details";
import Login from "../component/login/login";
import register from "../component/Register/register";
import myprofile from "../component/Myprofile/myprofile";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/details/:id",
        Component: Details,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: register,
      },
      {
        path: "/profile",
        Component: myprofile,
      }
    ]
  },
]);
