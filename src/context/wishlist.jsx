import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  wistlistData: [],
  addWishlistCart: () => {},
  deleteWishlistItem: () => {},
};

export const wishlistContext = createContext(initialState);

export const WhishlistWrapper = ({ children }) => {
  const [wistlistData, setWishlistData] = useState([]);

  const addWishlistCart = (newItem) => {
    setWishlistData((prevWishlistData) => {
      const existingItemIndex = prevWishlistData.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists in the wishlist, show a toast message
        toast.warn("Item already exists in the wishlist!");
        return prevWishlistData; // No changes, return the previous wishlist data
      }

      // Item doesn't exist in the wishlist, add it
      const updatedWishlistData = [...prevWishlistData, newItem];

      // Save the updated wishlist data to local storage
      localStorage.setItem("wishlistData", JSON.stringify(updatedWishlistData));
      toast.success("item add in wishlist", {
        position: "bottom-right",
      });
      // Return the updated wishlist data
      return updatedWishlistData;
    });
  };

  const deleteWishlistItem = (itemId) => {
    setWishlistData((prevWishlistData) => {
      const filteredWishlistData = prevWishlistData.filter(
        (item) => item.id !== itemId
      );

      // Save updated cart data to local storage
      localStorage.setItem(
        "wishlistData",
        JSON.stringify(filteredWishlistData)
      );

      return filteredWishlistData;
    });
  };

  return (
    <wishlistContext.Provider
      value={{ wistlistData, addWishlistCart, deleteWishlistItem }}
    >
      {children}
    </wishlistContext.Provider>
  );
};
export const useWishlistContext = () => {
  return useContext(wishlistContext);
};
