import LoginPage from "../pages/login/login";
import ProductListPage from "../pages/product-list";
import ProtectedRoute from "../hocs/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    index: true,
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
