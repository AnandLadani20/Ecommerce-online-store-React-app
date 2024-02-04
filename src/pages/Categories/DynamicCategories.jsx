import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filter from "./Filter";
import "../../style/categories.css";
import CategoriesPage from "./CategoriesPage";

import { ReactComponent as ListView } from "../../files/svg/listView.svg";
import { ReactComponent as GridView } from "../../files/svg/gridView.svg";
import { ReactComponent as HomeIcon } from "../../files/svg/homeIcon.svg";

const DynamicCategories = () => {
  const [productListView, setProductListView] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const { categoryName } = useParams();

  const handleFilterSideBar = () => {
    setShowSideBar((prev) => !prev);
  };
  return (
    <>
      <div
        className={
          showSideBar
            ? "categories-wrapper-container slide-right"
            : "categories-wrapper-container"
        }
      >
        <Header />
        <div className="main-categories-page-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs-menu-shop">
                  <ul>
                    <li>
                      <Link to="/">
                        <HomeIcon />
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-chevron-right"></i>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    {categoryName ? (
                      <>
                        <li>
                          <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                          <Link to="#">{categoryName}</Link>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
              <div
                className={
                  showSideBar
                    ? "filter-sidebar-overlay active"
                    : "filter-sidebar-overlay"
                }
                onClick={handleFilterSideBar}
              ></div>
              <div
                className={
                  showSideBar
                    ? "col-lg-3 filter-mobile-sidebar open"
                    : "col-lg-3 filter-mobile-sidebar"
                }
              >
                <div className="filter-left-sidebar">
                  <div
                    className="filter-sidebar-toggle"
                    onClick={handleFilterSideBar}
                  >
                    {showSideBar ? (
                      <i className="fa-solid fa-xmark"></i>
                    ) : (
                      <i className="fa-solid fa-sliders"></i>
                    )}
                  </div>

                  <div
                    className={
                      showSideBar
                        ? "filter-sidebar-content"
                        : "product-main-filter-wrap"
                    }
                  >
                    <Filter />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9 col-lg-9">
                <div className="categories-page-top">
                  <h5>Find the Boundaries. Push Through!</h5>
                  <h3>Summer Sale</h3>
                  <h2>30% OFF</h2>
                  <div className="categories-page-top-wapper">
                    <h4>Starting At</h4>
                    <h3>
                      <b>
                        <sup>$</sup>199<sup>99</sup>
                      </b>
                    </h3>
                    <h2>
                      <Link to="#">Get Yours!</Link>
                    </h2>
                  </div>
                </div>

                <div className="categories-filter-btns-container">
                  <div className="categories-filter-left-box">
                    <ul>
                      <li>
                        <NavLink to="#">High Quality</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Easy to Use</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">High Price</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Low Price</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Comfortable</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Fashion Design</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="categories-filter-right-box">
                    <Link>Clear All</Link>
                  </div>
                </div>

                <div className="categories-filter-sort-container">
                  <div className="categories-sort-box">
                    <form>
                      <label htmlFor="sortCategories">Sort By:</label>
                      <select name="sortCategories" id="sortCategories">
                        <option value="menu-order">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </form>
                  </div>
                  <div className="categories-show-box">
                    <form>
                      <label htmlFor="showCategories">Show:</label>
                      <select name="showCategories" id="showCategories">
                        <option value="Default">Default</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                      </select>
                    </form>
                    <div className="product-view-box">
                      <div
                        className={
                          productListView
                            ? "product-gridIcon-box"
                            : "product-gridIcon-box active"
                        }
                        onClick={() => setProductListView(false)}
                      >
                        <GridView />
                      </div>
                      <div
                        className={
                          productListView
                            ? "product-listIcon-box active"
                            : "product-listIcon-box"
                        }
                        onClick={() => setProductListView(true)}
                      >
                        <ListView />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-listing-preview">
                  <div className="row">
                    <CategoriesPage productListView={productListView} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DynamicCategories;
