import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";
import { RegisterView } from "./views/RegisterView";
import { SinglePostView } from "./views/SinglePostView";
import { WritePostView } from "./views/WritePostView";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./style.css";

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeView />
      },
      {
        path: "/post/:id",
        element: <SinglePostView />
      },
      {
        path: "/write",
        element: <WritePostView />
      }
    ]
  },
  {
    path: "/login",
        element: <LoginView />
  },
  {
    path: "/register",
        element: <RegisterView />
  }

]);

export function App() {
  return (
      <RouterProvider router={router} />
  );
}