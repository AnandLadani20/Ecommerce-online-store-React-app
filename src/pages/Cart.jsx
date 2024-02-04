import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/cart.css";
import ShoppingCart from "./ShoppingCart";
import CheckOut from "./CheckOut";
import OrderComplete from "./OrderComplete";

import { ReactComponent as ShoppingBag } from "../files/svg/shopBag.svg";

import { useCartContext } from "../context/cart";

const Cart = () => {
  const [component, setComponent] = useState(<ShoppingCart />);
  const cartContext = useCartContext();

  const handleCartCategory = (value) => {
    switch (value) {
      case "shopping":
        return setComponent(<ShoppingCart  />);

      case "checkOut":
        return setComponent(<CheckOut />);

      case "orderComplete":
        return setComponent(<OrderComplete />);

      default:
        setComponent(<ShoppingCart />);
        break;
    }
  };

 

  return (
    <>
      <Header />

      {cartContext.cartData.length > 0 ? (
        <>
          {component}
        </>
      ) : (
        <div className="empty-cart-show">
          <div className="empty-cart-icon">
            <ShoppingBag />
          </div>
          <p>No products added to the cart</p>
          <button>Return to shop</button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
