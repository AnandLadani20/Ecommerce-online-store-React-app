import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitleHeader from "../components/PageTitleHeader";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../style/account.css";
import { useAuthContext } from "../context/auth";

const Account = () => {
  const [activeComp, setActiveComp] = useState(true);
  const navigate = useNavigate();
  const { logOut } = useAuthContext();

  useEffect(() => {
    document.title = "My Account - My Ecommerece App";
  }, []);

  return (
    <>
      <Header />
      <PageTitleHeader
        pageTitle="My Account"
        hierarchySecond="MY ACCOUNT"
        hierarchyFirst="SHOP"
      />
      {/* {registerUser ? <Signin /> : <Login />} */}

      <div className="account-main-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-3">
              <div className="account-navigations-wrap">
                <div className="account-nav-title">
                  <h5>MY ACCOUNT</h5>
                </div>
                <ul>
                  <li>
                    <NavLink
                      to="/my-account"
                      className={
                        activeComp ? "acc-nav-items" : "acc-nav-items deactive"
                      }
                      onClick={() => setActiveComp(true)}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/my-account/Account-Order"
                      className="acc-nav-items"
                      onClick={() => setActiveComp(false)}
                    >
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/my-account/Account-Download"
                      className="acc-nav-items"
                      onClick={() => setActiveComp(false)}
                    >
                      Download
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/my-account/Account-Address"
                      className="acc-nav-items"
                      onClick={() => setActiveComp(false)}
                    >
                      Address
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/my-account/Account-Details"
                      className="acc-nav-items"
                      onClick={() => setActiveComp(false)}
                    >
                      Account Details
                    </NavLink>
                  </li>
                  <li>
                    <div
                      className="acc-nav-items"
                      onClick={() => navigate("/wishlist")}
                    >
                      Wishlist
                    </div>
                  </li>
                  <li>
                    <div className="acc-nav-items" onClick={logOut}>
                      Log out
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-9 col-lg-9">
              <div>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Account;
