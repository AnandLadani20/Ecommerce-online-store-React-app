import React from "react";
import { useWishlistContext } from "../context/wishlist";
import { Link, useNavigate } from "react-router-dom";

const WishlistSidebar = () => {
  const { wistlistData, deleteWishlistItem } = useWishlistContext();

  const handleDeleteItem = (i) => {
    deleteWishlistItem(i.id);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="wishlist-popup">
        <h3>Wishlist</h3>
        <ul className="product_list_widget">
          {wistlistData.length > 0 ? (
            <>
              {wistlistData.slice(0, 4).map((i) => {
                return (
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="minicart-product-details">
                      <h6>
                        <Link
                          to={`/product/${i.title.replace("/", "")}/${i.id}`}
                        >
                          {i.title.slice(0, 20)}...
                        </Link>
                      </h6>
                      <p>
                        {i.quantity} × ${i.price}
                      </p>
                    </div>
                    <div className="minicart-img-previw">
                      <Link to={`/product/${i.title.replace("/", "")}/${i.id}`}>
                        <img src={i.image} alt={i.title} />
                      </Link>
                      <div
                        className="cart-item-delete"
                        onClick={() => handleDeleteItem(i)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                    </div>
                  </li>
                );
              })}

              <li>
                <button
                  className="minicart-btn"
                  onClick={() => navigate("/wishlist")}
                >
                  GO TO WISHLIST
                </button>
              </li>
            </>
          ) : (
            <li> No products in the cart. </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default WishlistSidebar;
