import React from "react";
import "../style/cart.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartHeader from "../components/CartHeader";
import { useCartContext } from "../context/cart";
import { useCartFormContext } from "../context/cartForm";

const CheckOut = () => {
  const { register, handleSubmit, errors, onSubmitFormData } =
    useCartFormContext();
  const cartContext = useCartContext();

  const subtotal = cartContext.cartData.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);
  const total = subtotal;

  return (
    <>
      <Header />
      <CartHeader disable="disable" />

      <div className="product-checkout-area">
        <div className="container">
          <form
            onSubmit={handleSubmit((data) =>
              onSubmitFormData(data, "orderComplete")
            )}
          >
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="checkout-biling-details">
                  <h4>Billing Details</h4>

                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-medium">
                          First name
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="fname"
                          id="fname"
                          {...register("fname")}
                        />
                        <span className="form-error-style">
                          {errors?.fname?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 pl-md-0">
                      <div className="form-group">
                        <label>
                          Last name
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="lname"
                          id="lname"
                          {...register("lname")}
                        />
                        <span className="form-error-style">
                          {errors?.lname?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Company name (optional)</label>
                        <input
                          type="text"
                          name="companyName"
                          id="companyName"
                          {...register("companyName")}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Country / Region
                          <span className="required">*</span>
                        </label>
                        <select
                          name="country"
                          id="country"
                          {...register("country")}
                        >
                          <option value="">Select a country / region…</option>
                          <option value="india">India</option>
                          <option value="usa">USA</option>
                          <option value="canada">Canada</option>
                        </select>
                        <span className="form-error-style">
                          {errors?.country?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Street address
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="streetAdress"
                          id="streetAdress"
                          placeholder="House number and street name"
                          {...register("streetAdress")}
                        />
                        <input
                          type="text"
                          name="streetAdress2"
                          id="streetAdress2"
                          className="mt-2"
                          placeholder="Apartment, suite, unit, etc.(optional)"
                          {...register("streetAdress2")}
                        />
                        <span className="form-error-style">
                          {errors?.streetAdress?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Town / City
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="cityName"
                          id="cityName"
                          {...register("cityName")}
                        />
                        <span className="form-error-style">
                          {errors?.cityName?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          State
                          <span className="required">*</span>
                        </label>
                        <select name="state" id="state" {...register("state")}>
                          <option value="">Select a state…</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Maharashtra">Maharashtra</option>
                        </select>
                        <span className="form-error-style">
                          {errors?.state?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          PIN Code
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="pinCode"
                          id="pinCode"
                          {...register("pinCode")}
                        />
                        <span className="form-error-style">
                          {errors?.pinCode?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Phone
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          {...register("phoneNumber")}
                        />
                        <span className="form-error-style">
                          {errors?.phoneNumber?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Email address
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="emailAdress"
                          id="emailAdress"
                          {...register("emailAdress")}
                        />
                        <span className="form-error-style">
                          {errors?.emailAdress?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Order notes (optional)</label>
                        <textarea
                          name="orderNotes"
                          id="orderNotes"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          rows="4"
                          {...register("orderNotes")}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="checkout-place-order-area">
                  <h4 className="common-h4-style">YOUR ORDER</h4>
                  <div className="checkout-product-list">
                    <h5 className="common-h5-style">PRODUCT</h5>
                    <hr />
                    {cartContext.cartData.map((i) => {
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
                    <h5 className="common-h5-style">Subtotal</h5>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="cart-shiping-form">
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
                  </div>
                  <hr />
                  <div className="cart-total-pay my-3">
                    <h4 className="common-h4-style mb-0">Total</h4>
                    <h3 className="common-h3-style mb-0">
                      ${total.toFixed(2)}
                    </h3>
                  </div>
                  <hr />
                  <div className="checkout-payment-method">
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
                          name="paymentMethod"
                          id="directBankTransfer"
                          value="Direct Bank Transfer"
                          {...register("paymentMethod")}
                          checked
                        />
                        <label
                          htmlFor="directBankTransfer"
                          style={{ marginBottom: "0px" }}
                        >
                          Direct Bank Transfer
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
                          name="paymentMethod"
                          id="checkPayments"
                          value="Check Payments"
                          {...register("paymentMethod")}
                        />
                        <label
                          htmlFor="checkPayments"
                          style={{ marginBottom: "0px" }}
                        >
                          Check Payments
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
                          name="paymentMethod"
                          id="payPalMethod"
                          value="PayPal Method"
                          {...register("paymentMethod")}
                        />
                        <label
                          htmlFor="payPalMethod"
                          style={{ marginBottom: "0px" }}
                        >
                          PayPal
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="cart-to-checkout-btn">
                    <button type="submit">Place Order</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckOut;
