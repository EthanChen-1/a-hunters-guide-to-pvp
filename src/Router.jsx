import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuideApp from "./Guide";
import LoginPage, { loginAction } from "./pages/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <GuideApp /> },
  { path: "/login", element: <LoginPage />, action: loginAction },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
