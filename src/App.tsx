import { AuthContextProvider } from "./contexts/auth-context";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
