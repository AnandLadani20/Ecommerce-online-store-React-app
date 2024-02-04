import React, { useState, useEffect } from "react";
import "../style/cart.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartHeader from "../components/CartHeader";
import { useCartFormContext } from "../context/cartForm";

const OrderComplete = () => {
  const [cartData, setCartData] = useState([]);
  const { formData } = useCartFormContext();

  const subtotal = cartData.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);
  const total = subtotal;

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cartData")));
  }, []);

  return (
    <>
      <Header />
      <CartHeader />
      <div className="order-complete-status-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="order-complete-msg">
                <h4 className="text-center">
                  Thank you. Your order has been received.
                </h4>
              </div>
              <div className="order-status-details">
                <div className="common-order-detail-box">
                  <p>Order Number</p>
                  <h6>5227</h6>
                </div>
                <div className="common-order-detail-box">
                  <p>Status</p>
                  <h6>ON HOLD</h6>
                </div>
                <div className="common-order-detail-box">
                  <p>Date</p>
                  <h6>January 12, 2024</h6>
                </div>
                <div className="common-order-detail-box">
                  <p>Total</p>
                  <h6>${total.toFixed(2)}</h6>
                </div>
                <div className="common-order-detail-box">
                  <p>Payment method:</p>
                  <h6>{formData.paymentMethod}</h6>
                </div>
              </div>
              <div className="complete-order-feature-box">
                <h4 className="common-h4-style">YOUR ORDER</h4>
                <div className="checkout-product-list">
                  <h5 className="common-h5-style">PRODUCT</h5>
                  <hr />
                  {cartData.map((i) => {
                    return (
                      <>
                        <div className="checkout-product-listbox" key={i.id}>
                          <h6>
                            {i.title.slice(0, 20)} × {i.quantity}
                          </h6>
                          <p>${i.price}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="cart-subtotalbox">
                  <h5 className="common-h5-style">Subtotal:</h5>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="shipping-cart-status">
                  <h5 className="common-h5-style mb-0">Shipping:</h5>
                  <p>{formData.shippingOption}</p>
                </div>
                <hr />
                <div className="payment-cart-status">
                  <h5 className="common-h5-style mb-0">Payment method:</h5>
                  <p>{formData.paymentMethod}</p>
                </div>
                <hr />
                <div className="cart-total-pay my-3">
                  <h4 className="common-h4-style mb-0">Total:</h4>
                  <h3 className="common-h3-style mb-0">${total.toFixed(2)}</h3>
                </div>
              </div>
              <div className="user-order-address">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="user-biling-address">
                      <h4>Billing Address</h4>
                      <p>
                        {formData.fname} {formData.lname}
                      </p>
                      <p>{formData.streetAdress}</p>
                      <p>{formData.streetAdress2}</p>
                      <p>
                        {formData.cityName} {formData.pinCode}{" "}
                      </p>
                      <p>
                        {formData.state},{formData.country}{" "}
                      </p>
                      <p>{formData.phoneNumber}</p>
                      <p>{formData.emailAdress}</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="user-shipping-address">
                      <h4>Shipping Address</h4>
                      <p>
                        {formData.fname} {formData.lname}
                      </p>
                      <p>{formData.streetAdress}</p>
                      <p>{formData.streetAdress2}</p>
                      <p>
                        {formData.cityName} {formData.pinCode}{" "}
                      </p>
                      <p>
                        {formData.state},{formData.country}{" "}
                      </p>
                      <p>{formData.phoneNumber}</p>
                      <p>{formData.emailAdress}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="back-list-btn">
                <button type="button">
                  <i className="fa-solid fa-arrow-left"></i>back to list
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderComplete;
