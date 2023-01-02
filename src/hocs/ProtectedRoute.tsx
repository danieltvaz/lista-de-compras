import { Navigate, useLocation, useNavigate } from "react-router";
import { ReactNode, useCallback, useEffect, useState } from "react";

import authHandler from "../utils/auth-handler";

type ProtectedRouteTypes = {
  children: ReactNode;
};

const PROTECTED_ROUTES = ["/products"];

export default function ProtectedRoute({ children }: ProtectedRouteTypes) {
  const { isAutenticated } = authHandler();

  if (isAutenticated()) return <>{children}</>;
  else return <Navigate to="/lista-de-compras" />;
}
