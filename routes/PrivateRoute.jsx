import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../firebase/AuthContext";
import Spinner from "../helpers/Spinner";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (currentUser === undefined) {
    return <Spinner />;
  }

  if (!currentUser) {
    return null;
  }

  return children;
};

export default PrivateRoute;
