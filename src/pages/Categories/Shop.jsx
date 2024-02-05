import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filter from "./Filter";
import "../../style/categories.css";
import CategoriesPage from "./CategoriesPage";

import { ReactComponent as ListView } from "../../files/svg/listView.svg";
import { ReactComponent as GridView } from "../../files/svg/gridView.svg";
import { ReactComponent as HomeIcon } from "../../files/svg/homeIcon.svg";
import { useFilterContext } from "../../context/filter";

const Shop = () => {
  const [productListView, setProductListView] = useState(false);
  const [sortCate, setSortCate] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);

  const { categoryName } = useParams();

  const { clearFilter } = useFilterContext();

  const onChangeSort = (e) => {
    e.preventDefault();
    setSortCate(e.target.value);
  };

  const handleFilterSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  const handleClearFilter = () => {
    clearFilter();
  }

  useEffect(() => {
    document.title = "Categories - My Ecommerece App";
  }, []);

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
              <div className="col-12 col-lg-9">
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
                        <NavLink>High Quality</NavLink>
                      </li>
                      <li>
                        <NavLink>Easy to Use</NavLink>
                      </li>
                      <li>
                        <NavLink>High Price</NavLink>
                      </li>
                      <li>
                        <NavLink>Low Price</NavLink>
                      </li>
                      <li>
                        <NavLink>Comfortable</NavLink>
                      </li>
                      <li>
                        <NavLink>Fashion Design</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="categories-filter-right-box">
                    <Link to="#" onClick={handleClearFilter}>Clear All</Link> 
                  </div>
                </div>

                <div className="categories-filter-sort-container">
                  <div className="categories-sort-box">
                    <form>
                      <label
                        htmlFor="sortCategories"
                        className="d-none d-sm-inline"
                      >
                        Sort By:
                      </label>
                      <select
                        name="sortCategories"
                        onChange={onChangeSort}
                        value={sortCate}
                        id="sortCategories"
                      >
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
                      <label
                        htmlFor="showCategories"
                        className="d-none d-sm-inline"
                      >
                        Show:
                      </label>
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
                    <CategoriesPage
                      productListView={productListView}
                      sortCate={sortCate}
                    />
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

export default Shop;
