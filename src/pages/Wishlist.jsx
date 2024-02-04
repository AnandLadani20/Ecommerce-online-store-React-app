import React, { memo, useEffect } from "react";
import PageTitleHeader from "../components/PageTitleHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/wishlist.css";
import { useWishlistContext } from "../context/wishlist";

import { ReactComponent as HeartIcon } from "../files/svg/heart.svg";
import { Link } from "react-router-dom";

const WishlistItem = memo(({ item, deleteWishlistItem }) => (
  <tr className="cart-product-row">
    <td>
      <div className="cart-img-previw">
        <Link to={`/product/${item.title.replace("/", "")}/${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
        <div className="cart-item-delete" onClick={deleteWishlistItem}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </td>
    <td>
      <Link to={`/product/${item.title.replace("/", "")}/${item.id}`}>
        {" "}
        {item.title.slice(0, 20)}
      </Link>
    </td>
    <td>${item.price}</td>
    <td>In Stock</td>
    <td>btns</td>
  </tr>
));

const Wishlist = () => {
  const { wistlistData, deleteWishlistItem } = useWishlistContext();

  console.log("wistlistData", wistlistData);

  const handleDeleteItem = (item) => {
    deleteWishlistItem(item.id);
  };

  useEffect(() => {
    document.title = "My Wishlist - My Ecommerece App";
  }, []);
  return (
    <>
      <Header />
      <PageTitleHeader
        pageTitle="Wishlist"
        hierarchySecond="WISHLIST"
        hierarchyFirst=""
      />

      <div className="wishlist-main-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wishlist-product-box">
                <h2 className="common-heading-h2">My Wishlist</h2>
                {wistlistData.length > 0 ? (
                  <div className="cart-item-list-view">
                    <table>
                      <thead>
                        <tr>
                          <th>&nbsp;</th>
                          <th>PRODUCT</th>
                          <th>PRICE</th>
                          <th>STOCK STATUS</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wistlistData.map((item) => (
                          <WishlistItem
                            key={item.id}
                            item={item}
                            deleteWishlistItem={() => handleDeleteItem(item)}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="empty-wishlist-area">
                    <div className="empty-cart-icon">
                      <HeartIcon />
                    </div>
                    <p>No products added to the wishlist</p>
                    <button>GO SHOPPING</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
