import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <footer className="footer">
        <div className="footer-wapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-20">
                <div className="footer-wapper-items">
                  <div className="footer-wapper-heading">
                    <h2>CONTACT INFO</h2>
                  </div>
                  <div className="footer-contact-info">
                    <h4>ADDRESS:</h4>
                    <p>123 Street Name, City, England</p>
                    <h4>PHONE::</h4>
                    <p>(123) 456-7890</p>
                    <h4>EMAIL::</h4>
                    <p>mail@example.com</p>
                    <h4>WORKING DAYS/HOURS:</h4>
                    <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
                  </div>
                  <div className="footer-contact-icon ">
                    <i className="fa-brands fa-facebook-f" />
                    <i className="fa-brands fa-twitter" />
                    <i className="fa-brands fa-instagram" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-md-6 mb-20">
                <div className="footer-wapper-items">
                  <div className="footer-wapper-heading">
                    <h2>Customer Service</h2>
                  </div>
                  <div className="footer-customer-service">
                    <ul>
                      <li>
                        <Link to="#">Help &amp; FAQs</Link>
                      </li>
                      <li>
                        <Link to="#">Order Tracking</Link>
                      </li>
                      <li>
                        <Link to="#">Shipping &amp; Delivery</Link>
                      </li>
                      <li>
                        <Link to="#">Orders History</Link>
                      </li>
                      <li>
                        <Link to="#">Advanced Search</Link>
                      </li>
                      <li>
                        <Link to="#">My Account</Link>
                      </li>
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Corporate Sales</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-md-6 mb-20">
                <div className="footer-wapper-items">
                  <div className="footer-wapper-heading">
                    <h2>POPULAR TAGS</h2>
                  </div>
                  <div className="footer-popular-tags">
                    <Link to="#">Bag</Link>
                    <Link to="#">black</Link>
                    <Link to="#">blue</Link>
                    <Link to="#">Clothes</Link>
                    <Link to="#">Fashion</Link>
                    <Link to="#">Hub</Link>
                    <Link to="#">Shirt</Link>
                    <Link to="#">shoes</Link>
                    <Link to="#">Skirt</Link>
                    <Link to="#">Sports</Link>
                    <Link to="#">Sweater</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-md-6 mb-20">
                <div className="footer-wapper-items">
                  <div className="footer-wapper-heading">
                    <h2>SUBSCRIBE NEWSLETTER</h2>
                  </div>
                  <div className="footer-subscribe-newsletter">
                    <p>
                      Get all the latest information on events, sales and
                      offers. Sign up for newsletter:
                    </p>
                    <input
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Email address"
                      defaultValue=""
                      type="email"
                      name="your-email"
                      required=""
                    />
                    <button type="button"> SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-border">
            <hr />
          </div>
          <div className="footer-bottome">
            <div className="footer-bootom-heading">
              <p>© Porto eCommerce. 2023. All Rights Reserved</p>
            </div>
            <div className="footer-bottom-icon">
              <i className="fa-brands fa-wix" />
              <i className="fa-brands fa-google-pay" />
              <i className="fa-brands fa-stripe" />
              <i className="fa-brands fa-digg" />
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
};

export default Footer;
