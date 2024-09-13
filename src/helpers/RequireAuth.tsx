import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = useSelector((s: RootState) => s.user.jwt);
  if (!jwt) {
    return <Navigate to="/online_store/auth/login" />;
  }
  return children;
};
