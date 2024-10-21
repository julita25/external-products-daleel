import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Navigate, useLocation } from "react-router-dom";
import { instanceOf } from "prop-types";


const PublicRoute = ({ children }) => {
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

  useEffect(() => {
    const auth = async () => {
      const currentUser = await currentAuthenticatedUser();
      setUser(currentUser);
      setLoading(false);
    };
    auth();
  }, []);

  useEffect(() => {
    if (location.pathname === "/login") {
      document.title = "Login | Daleel";
    }
    window.scrollTo(0, 0);
  }, [location]);

  if (loading) return <span>Loading...</span>;

  return user && user !== null ? <Navigate to="/" state={{ from: location }} replace /> : children;
};

PublicRoute.propTypes = {
  children: instanceOf(Object).isRequired
};

export default PublicRoute;
