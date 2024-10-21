/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";
import { instanceOf } from "prop-types";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const currentAuthenticatedUser = async () => {
    try {
      const data = await Auth.currentAuthenticatedUser();
      return data;
    } catch (err) {
      return null;
    }
  };

  const auth = async () => {
    const currentUser = await currentAuthenticatedUser();
    setUser(currentUser);
    console.log("current user", currentUser)
    setLoading(false);
  };
  useEffect(() => {
    auth();
  }, []);

  if (loading) return <span>Loading...</span>;

  return (
    (user && user !== null) ? children : <Navigate to="/login" state={{ from: location }} replace />
  );
};

ProtectedRoute.propTypes = {
  children: instanceOf(Object).isRequired
};

export default ProtectedRoute;