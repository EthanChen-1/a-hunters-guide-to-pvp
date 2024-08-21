import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuideApp from "./Guide";
import SignUpPage, { signUpAction } from "./pages/SignUp";
import LoginPage, { loginAction } from "./pages/Login";
import Forum, { forumLoader } from "./pages/Forum";
import Error from "./pages/Error";

const router = createBrowserRouter([
  { path: "/", element: <GuideApp /> },
  { path: "/signup", element: <SignUpPage />, action: signUpAction },
  { path: "/login", element: <LoginPage />, action: loginAction },
  {
    path: "/forum",
    element: <Forum />,
    loader: forumLoader,
    errorElement: <Error />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
