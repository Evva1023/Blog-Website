import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";
import { RegisterView } from "./views/RegisterView";
import { SinglePostView } from "./views/SinglePostView";
import { WritePostView } from "./views/WritePostView";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/login",
    element: <LoginView />
  },
  {
    path: "/register",
    element: <RegisterView />
  },
  {
    path: "/post/:id",
    element: <SinglePostView />
  },
  {
    path: "/write",
    element: <WritePostView />
  }
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
}