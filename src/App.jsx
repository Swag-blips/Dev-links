import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import ErrorPage from "./pages/Error.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import PrivateRoute from "../routes/PrivateRoute.jsx";
import PublicRoute from "../routes/PublicRoute.jsx";
import Profile from "./pages/profile/Profile.jsx";
import UpdateProfile from "./pages/update/UpdateProfile.jsx";

function App() {
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
    {
      path: "/updateProfile",
      element: <UpdateProfile />,
      error: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
