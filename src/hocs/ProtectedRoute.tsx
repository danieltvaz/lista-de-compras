import { Navigate, useLocation } from "react-router";
import { ReactNode, useCallback, useEffect, useState } from "react";

import authHandler from "../utils/auth-handler";

type ProtectedRouteTypes = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteTypes) {
  const location = useLocation();
  const { isAutenticated } = authHandler();

  if (isAutenticated()) return <>{children}</>;
  else return <Navigate to="/" />;
}
