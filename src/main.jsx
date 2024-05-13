import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Login from "./pages/auth/Login.jsx";
import ErrorPage from "./pages/Error.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import PrivateRoute from "../routes/PrivateRoute.jsx";
import { AuthProvider } from "../firebase/AuthContext.jsx";
import PublicRoute from "../routes/PublicRoute.jsx";
import Profile from "./pages/profile/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
    error: <ErrorPage />,
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
    error: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
    error: <ErrorPage />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
    error: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
