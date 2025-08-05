import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Shop from "../page/Shop/Shop";
import FAQ from "../page/FAQ/FAQ";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Carts from "../page/Cart/Cart";
import Wishlist from "../page/Wishlist/Wishlist";
import ProductDetails from "../page/ProductDetails/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Carts />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
