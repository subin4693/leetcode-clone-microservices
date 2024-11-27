import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const [isLogedin, setIsLoggedin] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    setIsLoggedin(!!token);
  }, []);

  if (isLogedin == null) {
    return <p>Loading....</p>;
  }

  return <>{isLogedin ? children : <Navigate to="/signin" />}</>;
};

export default ProtectedRoute;
