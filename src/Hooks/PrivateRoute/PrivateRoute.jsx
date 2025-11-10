import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";
import Loader from "../../Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Loading state handle
  if (loading) {
    return <Loader />;
  }

  // Not logged in? Redirect to login with "from" state
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Logged in? render children
  return children;
};

export default PrivateRoute;
