import LoginPage from "../pages/login/login";
import ProductListPage from "../pages/product-list";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    index: true,
  },
  {
    path: "/products",
    element: <ProductListPage />,
  },
]);

export default router;
