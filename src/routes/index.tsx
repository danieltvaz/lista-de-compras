import LoginPage from "../pages/login/login";
import ProductListPage from "../pages/product-list";
import ProtectedRoute from "../hocs/ProtectedRoute";
import SignupPage from "../pages/signup";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/lista-de-compras",
    element: <LoginPage />,
    index: true,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <ProductListPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
