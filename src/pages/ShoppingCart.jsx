import React, { useEffect, memo } from "react";
import { useCartContext } from "../context/cart";
import "../style/cart.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CartHeader from "../components/CartHeader";
import { useCartFormContext } from "../context/cartForm";

const CartItem = memo(({ item, onDecrement, onIncrement, deleteCartItem }) => (
  <tr className="cart-product-row">
    <td>
      <div className="cart-img-previw">
        <Link to={`/product/${item.title.replace("/", "")}/${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
        <div className="cart-item-delete" onClick={deleteCartItem}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </td>
    <td>
      <Link to={`/product/${item.title.replace("/", "")}/${item.id}`}>
        {item.title.slice(0, 20)}
      </Link>
    </td>
    <td>${item.price}</td>
    <td>
      <div className="cart-product-quantity">
        <div className="quantity-decrement" onClick={onDecrement}>
          -
        </div>
        <div className="quantity">{item.quantity}</div>
        <div className="quantity-increment" onClick={onIncrement}>
          +
        </div>
      </div>
    </td>
    <td>${(item.quantity * item.price).toFixed(2)}</td>
  </tr>
));

const ShoppingCart = () => {
  const cartContext = useCartContext();

  const { register, handleSubmit, onSubmitFormData } =
    useCartFormContext();

  const handleDecrement = (item) => {
    cartContext.updateCart({ ...item, quantity: -1 });
  };

  const handleIncrement = (item) => {
    cartContext.updateCart({ ...item, quantity: 1 });
  };

  const handleDeleteItem = (item) => {
    cartContext.deleteCartItem(item.id);
  };

  const handleClearCart = () => {
    cartContext.emptyCart();
  };

  const subtotal = cartContext.cartData.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);
  const total = subtotal;

  useEffect(() => {
    document.title = "My Cart - My Ecommerece App";
  }, []);

  return (
    <>
      <Header />

      <CartHeader disable="disable" />

      <div className="main-cart-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="cart-item-list-view">
                    <table>
                      <thead>
                        <tr>
                          <th>&nbsp;</th>
                          <th>PRODUCT</th>
                          <th>PRICE</th>
                          <th>QUANTITY</th>
                          <th>SUBTOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartContext.cartData.map((item) => (
                          <CartItem
                            key={item.id}
                            item={item}
                            onDecrement={() => handleDecrement(item)}
                            onIncrement={() => handleIncrement(item)}
                            deleteCartItem={() => handleDeleteItem(item)}
                          />
                        ))}
                        <tr>
                          <td colSpan="6">
                            <div className="cartlist-bottom-area">
                              <div className="cart-coupon-area">
                                <form>
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="  Coupon code"
                                      name="couponCode"
                                    />
                                    <button type="button">Apply Coupon</button>
                                  </div>
                                </form>
                              </div>
                              <div className="cartlist-clear-btn">
                                <button type="button" onClick={handleClearCart}>
                                  Clear Cart
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="carts-total-area">
                    <h4 className="common-h4-style">CART TOTALS</h4>
                    <div className="cart-subtotalbox">
                      <h5 className="common-h5-style">Subtotal</h5>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="cart-shiping-form">
                      <form
                        onSubmit={handleSubmit((data) =>
                          onSubmitFormData(data, "checkOut")
                        )}
                      >
                        <h5 className="common-h5-style">Shipping</h5>
                        <div className="form-group">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              marginBottom: "10px",
                            }}
                          >
                            <input
                              type="radio"
                              name="shippingOption"
                              id="localPickup"
                              value="Local Pickup"
                              {...register("shippingOption")}
                              checked
                            />
                            <label
                              htmlFor="localPickup"
                              style={{ marginBottom: "0px" }}
                            >
                              Local pickup
                            </label>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              marginBottom: "10px",
                            }}
                          >
                            <input
                              type="radio"
                              name="shippingOption"
                              id="flatRate"
                              value="Flat Rate"
                              {...register("shippingOption")}
                            />
                            <label
                              htmlFor="flatRate"
                              style={{ marginBottom: "0px" }}
                            >
                              Flat rate
                            </label>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              marginBottom: "10px",
                            }}
                          >
                            <input
                              type="radio"
                              name="shippingOption"
                              id="freeShipping"
                              value="Free Shipping"
                              {...register("shippingOption")}
                            />
                            <label
                              htmlFor="freeShipping"
                              style={{ marginBottom: "0px" }}
                            >
                              Free shipping
                            </label>
                          </div>
                        </div>

                        <select
                          name="country"
                          id="country"
                          {...register("country")}
                        >
                          <option value="default">
                            Select a country / region…
                          </option>
                          <option value="india">India</option>
                          <option value="usa">USA</option>
                          <option value="canada">Canada</option>
                        </select>

                        <select name="state" id="state" {...register("state")}>
                          <option value="default">Select a state…</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Maharashtra">Maharashtra</option>
                        </select>

                        <input
                          type="text"
                          placeholder="City"
                          name="cityName"
                          {...register("cityName")}
                        />

                        <input
                          type="text"
                          name="pinCode"
                          id="pinCode"
                          placeholder="Postcode / ZIP"
                          {...register("pinCode")}
                        />
                        <hr />
                        <div className="cart-total-pay">
                          <h4 className="common-h4-style">Total</h4>
                          <h3 className="common-h3-style">
                            ${total.toFixed(2)}
                          </h3>
                        </div>
                        <div className="cart-to-checkout-btn">
                          <button type="submit">
                            Proceed to checkout
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
