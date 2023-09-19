import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function RequireAuth({children}) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{path: location.pathname}}/>
  }
  return children
}

export default RequireAuth;
