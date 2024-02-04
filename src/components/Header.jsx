import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../files/img/mylogo2.png";
import headerPhoneIcon from "../files/img/shop4_header_phone.png";
import menuBanner from "../files/img/shop4-menu-banner-1.jpg";
import menuBanner2 from "../files/img/shop4-menu-banner-2.jpg";

import "./style.css";
import MiniCart from "./MiniCart";
import WishlistSidebar from "./WishlistSidebar";
import { useWishlistContext } from "../context/wishlist";

const Header = () => {
  const [isToggled, setToggled] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [stickNav, setStickyNav] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [activeSubOfSubMenu, setActiveSubOfSubMenu] = useState("");

  const handleTogglebtn = () => {
    setToggled(!isToggled);
  };

  const handleWishlistSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY > 200) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };

    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const handleTabClick = (dataId) => {
    setActiveTab(dataId);
  };

  const { wistlistData } = useWishlistContext();

  const handleSubMenu = (val) => {
    setActiveSubMenu((prevVal) => (prevVal === val ? null : val));
  };

  const handleSubOfSubMenu = (val) => {
    setActiveSubOfSubMenu((prevVal) => (prevVal === val ? null : val));
  };

  return (
    <>
      <div
        className={
          sidebarToggle
            ? "shoping-overlay-bg shoping-bg-active"
            : "shoping-overlay-bg"
        }
        onClick={handleWishlistSidebar}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>

      <div
        className={isToggled ? "m-overlay-bg m-bg-active" : "m-overlay-bg"}
        onClick={handleTogglebtn}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
      {/* Header Start */}
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="col-lg-12 m-auto">
              <div className="header-wapper-top">
                <div className="header-wapper-top-heading">
                  <h4>
                    Get Up to <strong>40% OFF</strong> New-Season Styles
                  </h4>
                </div>
                <div className="header-wapper-top-center">
                  <Link to="#">Men</Link>
                  <Link to="#">WOMEN</Link>

                  <p className="vc_custom_heading mb-0 d-inline-block align-left">
                    * Limited time only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-wapper-center">
          <div className="container">
            <div className="row center-align">
              <div className="col-lg-4 col-md-6 col-0">
                <div className="header-wapper-center-left">
                  <p>FREE RETURNS. STANDARD SHIPPING ORDERS $99+</p>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12 ml-auto">
                <div className="header-wapper-center-right">
                  <ul className="header-wapper-center-ul-01">
                    <li>
                      <NavLink to="/my-account">My Account</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Contact Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="/wishlist">My Wishlist</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">Log in</NavLink>
                    </li>
                  </ul>
                  <span className="separator d-none d-lg-block" />
                  <ul>
                    <li className="dropdown">
                      <NavLink
                        to="#"
                        className="dropdown-toggle"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-flag-usa" />
                        Eng <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="dropdown-menu w-70">
                        <li>
                          <NavLink to="#">
                            <i className="fa-solid fa-flag-usa" /> USA
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#">
                            <i className="fa-solid fa-flag-usa" /> USA
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <NavLink
                        to="#"
                        className="dropdown-toggle"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        USD <span className="caret" />
                        <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="dropdown-menu w-45">
                        <li>
                          <NavLink to="#"> USD </NavLink>
                        </li>
                        <li>
                          <NavLink to="#"> EUR</NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <span className="separator d-none d-lg-block" />
                  <div className="header-wapper-top-icon">
                    
                  <Link to="https://www.linkedin.com/in/anand-ladani-98b502258" target="_blank"><i className="fa-brands fa-linkedin share-linkdn"></i></Link>
                 <Link to="https://wa.me/9265374493" target="_blank"><i className="fa-brands fa-whatsapp share-watsapp"></i></Link>
                    {/* <i className="fa-brands fa-twitter s share-twitter " /> */}
                    <Link to="mailto:anandladani11@gmail.com" target="_blank"><i className="fa-regular fa-envelope share-mail" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-wapper-bottom">
          <div className="container">
            <div className="row  center-align">
              <div className="col-lg-2 col-md-6 col-6">
                <div className="header-right-side">
                  <div
                    className={isToggled ? "m-toggle-btn open" : "m-toggle-btn"}
                    id="m-toggle-btn"
                    onClick={handleTogglebtn}
                  >
                    <div className="line-card one"></div>
                    <div className="line-card two"></div>
                    <div className="line-card three"></div>
                  </div>
                </div>
                <div className="header-wapper-bottom-logo">
                  <Link to="/">
                    <img src={logoImage} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                <div className="searchform-fields">
                  <span className="text">
                    <input
                      name="s"
                      type="text"
                      defaultValue=""
                      placeholder="Search…"
                      autoComplete="off"
                      className="porto-search-init"
                    />
                  </span>
                  <select className="form-control selectric">
                    <option>All Categories</option>
                    <option>Accessories</option>
                    <option>Clothing</option>
                    <option>Music</option>
                    <option>Electronics</option>
                    <option>Fashin</option>
                    <option>Men</option>
                    <option>Women</option>
                  </select>
                  <span className="button-wrap">
                    <button
                      className="btn btn-special"
                      title="Search"
                      type="submit"
                    >
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-6">
                <div className="header-porto-icon-box-wapper">
                  <div className="header-porto-icon-box">
                    <div className="header-porto-icon">
                      <Link to="#" className="">
                        <img src={headerPhoneIcon} alt="headerPhone-Icon" />
                      </Link>
                    </div>
                    <div className="header-porto-text">
                      <h5>Call Us Now</h5>
                      <h3>
                        <Link to="tel:+123 5678 890">+123 5678 890</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="header-porto-icon-box-user">
                    <Link
                      to="/my-account"
                      className="login-btn modal-form-a all-size-icon"
                      data-target="#login-form-modal"
                    >
                      <i className="fa-regular fa-user" />
                    </Link>
                  </div>
                  <div
                    className={
                      sidebarToggle
                        ? "shoping-toggle-btn open"
                        : "shoping-toggle-btn"
                    }
                    id="shoping-toggle-btn"
                    onClick={handleWishlistSidebar}
                  >
                    <div className="header-porto-icon-box-heart">
                      <Link to="#" className="all-size-icon">
                        <i className="fa-regular fa-heart all-size-icon-heart " />
                        <span className="wishlist-count">
                          {wistlistData.length}
                        </span>
                      </Link>
                    </div>

                    <div
                      className={
                        sidebarToggle
                          ? "shoping-sidebar-wrapper shoping-menu-active"
                          : "shoping-sidebar-wrapper"
                      }
                      id="shoping-sidebar-wrapper"
                    >
                      <WishlistSidebar />
                    </div>
                  </div>
                  <div className="header-icon-box-shopping center-align">
                    <MiniCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* desktop Shop By Category */}
        <div
          className={`header-wapper-main ${stickNav ? "sticky-header" : " "}`}
        >
          <div className="container">
            <div className="main-toggle-menu-wapper">
              <div className="main-toggle-menu center-align">
                <li className="dropdown main-toggle-menu-heading">
                  <Link
                    to="#"
                    className="dropdown-toggle  main-toggle-heading-wapper"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-bars pr-2" /> Shop By Category
                    <i className="fa-solid fa-chevron-down pl-2" />
                  </Link>
                  <ul className="dropdown-menu main-toggle-dropdown-menu">
                    <li className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-vest-patches" /> Fashion
                        <span className="arrow">
                          <i className="fa-solid fa-angle-right" />
                        </span>
                      </Link>
                      <ul className="dropdown-menu fasion-dropdown-menu  dropdown-left">
                        <div className="row">
                          <div className="col-lg-6 ">
                            <div className="fasion-dropdown-menu-wapper dropdown-padding-style">
                              <h4>Women</h4>

                              <ul className="mb-20">
                                <li>
                                  <Link to="#">Tops &amp; Blohses</Link>
                                </li>
                                <li>
                                  <Link to="#">Accessories</Link>
                                </li>
                                <li>
                                  <Link to="#">Dresses &amp; Skill</Link>
                                </li>
                                <li>
                                  <Link to="#">Shose &amp; Boot</Link>
                                </li>
                              </ul>
                              <h4>Men</h4>
                              <ul className="mb-20">
                                <li>
                                  <Link to="#">Accessories</Link>
                                </li>
                                <li>
                                  <Link to="#">Watch Fashion</Link>
                                </li>
                                <li>
                                  <Link to="#">Tees,knits &amp; Polos</Link>
                                </li>
                                <li>
                                  <Link to="#">Pants &amp; Denim</Link>
                                </li>
                              </ul>
                              <h4>Kids Fashions</h4>
                              <ul>
                                <li>
                                  <Link>Casual Shoes</Link>
                                </li>
                                <li>
                                  <Link>Spring &amp; Autumn</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6 p-0">
                            <div className="fasion-dropdown-menu-img">
                              <h3>Find The Boundaries. Push Through!</h3>
                              <h2>MEGA SALE 70% OFF</h2>
                              <p>STARTING AT</p>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-bolt" /> Electronics
                        <span className="arrow">
                          <i className="fa-solid fa-angle-right" />
                        </span>
                      </Link>
                      <ul className="dropdown-menu electronics-dropdown-menu  dropdown-left">
                        <div className="row">
                          <div className="col-lg-6 ">
                            <div className="fasion-dropdown-menu-wapper">
                              <h4>Accessories</h4>

                              <div className="row">
                                <div className="col-6">
                                  <ul className="mb-10">
                                    <li>
                                      <Link to="#">Assessories</Link>
                                    </li>

                                    <li>
                                      <Link to="#">Cables</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Electronics</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6">
                                  <div className="electronics-dropdown-menu-items">
                                    <ul className="mb-10">
                                      <li>
                                        <Link to="#">Batteries</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Home</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Bags &amp; Cases</Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <h3 className="mb-20">
                                <Link to="#">
                                  View All
                                  <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                              </h3>
                              <h4>Camera &amp; Photo</h4>
                              <div className="row">
                                <div className="col-6">
                                  <ul className="mb-10">
                                    <li>
                                      <Link to="#">Digital Cameras</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Camcorders</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Camera Drones</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6">
                                  <div className="electronics-dropdown-menu-items">
                                    <ul className="mb-10">
                                      <li>
                                        <Link to="#">Action Cameras</Link>
                                      </li>
                                      <li>
                                        <Link to="#">PHoto Supplies</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Camera &amp; Photo</Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <h3 className="mb-20">
                                <Link to="#">
                                  View All
                                  <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                              </h3>
                            </div>
                          </div>
                          <div className="col-lg-6 ">
                            <div className="fasion-dropdown-menu-wapper">
                              <h4>Audio &amp; Video</h4>
                              <div className="row">
                                <div className="col-6">
                                  <ul className="mb-10">
                                    <li>
                                      <Link to="#">Televisions</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Tv Receivers</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Project</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6">
                                  <div className="electronics-dropdown-menu-items">
                                    <ul className="mb-10">
                                      <li>
                                        <Link to="#">HDMI Project</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Audio Amplifier</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Tv Stiks</Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <h3 className="mb-20">
                                <Link to="#">
                                  View All
                                  <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                              </h3>
                              <h4>Laptops</h4>
                              <div className="row">
                                <div className="col-6">
                                  <ul className="mb-10">
                                    <li>
                                      <Link to="#">Laptop </Link>
                                    </li>
                                    <li>
                                      <Link to="#">Tablet Accessories</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Laptop Bags</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6">
                                  <div className="electronics-dropdown-menu-items">
                                    <ul className="mb-10">
                                      <li>
                                        <Link to="#">Gaming Laptops</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Ultraslim Laptops</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Tablets</Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <h3 className="mb-20">
                                <Link to="#">
                                  View All
                                  <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-gift" /> Gifts
                        <span className="arrow">
                          <i className="fa-solid fa-angle-right" />
                        </span>
                      </Link>
                      <ul className="dropdown-menu electronics-dropdown-menu gifts-dropdown dropdown-left">
                        <div className="row">
                          <div className="col-lg-6 p-0">
                            <div className="fasion-dropdown-menu-wapper">
                              <div className="row">
                                <div className="col-5">
                                  <ul className="mb-10 kidsh-icon">
                                    <i className="fa-regular fa-face-smile-wink" />
                                  </ul>
                                </div>
                                <div className="col-7">
                                  <h4>For Him</h4>
                                  <div className="electronics-dropdown-menu-items">
                                    <ul className="mb-10">
                                      <li>
                                        <Link to="#">Gifts For Husband</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Gifts For Dad</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Gifts For Dad</Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <h3 className="mb-20">
                                    <Link to="#">
                                      View All
                                      <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-5">
                                  <ul className="mb-10 kidsh-icon">
                                    <i className="fa-solid fa-child" />
                                  </ul>
                                </div>
                                <div className="col-7">
                                  <h4>For Kids</h4>
                                  <div className="electronics-dropdown-menu-items">
                                    <ul className="mb-10">
                                      <li>
                                        <Link to="#">Gifts For Boys</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Gifts for Girls</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Gifts for Tween Boys</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Action Cameras</Link>
                                      </li>
                                      <li>
                                        <Link to="#">PHoto Supplies</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Camera &amp; Photo</Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <h3 className="mb-20">
                                    <Link to="#">
                                      View All
                                      <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 p-0">
                            <div className="fasion-dropdown-menu-wapper">
                              <div className="row">
                                <div className="col-5">
                                  <ul className="mb-10 kidsh-icon">
                                    <i className="fa-solid fa-gift" />
                                  </ul>
                                </div>
                                <div className="col-7">
                                  <h4>Birthday</h4>
                                  <div className="electronics-dropdown-menu-items">
                                    <ul className="mb-10">
                                      <li>
                                        <Link to="#">Birthday for Him</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Birthday for Her</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Boyfriend Giftes</Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <h3 className="mb-20">
                                    <Link to="#">
                                      View All
                                      <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-5">
                                  <ul className="mb-10 kidsh-icon">
                                    <i className="fa-solid fa-child-reaching" />
                                  </ul>
                                </div>
                                <div className="col-7">
                                  <h4>For Her</h4>
                                  <div className="electronics-dropdown-menu-items">
                                    <ul className="mb-10">
                                      <li>
                                        <Link to="#">
                                          Giftes for Girlsfrind
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">Gifts for Wife</Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          Laptop Bags &amp; Cases
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">Gifts for Mom</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Gifts for Wife</Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          Laptop Bags &amp; Cases
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <h3 className="mb-20">
                                    <Link to="#">
                                      View All
                                      <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-person-falling-burst" /> Home
                        &amp; Garden
                        <span className="arrow">
                          <i className="fa-solid fa-angle-right" />
                        </span>
                      </Link>
                      <ul className="dropdown-menu fasion-dropdown-menu home-garden-dropdown dropdown-left">
                        <div className="row">
                          <div className="col-lg-6 ">
                            <div className="fasion-dropdown-menu-wapper dropdown-padding-style">
                              <h4>Furiture</h4>

                              <ul className="mb-20">
                                <li>
                                  <Link to="#">Sofas &amp; Couches</Link>
                                </li>
                                <li>
                                  <Link to="#"> Armchairs </Link>
                                </li>
                                <li>
                                  <Link to="#">Bad Frames </Link>
                                </li>
                                <li>
                                  <Link to="#">BedSide Tables </Link>
                                </li>
                                <li>
                                  <Link to="#">Dressing Tables</Link>
                                </li>
                                <li>
                                  <Link to="#">Chest of Drawers</Link>
                                </li>
                              </ul>
                              <h4>Home Accessories</h4>
                              <ul className="mb-20">
                                <li>
                                  <Link to="#">Decorative Accessories</Link>
                                </li>
                                <li>
                                  <Link to="#">Candle &amp; Holders</Link>
                                </li>
                                <li>
                                  <Link to="#">Home Fragrance</Link>
                                </li>
                                <li>
                                  <Link to="#">Mirror</Link>
                                </li>
                                <li>
                                  <Link to="#">Clock</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6 ">
                            <div className="fasion-dropdown-menu-wapper dropdown-padding-style">
                              <h4>Lighting</h4>
                              <ul className="mb-20">
                                <li>
                                  <Link to="#">Light Bules</Link>
                                </li>
                                <li>
                                  <Link to="#">Lamps </Link>
                                </li>
                                <li>
                                  <Link to="#">Ceiling LIghts</Link>
                                </li>
                                <li>
                                  <Link to="#">Wall Light </Link>
                                </li>
                                <li>
                                  <Link to="#">Bathroom Lighting</Link>
                                </li>
                                <li>
                                  <Link to="#">Outdoor Lighting</Link>
                                </li>
                              </ul>
                              <h4>Garden &amp; Outdoors</h4>
                              <ul className="mb-20">
                                <li>
                                  <Link to="#">Garden Furnitrues</Link>
                                </li>
                                <li>
                                  <Link to="#">Lawn Mowers</Link>
                                </li>
                                <li>
                                  <Link to="#">Pressure Washers</Link>
                                </li>
                                <li>
                                  <Link to="#">All Garden Tools</Link>
                                </li>
                                <li>
                                  <Link to="#">Barbecue </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-microphone" /> Music
                        <span className="arrow">
                          <i className="fa-solid fa-angle-right" />
                        </span>
                      </Link>
                      <ul className="dropdown-menu music-dropdown-menu  dropdown-left">
                        <div className="fasion-dropdown-menu-wapper">
                          <h4 className="text-white">Instrument</h4>

                          <ul className="mb-20">
                            <li>
                              <Link to="#">Guitar</Link>
                            </li>
                            <li>
                              <Link to="#">Drums Sets </Link>
                            </li>
                            <li>
                              <Link to="#">Prcussions </Link>
                            </li>
                            <li>
                              <Link to="#">Pedals &amp; Effects</Link>
                            </li>
                            <li>
                              <Link to="#">Sounds Equipments</Link>
                            </li>
                            <li>
                              <Link to="#">Piano &amp; Keybords</Link>
                            </li>
                            <li>
                              <Link to="#">Chest of Drawers</Link>
                            </li>
                          </ul>
                          <h4 className="text-white">Extra</h4>
                          <ul className="mb-20">
                            <li>
                              <Link to="#">Strings</Link>
                            </li>
                            <li>
                              <Link to="#">Records</Link>
                            </li>
                            <li>
                              <Link to="#">Amplifier </Link>
                            </li>
                            <li>
                              <Link to="#">Accessories</Link>
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-solid fa-baseball-bat-ball" /> Sports
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* main menu for pages */}

                <ul className="menu-secondary-menu">
                  {/* HomePage */}
                  <li>
                    
                    <NavLink to="/">Home</NavLink>
                  </li>
                  {/* CategoriesPage */}
                  <li className="dropdown">
                    <NavLink
                      to="/shop"
                      className="dropdown-toggle"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categories
                      <i className="fa-solid fa-chevron-down" />
                    </NavLink>
                    <ul className="dropdown-menu categories-dropdown-menu">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="categories-dropdown-menu-wapper">
                            <Link
                              className="categories-dropdown-menu-heading"
                              to="#"
                            >
                              Vatriations 1
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Full Width Banner</Link>
                              </li>
                              <li>
                                <Link to="#">No Sidebar Banner</Link>
                              </li>
                              <li>
                                <Link to="#">Infinite Ajax Scroll</Link>
                              </li>
                              <li>
                                <Link to="#">Hidden Filter</Link>
                              </li>
                              <li>
                                <Link to="#">Horizontal Filter</Link>
                              </li>
                              <li>
                                <Link to="#">Off Canvas Filter</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Image, Color Swatch
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Width Right Sidebar
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="categories-dropdown-menu-wapper">
                            <Link
                              className="categories-dropdown-menu-heading"
                              to="#"
                            >
                              Vatriations 2
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Quanitity Field</Link>
                              </li>
                              <li>
                                <Link to="#">3 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">4 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">5 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">6 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">7 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">8 Columns Mode </Link>
                              </li>
                              <li>
                                <Link to="#">Full Width Mode </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="categories-dropdown-menu-wapper">
                            <div className="categories-dropdown-img">
                              <img src={menuBanner} alt="menuBanner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </li>
                  {/* ProductPage */}
                  <li className="dropdown">
                    <NavLink
                      to="/product/Mens Cotton Jacket/3"
                      className="dropdown-toggle"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Product <i className="fa-solid fa-chevron-down" />
                    </NavLink>
                    <ul className="dropdown-menu product-dropdown-menu">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="categories-dropdown-menu-wapper">
                            <Link
                              className="categories-dropdown-menu-heading"
                              to="#"
                            >
                              Product Page
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Simple Product</Link>
                              </li>
                              <li>
                                <Link to="#">Variable Product</Link>
                              </li>
                              <li>
                                <Link to="#">Combo Product</Link>
                              </li>
                              <li>
                                <Link to="#">Countdown Sale</Link>
                              </li>
                              <li>
                                <Link to="#">With Customer Tab</Link>
                              </li>
                              <li>
                                <Link to="#">Frequently Together</Link>
                              </li>
                              <li>
                                <Link to="#">Advanced Review</Link>
                              </li>
                              <li>
                                <Link to="#">Add Cart Sticky</Link>
                              </li>
                              <li>
                                <Link to="#">Image Swatch</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Scattered Layout
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Video Thunbnail
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="categories-dropdown-menu-wapper">
                            <Link
                              className="categories-dropdown-menu-heading"
                              to="#"
                            >
                              PRODUCT lAYOUTS
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Extended Layout</Link>
                              </li>
                              <li>
                                <Link to="#">Grid Images</Link>
                              </li>
                              <li>
                                <Link to="#">Sticky Info</Link>
                              </li>
                              <li>
                                <Link to="#">Left &amp; Right Sticky</Link>
                              </li>
                              <li>
                                <Link to="#">Transparent images</Link>
                              </li>
                              <li>
                                <Link to="#">Center Vertical Thumb</Link>
                              </li>
                              <li>
                                <Link to="#">Center Full Gallery</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Haif Full Gallery
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Boxed Content <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  360 Degree <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Shipping Delivery
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="categories-dropdown-menu-wapper">
                            <Link
                              className="categories-dropdown-menu-heading"
                              to="#"
                            >
                              product Loop
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Full Block </Link>
                              </li>
                              <li>
                                <Link to="#">Quanitity input</Link>
                              </li>
                              <li>
                                <Link to="#">image Bottom</Link>
                              </li>
                              <li>
                                <Link to="#">Details On image</Link>
                              </li>
                              <li>
                                <Link to="#">Add To Card Link</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Box Hover Effects
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">Box Shadow Details</Link>
                              </li>
                              <li>
                                <Link to="#">Box Border </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Hidden Detils<span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Overlay Detils
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Button And Icon
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="categories-dropdown-menu-wapper">
                            <div className="categories-dropdown-img">
                              <img src={menuBanner2} alt="menuBanner2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </li>
                  {/* FeaturePage */}
                  <li className="dropdown">
                    <NavLink
                      to="/remain"
                      className="dropdown-toggle"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      features <i className="fa-solid fa-chevron-down" />
                    </NavLink>
                    <ul className="dropdown-menu feature-dropdown-menu dropdown-menu-end">
                      <div className="categories-dropdown-menu-wapper">
                        <Link
                          className="categories-dropdown-menu-heading"
                          to="#"
                        >
                          Product Page
                        </Link>
                        <ul>
                          <li>
                            <Link to="#">
                              Header Buider &amp; Types
                              <span className="tip ">NEW</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Templates Builder
                              <span className="tip ">NEW</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Display Condition
                              <span className="tip ">NEW</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Custom Product Layout
                              <span className="tip ">NEW</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Porto Studio <span className="tip ">NEW</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">What a New</Link>
                          </li>
                          <li>
                            <Link to="#">Top Performance</Link>
                          </li>
                          <li>
                            <Link to="#">Speed Optimize Wizard</Link>
                          </li>
                          <li>
                            <Link to="#">One Click Install Demo</Link>
                          </li>
                          <li>
                            <Link to="#">Single Page Navigation </Link>
                          </li>
                          <li>
                            <Link to="#">Live Search </Link>
                          </li>
                          <li>
                            <Link to="#">Skeleton Screens</Link>
                          </li>
                          <li>
                            <Link to="#">Mini Cart - Off Canvas </Link>
                            <span className="tip ">NEW</span>
                          </li>
                          <li>
                            <Link to="#"> More Features </Link>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </li>
                  {/* BlogPage */}
                  <li>
                    <NavLink to="/blog">blog</NavLink>
                  </li>
                  {/* AboutPage */}
                  <li>
                    <NavLink to="/about-us">about us</NavLink>
                  </li>
                  {/* ElementPage */}
                  <li>
                    <NavLink to="/remain">elements</NavLink>
                  </li>
                </ul>
              </div>
              <div className="buy-porto-wapper">
                <h3>
                  <Link to="#">Sell Now</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Header area */}
        {/* Mobile slider Header */}
        <div className="table-menu-serchbar">
          <div className="container">
            <div className="table-menu-serchbar-wapper">
              <span className="text">
                <input
                  name="search"
                  type="text"
                  defaultValue=""
                  placeholder="Search…"
                  autoComplete="off"
                />
              </span>
              <input type="hidden" name="post_type" defaultValue="product" />
              <span className="button-wrap">
                <button
                  className="btn btn-special mobil-btn"
                  title="Search"
                  type="submit"
                >
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            isToggled ? "m-sidebar-wrapper m-menu-active" : "m-sidebar-wrapper"
          }
          id="m-sidebar-wrapper"
        >
          <div className="searchform-fields m-sidebar-wrapper-input">
            <span className="text">
              <input
                name="search"
                type="text"
                defaultValue=""
                placeholder="Search…"
                autoComplete="off"
                className="porto-search-init"
              />
            </span>
            <span className="button-wrap">
              <button className="btn btn-special" title="Search" type="submit">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </span>
          </div>
          <div className="lawyer-details-wapper">
            <div className="lawyer-d-tab-wapper">
              <div className="lawyer-tab-menu">
                <ul>
                  <li>
                    <Link
                      to="#"
                      className={`lawyer-tab-a ${
                        activeTab === "overview" ? "lawyer-active-a" : ""
                      }`}
                      onClick={() => handleTabClick("overview")}
                      data-id="overview"
                    >
                      MAIN MENU
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className={`lawyer-tab-a ${
                        activeTab === "reviews" ? "lawyer-active-a" : ""
                      }`}
                      onClick={() => handleTabClick("reviews")}
                      data-id="reviews"
                    >
                      CATEGORIES
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lawyer-tab-container">
                <div
                  className={`lawyer-tab ${
                    activeTab === "overview" ? "lawyer-tab-active" : ""
                  }`}
                  data-id="overview"
                >
                  <div className="overview-dt-inner-wapper">
                    <ul>
                      {/* Mobile HomePage */}
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      {/* Mobile CategoriesPage */}
                      <li className="sub-menu-card">
                        <Link to="/shop">Categories</Link>
                        <div className="submenu-wapper">
                          <ul>
                            <li
                              className={
                                activeSubMenu === "variation1"
                                  ? "accordion active"
                                  : "accordion"
                              }
                              onClick={() => handleSubMenu("variation1")}
                            >
                              Variations 1
                            </li>
                            <div
                              className={
                                activeSubMenu === "variation1"
                                  ? "panel active"
                                  : "panel"
                              }
                            >
                              <li>
                                <Link to="#">Full Width Banner</Link>
                              </li>
                              <li>
                                <Link to="#">No Sidebar Banner</Link>
                              </li>
                              <li>
                                <Link to="#">Infinite Ajax Scroll</Link>
                              </li>
                              <li>
                                <Link to="#">Hidden Filter</Link>
                              </li>
                              <li>
                                <Link to="#">Horizontal Filter</Link>
                              </li>
                              <li>
                                <Link to="#">Off Canvas Filter</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Image, Color Swatch
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link className="border-0" to="#">
                                  Width Right Sidebar
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                            </div>
                            <li
                              className={
                                activeSubMenu === "variation2"
                                  ? "accordion border-0 active"
                                  : "accordion border-0"
                              }
                              onClick={() => handleSubMenu("variation2")}
                            >
                              Variations 2
                            </li>
                            <div
                              className={
                                activeSubMenu === "variation2"
                                  ? "panel active"
                                  : "panel"
                              }
                            >
                              <li>
                                <Link to="#">Quanitity Field</Link>
                              </li>
                              <li>
                                <Link to="#">3 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">4 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">5 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">6 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">7 Columns Mode</Link>
                              </li>
                              <li>
                                <Link to="#">8 Columns Mode </Link>
                              </li>
                              <li>
                                <Link className="border-0" to="#">
                                  Full Width Mode
                                </Link>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-card">
                        {/* mobile ProductPage */}
                        <Link to="/product/Mens Cotton Jacket/3">Products</Link>
                        <div className="submenu-wapper">
                          <ul>
                            <li
                              className={
                                activeSubMenu === "productPage"
                                  ? "accordion border-0 active"
                                  : "accordion border-0"
                              }
                              onClick={() => handleSubMenu("productPage")}
                            >
                              Product Pages
                            </li>
                            <div
                              className={
                                activeSubMenu === "productPage"
                                  ? "panel active"
                                  : "panel"
                              }
                            >
                              <li>
                                <Link to="#">Simple Product</Link>
                              </li>
                              <li>
                                <Link to="#">Variable Product</Link>
                              </li>
                              <li>
                                <Link to="#">Combo Product</Link>
                              </li>
                              <li>
                                <Link to="#">Countdown Sale</Link>
                              </li>
                              <li>
                                <Link to="#">With Customer Tab</Link>
                              </li>
                              <li>
                                <Link to="#">Frequently Together</Link>
                              </li>
                              <li>
                                <Link to="#">Advanced Review</Link>
                              </li>
                              <li>
                                <Link to="#">Add Cart Sticky</Link>
                              </li>
                              <li>
                                <Link to="#">Image Swatch</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Scattered Layout
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Video Thunbnail
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                            </div>
                            <li
                              className={
                                activeSubMenu === "productLayout"
                                  ? "accordion  active"
                                  : "accordion"
                              }
                              onClick={() => handleSubMenu("productLayout")}
                            >
                              Product Layouts
                            </li>
                            <div
                              className={
                                activeSubMenu === "productLayout"
                                  ? "panel active"
                                  : "panel"
                              }
                            >
                              <li>
                                <Link to="#">Extended Layout</Link>
                              </li>
                              <li>
                                <Link to="#">Grid Images</Link>
                              </li>
                              <li>
                                <Link to="#">Sticky Info</Link>
                              </li>
                              <li>
                                <Link to="#">Left &amp; Right Sticky</Link>
                              </li>
                              <li>
                                <Link to="#">Transparent images</Link>
                              </li>
                              <li>
                                <Link to="#">Center Vertical Thumb</Link>
                              </li>
                              <li>
                                <Link to="#">Center Full Gallery</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Haif Full Gallery
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Boxed Content <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  360 Degree <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Shipping Delivery
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                            </div>
                            <li
                              className={
                                activeSubMenu === "productLoop"
                                  ? "accordion border-0 active"
                                  : "accordion border-0"
                              }
                              onClick={() => handleSubMenu("productLoop")}
                            >
                              Product Loop
                            </li>
                            <div
                              className={
                                activeSubMenu === "productLoop"
                                  ? "panel active"
                                  : "panel"
                              }
                            >
                              <li>
                                <Link to="#">Full Block </Link>
                              </li>
                              <li>
                                <Link to="#">Quanitity input</Link>
                              </li>
                              <li>
                                <Link to="#">image Bottom</Link>
                              </li>
                              <li>
                                <Link to="#">Details On image</Link>
                              </li>
                              <li>
                                <Link to="#">Add To Card Link</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Box Hover Effects
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">Box Shadow Details</Link>
                              </li>
                              <li>
                                <Link to="#">Box Border </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Hidden Detils<span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Overlay Detils
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Button And Icon
                                  <span className="tip">NEW</span>
                                </Link>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </li>
                      {/* Mobile FeaturesPage */}
                      <li className="sub-menu-card">
                        <Link to="#">Features</Link>
                        <div className="submenu-wapper">
                          <ul>
                            <li
                              className={
                                activeSubMenu === "productPage2"
                                  ? "accordion border-0 active"
                                  : "accordion border-0"
                              }
                              onClick={() => handleSubMenu("productPage2")}
                            >
                              Product Pages
                            </li>
                            <div
                              className={
                                activeSubMenu === "productPage2"
                                  ? "panel active"
                                  : "panel"
                              }
                            >
                              <li>
                                <Link to="#">
                                  Header Buider &amp; Types
                                  <span className="tip ">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Templates Builder
                                  <span className="tip ">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Display Condition
                                  <span className="tip ">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Custom Product Layout
                                  <span className="tip ">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Porto Studio <span className="tip ">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">What a New</Link>
                              </li>
                              <li>
                                <Link to="#">Top Performance</Link>
                              </li>
                              <li>
                                <Link to="#">Speed Optimize Wizard</Link>
                              </li>
                              <li>
                                <Link to="#">One Click Install Demo</Link>
                              </li>
                              <li>
                                <Link to="#">Single Page Navigation </Link>
                              </li>
                              <li>
                                <Link to="#">Live Search </Link>
                              </li>
                              <li>
                                <Link to="#">Skeleton Screens</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Mini - Off Canvas
                                  <span className="tip ">NEW</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#"> More Features </Link>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </li>
                      {/* Mobile BlogPage */}
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Special Offer!</Link>
                      </li>
                      <li>
                        <Link to="#">Buy Now!</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main CATEGORIES MENU start */}
                <div
                  className={`lawyer-tab ${
                    activeTab === "reviews" ? "lawyer-tab-active" : ""
                  }`}
                  data-id="reviews"
                >
                  <div className="lawyer-reviews-details">
                    <div className="lawyer-reviews-row">
                      <div className="overview-dt-inner-wapper">
                        <ul>
                          <li className="sub-menu-card">
                            <Link to="#">
                              <i className="fa-solid fa-vest-patches" /> Fashion
                            </Link>
                            <div className="submenu-wapper">
                              <ul>
                                <li
                                  className={
                                    activeSubMenu === "fashionVar"
                                      ? "accordion active"
                                      : "accordion"
                                  }
                                  onClick={() => handleSubMenu("fashionVar")}
                                >
                                  Variations 1
                                </li>
                                <div
                                  className={
                                    activeSubMenu === "fashionVar"
                                      ? "panel active"
                                      : "panel"
                                  }
                                >
                                  <li
                                    className={
                                      activeSubOfSubMenu === "fashionWomen"
                                        ? "accordion active"
                                        : "accordion"
                                    }
                                    onClick={() =>
                                      handleSubOfSubMenu("fashionWomen")
                                    }
                                  >
                                    Woman
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "fashionWomen"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Tops &amp; Blouses</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Accessories</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dresses &amp; Skirts</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Shoes &amp; Boots
                                      </Link>
                                    </li>
                                  </div>
                                  <li
                                    className={
                                      activeSubOfSubMenu === "fashionMen"
                                        ? "accordion active"
                                        : "accordion"
                                    }
                                    onClick={() => handleSubOfSubMenu("fashionMen")}
                                  >
                                    Men
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "fashionMen"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Accessories</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Watch Fashion</Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        Teens, knits &amp; Polos
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Pants &amp; Denim
                                      </Link>
                                    </li>
                                  </div>
                                  <li
                                    className={
                                      activeSubOfSubMenu === "fashionKids"
                                        ? "accordion active border-0"
                                        : "accordion border-0"
                                    }
                                    onClick={() => handleSubOfSubMenu("fashionKids")}
                                  >
                                    Kids Fashion
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "fashionKids"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Casual Shoes</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Spring &amp; Autumn
                                      </Link>
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </li>
                          <li className="sub-menu-card">
                            <Link to="#">
                              <i className="fa-solid fa-bolt" /> Electronics
                            </Link>
                            <div className="submenu-wapper">
                              <ul>
                                <li
                                  className={
                                    activeSubMenu === "ElectronicVar"
                                      ? "accordion active border-0"
                                      : "accordion border-0"
                                  }
                                  onClick={() => handleSubMenu("ElectronicVar")}
                                >
                                  Variations 1
                                </li>
                                <div
                                  className={
                                    activeSubMenu === "ElectronicVar"
                                      ? "panel active"
                                      : "panel"
                                  }
                                >
                                  <li
                                    className={
                                      activeSubOfSubMenu === "ElectronicAcc"
                                        ? "accordion active "
                                        : "accordion"
                                    }
                                    onClick={() =>
                                      handleSubOfSubMenu("ElectronicAcc")
                                    }
                                  >
                                    Assessories
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "ElectronicAcc"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Cables &amp; Adapters</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Electronics</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Batteries</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Home Electronics</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Bags &amp; Cases
                                      </Link>
                                    </li>
                                  </div>
                                  <li
                                    className={
                                      activeSubOfSubMenu === "ElectronicCamera"
                                        ? "accordion active "
                                        : "accordion"
                                    }
                                    onClick={() =>
                                      handleSubOfSubMenu("ElectronicCamera")
                                    }
                                  >
                                    Camera &amp; Photo
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "ElectronicCamera"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Digital Cameras</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Camcorders</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Camera Drones</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Action Cameras</Link>
                                    </li>
                                    <li>
                                      <Link to="#">PHoto Supplies</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Camera &amp; Photo
                                      </Link>
                                    </li>
                                  </div>
                                </div>
                                <li
                                  className={
                                    activeSubMenu === "Electronicvar2"
                                      ? "accordion active "
                                      : "accordion"
                                  }
                                  onClick={() =>
                                    handleSubMenu("Electronicvar2")
                                  }
                                >
                                  Variations 2
                                </li>
                                <div
                                  className={
                                    activeSubMenu === "Electronicvar2"
                                      ? "panel active"
                                      : "panel"
                                  }
                                >
                                  <li
                                    className={
                                      activeSubOfSubMenu === "ElectronicAudio"
                                        ? "accordion active "
                                        : "accordion"
                                    }
                                    onClick={() =>
                                      handleSubOfSubMenu("ElectronicAudio")
                                    }
                                  >
                                    Audio &amp; Video
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "ElectronicAudio"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Televisions</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Tv Receivers</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Project</Link>
                                    </li>
                                    <li>
                                      <Link to="#">HDMI Project</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Audio Amplifier</Link>
                                    </li>
                                    <li>
                                      <Link to="#" className="border-0">
                                        Tv Stiks
                                      </Link>
                                    </li>
                                  </div>
                                  <li
                                    className={
                                      activeSubOfSubMenu === "ElectronicLaptops"
                                        ? "accordion active border-0"
                                        : "accordion border-0"
                                    }
                                    onClick={() =>
                                      handleSubOfSubMenu("ElectronicLaptops")
                                    }
                                  >
                                    Laptops
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "ElectronicLaptops"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Laptop Accessories</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Tablet Accessories</Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        Laptop Bags &amp; Cases
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">Gaming Laptops</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Ultraslim Laptops</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Tablets</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Pants &amp; Denim
                                      </Link>
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </li>
                          <li className="sub-menu-card">
                            <Link to="#">
                              <i className="fa-solid fa-gift" /> Gifts
                            </Link>
                            <div className="submenu-wapper">
                              <ul>
                                <li
                                  className={
                                    activeSubMenu === "giftsVar"
                                      ? "accordion active border-0"
                                      : "accordion border-0"
                                  }
                                  onClick={() => handleSubMenu("giftsVar")}
                                >
                                  Variations 1
                                </li>
                                <div
                                  className={
                                    activeSubMenu === "giftsVar"
                                      ? "panel active"
                                      : "panel"
                                  }
                                >
                                  <li
                                    className={
                                      activeSubOfSubMenu === "giftHim"
                                        ? "accordion active"
                                        : "accordion"
                                    }
                                    onClick={() => handleSubOfSubMenu("giftHim")}
                                  >
                                    For Him
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "giftHim"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Gifts For Husband</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Gifts For Dad</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Gifts for Boyfriend</Link>
                                    </li>
                                  </div>
                                  <li
                                    className={
                                      activeSubOfSubMenu === "giftKid"
                                        ? "accordion active"
                                        : "accordion"
                                    }
                                    onClick={() => handleSubOfSubMenu("giftKid")}
                                  >
                                    For Kids
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "giftKid"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Gifts For Boys</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Gifts for Girls</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Gifts for Tween Boys</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Action Cameras</Link>
                                    </li>
                                    <li>
                                      <Link to="#">PHoto Supplies</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Camera &amp; Photo
                                      </Link>
                                    </li>
                                  </div>
                                </div>
                                <li
                                  className={
                                    activeSubMenu === "giftvar2"
                                      ? "accordion active border-0"
                                      : "accordion border-0"
                                  }
                                  onClick={() => handleSubMenu("giftvar2")}
                                >
                                  Variations 2
                                </li>
                                <div
                                  className={
                                    activeSubMenu === "giftvar2"
                                      ? "panel active"
                                      : "panel"
                                  }
                                >
                                  <li
                                    className={
                                      activeSubOfSubMenu === "giftbirth"
                                        ? "accordion active"
                                        : "accordion"
                                    }
                                    onClick={() => handleSubOfSubMenu("giftbirth")}
                                  >
                                    Birthday
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "giftbirth"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Birthday for Him</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Birthday for Her</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Boyfriend Giftes</Link>
                                    </li>
                                  </div>
                                  <li
                                    className={
                                      activeSubOfSubMenu === "giftHer"
                                        ? "accordion active"
                                        : "accordion"
                                    }
                                    onClick={() => handleSubOfSubMenu("giftHer")}
                                  >
                                    For Her
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "giftHer"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Giftes for Girlsfrind</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Gifts for Wife</Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        Laptop Bags &amp; Cases
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Gifts for Mom
                                      </Link>
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </li>
                          <li className="sub-menu-card">
                            <Link to="#">
                              <i className="fa-solid fa-person-falling-burst" />
                              Home &amp; Garden
                            </Link>
                            <div className="submenu-wapper">
                              <ul>
                                <li
                                  className={
                                    activeSubMenu === "homeVar1"
                                      ? "accordion active border-0"
                                      : "accordion border-0"
                                  }
                                  onClick={() => handleSubMenu("homeVar1")}
                                >
                                  Variations 1
                                </li>
                                <div
                                  className={
                                    activeSubMenu === "homeVar1"
                                      ? "panel active"
                                      : "panel"
                                  }
                                >
                                  <li
                                    className={
                                      activeSubOfSubMenu === "homeFurn"
                                        ? "accordion active"
                                        : "accordion "
                                    }
                                    onClick={() => handleSubOfSubMenu("homeFurn")}
                                  >
                                    Furiture
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "homeFurn"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Sofas &amp; Couches</Link>
                                    </li>
                                    <li>
                                      <Link to="#"> Armchairs </Link>
                                    </li>
                                    <li>
                                      <Link to="#">Bad Frames </Link>
                                    </li>
                                    <li>
                                      <Link to="#">BedSide Tables </Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dressing Tables</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Chest of Drawers
                                      </Link>
                                    </li>
                                  </div>
                                  <li
                                    className={
                                      activeSubOfSubMenu === "homeAcces"
                                        ? "accordion active border-0"
                                        : "accordion border-0"
                                    }
                                    onClick={() => handleSubOfSubMenu("homeAcces")}
                                  >
                                    Home Accessories
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "homeAcces"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Decorative Accessories</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Candle &amp; Holders</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Home Fragrance</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Mirror</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Clock
                                      </Link>
                                    </li>
                                  </div>
                                </div>
                                <li
                                  className={
                                    activeSubMenu === "homeVar2"
                                      ? "accordion active"
                                      : "accordion"
                                  }
                                  onClick={() => handleSubMenu("homeVar2")}
                                >
                                  Variations 2
                                </li>
                                <div
                                  className={
                                    activeSubMenu === "homeVar2"
                                      ? "panel active"
                                      : "panel"
                                  }
                                >
                                  <li
                                    className={
                                      activeSubOfSubMenu === "homeLight"
                                        ? "accordion active"
                                        : "accordion"
                                    }
                                    onClick={() => handleSubOfSubMenu("homeLight")}
                                  >
                                    Lighting
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "homeLight"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Light Bules</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Lamps</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Ceiling LIghts</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Wall Lights</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Bathroom Lighting</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Outdoor Lighting</Link>
                                    </li>
                                  </div>
                                  <li
                                    className={
                                      activeSubOfSubMenu === "garden"
                                        ? "accordion active border-0"
                                        : "accordion border-0"
                                    }
                                    onClick={() => handleSubOfSubMenu("garden")}
                                  >
                                    Garden &amp; Outdoors
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "garden"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Garden Furnitrues </Link>
                                    </li>
                                    <li>
                                      <Link to="#">Lawn Mowers</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Pressure Washers</Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        All Garden Tools &amp; Equipment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Barbecue &amp; Outdoor Dining
                                      </Link>
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </li>
                          <li className="sub-menu-card">
                            <Link to="#">
                              <i className="fa-solid fa-microphone" /> Music
                            </Link>
                            <div className="submenu-wapper">
                              <ul>
                                <li
                                  className={
                                    activeSubMenu === "musicVar"
                                      ? "accordion active border-0"
                                      : "accordion border-0"
                                  }
                                  onClick={() => handleSubMenu("musicVar")}
                                >
                                  Variations 1
                                </li>
                                <div
                                  className={
                                    activeSubMenu === "musicVar"
                                      ? "panel active"
                                      : "panel"
                                  }
                                >
                                  <li
                                    className={
                                      activeSubOfSubMenu === "musicInstr"
                                        ? "accordion active"
                                        : "accordion"
                                    }
                                    onClick={() => handleSubOfSubMenu("musicInstr")}
                                  >
                                    Instrument
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "musicInstr"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Guitar</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Drums Sets</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Prcussions</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Pedals &amp; Effects</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Sounds Equipments</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Piano &amp; Keybords</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Chest of Drawers
                                      </Link>
                                    </li>
                                  </div>
                                  <li
                                    className={
                                      activeSubOfSubMenu === "musicExtra"
                                        ? "accordion active border-0"
                                        : "accordion border-0"
                                    }
                                    onClick={() => handleSubOfSubMenu("musicExtra")}
                                  >
                                    Extra
                                  </li>
                                  <div
                                    className={
                                      activeSubOfSubMenu === "musicExtra"
                                        ? "panel active"
                                        : "panel"
                                    }
                                  >
                                    <li>
                                      <Link to="#">Strings</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Records</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Amplifier</Link>
                                    </li>
                                    <li>
                                      <Link className="border-0" to="#">
                                        Accessories
                                      </Link>
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa-solid fa-baseball-bat-ball" />
                              Sports
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}
    </>
  );
};

export default Header;
