import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Login from "./pages/auth/Login.jsx";
import ErrorPage from "./pages/Error.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    error: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    error: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomePage />,
    error: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
    <App />
  </React.StrictMode>
);
