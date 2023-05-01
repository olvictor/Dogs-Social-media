import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }

  return <div>ProtectedRouter</div>;
};

export default ProtectedRoute;
