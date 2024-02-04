import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const CartHeader = ({disable}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart-categ-show">
              <ul>
                <li>
                  <NavLink to="/cart">Shopping Cart</NavLink>
                </li>
                <i className="fa-solid fa-chevron-right"></i>
                <li>
                  <NavLink to="/check-out">Checkout</NavLink>
                </li>
                <i className="fa-solid fa-chevron-right"></i>
                <li>
                  <NavLink to="#" className={disable}>
                    Order Complete
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartHeader;
