import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import ShoppingCart from "../pages/ShoppingCart";
import CheckOut from "../pages/CheckOut";
import OrderComplete from "../pages/OrderComplete";
import Wishlist from "../pages/Wishlist";
import ProductPage from "../pages/Product/ProductPage";
import Shop from "../pages/Categories/Shop";
import DynamicCategories from "../pages/Categories/DynamicCategories";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import AccountDetails from "../pages/Account/AccountDetails";
import AccountOrder from "../pages/Account/AccountOrder";
import AccountAddress from "../pages/Account/AccountAddress";
import AccountDownload from "../pages/Account/AccountDownload";
import AccountDashboard from "../pages/Account/AccountDashboard";
import Error from "../pages/Error";
import { useAuthContext } from "../context/auth";

const WithRoutes = () => {
 
  const { user } = useAuthContext();
  
  const userData = JSON.parse(localStorage.getItem("user"));

  const authented = user?.id || userData;

  console.log(authented)
  
 
  console.log(typeof authented, authented, "auth");
  const Redirect = <Navigate to="/login" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/shop/products/:productCategory/:categoryName"
          element={<DynamicCategories />}
        />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/check-out" element={authented ? <CheckOut /> : Redirect} />
        <Route
          path="/order-complete"
          element={authented ? <OrderComplete /> : Redirect}
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/product/:productName/:productId"
          element={<ProductPage />}
        />
        <Route path="/my-account/" element={authented  ? <Account /> : Redirect}>
          <Route index element={authented ? <AccountDashboard /> : Redirect} />
          <Route
            path="Account-Order"
            element={authented ? <AccountOrder /> : Redirect}
          />
          <Route
            path="Account-Details"
            element={authented ? <AccountDetails /> : Redirect}
          />
          <Route
            path="Account-Address"
            element={authented ? <AccountAddress /> : Redirect}
          />
          <Route
            path="Account-Download"
            element={authented ? <AccountDownload /> : Redirect}
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default WithRoutes;
