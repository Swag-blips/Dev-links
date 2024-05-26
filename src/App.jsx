import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import ErrorPage from "./pages/Error.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import PrivateRoute from "../routes/PrivateRoute.jsx";
import PublicRoute from "../routes/PublicRoute.jsx";
import Profile from "./pages/profile/Profile.jsx";
import UpdatePage from "./pages/update/UpdatePage.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: (
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile/:id",
      element: <Profile />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/updateProfile",
      element: (
        <PrivateRoute>
          <UpdatePage />
        </PrivateRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "*", // Catch-all route
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
