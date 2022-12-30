import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import useAuth from "../utils/auth-handler";

const AuthContext = createContext({
  autenticated: false,
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [autenticated, setAutenticated] = useState(false);
  const { isAutenticated } = useAuth();

  useEffect(() => {
    setAutenticated(isAutenticated());
  }, []);

  return <AuthContext.Provider value={{ autenticated }}>{children}</AuthContext.Provider>;
}

export default () => useContext(AuthContext);
