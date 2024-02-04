import React, { useState, createContext, useContext,useEffect } from "react";
import { toast } from "react-toastify";

const initialState = {
  cartData: [],
  updateCart: () => {},
  deleteCartItem: () => {},
  emptyCart: () => {},
};

export const CartContext = createContext(initialState);

export const CartWrapper = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Load cart data from local storage on component mount
    const savedCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartData(savedCartData);
  }, []);

  const updateCart = (newItem) => {
    setCartData((prevCartData) => {
      const existingItemIndex = prevCartData.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // Item exists, update quantity or any other properties
        const updatedCartData = prevCartData.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: Math.max(1, (item.quantity || 0) + (newItem.quantity || 1)) }
            : item
        );

        // If the quantity becomes 0 or less, remove the item from the cart
        const filteredCartData = updatedCartData.filter((item) => item.quantity > 0);

        // Save updated cart data to local storage
        localStorage.setItem("cartData", JSON.stringify(filteredCartData));

        toast.success("item added in cart", {
          position: "bottom-right",
        });
        return filteredCartData;
      } else {
        // Item doesn't exist, add it to the cart with a default quantity of 1
        const updatedCartData = [
          ...prevCartData,
          { ...newItem, quantity: Math.max(1, newItem.quantity || 1) },
        ];

        // Save updated cart data to local storage
        localStorage.setItem("cartData", JSON.stringify(updatedCartData));
     
        toast.success("item add in cart", {
          position: "bottom-right",
        });
        return updatedCartData;
      }
    });
  };

  const deleteCartItem = (itemId) => {
    setCartData((prevCartData) => {
      const filteredCartData = prevCartData.filter((item) => item.id !== itemId);

      // Save updated cart data to local storage
      localStorage.setItem("cartData", JSON.stringify(filteredCartData));

      return filteredCartData;
    });
  };
  const emptyCart = () => {
    setCartData([]);
    // localStorage.removeItem("cartData");
  };

  let value = {
    cartData,
    updateCart,
    emptyCart,
    deleteCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
