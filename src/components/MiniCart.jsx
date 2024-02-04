import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart";
import "./style.css";

import { ReactComponent as ShoppingBag } from "../files/svg/shopBag.svg";

const MiniCart = () => {
  const cartContext = useCartContext();
  const navigate = useNavigate();

  const subtotal = cartContext.cartData.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);

  const handleDeleteItem = (item) => {
    cartContext.deleteCartItem(item.id);
  };

  return (
    <>
      <li className="dropdown">
        <Link
          to="#"
          className="dropdown-toggle all-size-icon"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <ShoppingBag />
          <span className="wishlist-count">{cartContext.cartData.length}</span>
          <i className="fa-solid fa-chevron-down fa-down-arrow" />
        </Link>
        <ul className="dropdown-menu widget_shopping_cart_content">
          <div className="total-count">
            <span>{cartContext.cartData.length} ITEMS</span>
            <Link to="/cart">View cart</Link>
          </div>
          <ul className="product_list_widget">
            {cartContext.cartData.length > 0 ? (
              <>
                {cartContext.cartData.slice(0, 4).map((i) => {
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
                            {i.title.slice(0, 20)}
                          </Link>
                        </h6>

                        <p>
                          {i.quantity} × ${i.price}
                        </p>
                      </div>
                      <div className="minicart-img-previw">
                        <Link
                          to={`/product/${i.title.replace("/", "")}/${i.id}`}
                        >
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
                <li
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6 className="minicart-subtotal">SUBTOTAL</h6>
                  <h5 className="minicart-subtotal-price">${subtotal}</h5>
                </li>
                <li>
                  <button
                    className="minicart-btn"
                    onClick={() => navigate("/cart")}
                  >
                    CHECKOUT
                  </button>
                </li>
              </>
            ) : (
              <li> No products in the cart. </li>
            )}
          </ul>
        </ul>
      </li>
    </>
  );
};

export default MiniCart;
