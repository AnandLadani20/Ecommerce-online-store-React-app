import React, { useState, useEffect, memo } from "react";
import OriginalSlider from "react-slider";
import Shared from "../../utils/shared";
import { NavLink, Link } from "react-router-dom";
import productService from "../../service/product.service";
import { toast } from "react-toastify";

// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCarousel from "react-slick";
import { useFilterContext } from "../../context/filter";

let MINPR = 5;
let MAXPR = 1000;
const Filter = () => {
  const { setPrice, handlePriceFilter, setColorValue, handleColorFilter } =
    useFilterContext();
  const [priceValues, setPriceValues] = useState([MINPR, MAXPR]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getAllProduct();
        if (response) {
          setFeaturedData(response.data);
        }
      } catch (err) {
        toast.error(err);
      }
    };

    fetchProducts();
    // console.log("useEffect render")
  }, []);

  const colorOptions = ["#000000", "#0088cc", "#ab6e6e", "#fff", "#777"];
  const sizeOptions = ["XL", "L", "M", "S"];

  const handleSelectColor = (color) => {
    setSelectedColor((prev) => {
      const isColorSelected = prev.includes(color);

      if (isColorSelected) {
        // If the color is already selected, remove it from the array
        const updatedColors = prev.filter(
          (selectedColor) => selectedColor !== color
        );
        return [...updatedColors];
      } else {
        return [...prev, color];
      }
    });
    //  console.log("handleSelectColor render")
  };

  const handleSelectSizes = (size) => {
    setSelectedSize((prev) => {
      const isSizeSelected = prev.includes(size);
      if (isSizeSelected) {
        const updatedSizes = prev.filter(
          (selectedSize) => selectedSize !== size
        );
        return [...updatedSizes];
      } else {
        return [...prev, size];
      }
    });
    // console.log("handleSelectSizes render")
  };

  useEffect(() => {
    setPrice([]);
    setColorValue(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedColor.length > 0) {
      handleColorFilter(selectedColor);
    } else {
      handleColorFilter(null);
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor]);

  console.log("filterPage");

  return (
    <>
      <aside>
        <div className="category-filter-box">
          <div className="filter-title-common-box">
            <h5>CATEGORIES</h5>
            <p
              data-target="#collapseCategories"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseCategories"
            >
              <i className="fa-solid fa-plus"></i>
            </p>
          </div>

          <ul className="collapse show" id="collapseCategories">
            <li className="filter-title-common-list">
              <NavLink to={`/shop/products/category/men's clothing`}>
                Men (5)
              </NavLink>
              <p
                data-target="#collapseAccessories"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseAccessories"
              >
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </li>
            <ul className="collapse" id="collapseAccessories">
              <li className="filter-title-common-childlist">
                <NavLink>Caps (3)</NavLink>
              </li>
              <li className="filter-title-common-childlist">
                <NavLink>Watches (4)</NavLink>
              </li>
            </ul>
            <li className="filter-title-common-list">
              <NavLink to={`/shop/products/category/women's clothing`}>
                Women (7)
              </NavLink>
              <p
                data-target="#collapseClothing"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseClothing"
              >
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </li>
            <ul className="collapse" id="collapseClothing">
              <li className="filter-title-common-childlist">
                <NavLink>Hoodies (2)</NavLink>
              </li>
            </ul>
            <li className="filter-title-common-list">
              <NavLink to={`/shop/products/category/electronics`}>
                Electronics (3)
              </NavLink>
              <p
                data-target="#collapseElectronics"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseElectronics"
              >
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </li>
            <ul className="collapse" id="collapseElectronics">
              <li className="filter-title-common-childlist">
                <NavLink>Headphone (1)</NavLink>
              </li>
              <li className="filter-title-common-childlist">
                <NavLink>Toys (2)</NavLink>
              </li>
            </ul>
            <li className="filter-title-common-list">
              <NavLink to={`/shop/products/category/jewelery`}>
                Jewelery (7)
              </NavLink>
              <p
                data-target="#collapseFashion"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseFashion"
              >
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </li>
            <ul className="collapse" id="collapseFashion">
              <li className="filter-title-common-childlist">
                <NavLink>Shoes (2)</NavLink>
              </li>
              <li className="filter-title-common-childlist">
                <NavLink>T-Shirts (4)</NavLink>
              </li>
            </ul>
            <li className="filter-title-common-list">
              <NavLink>Accessories (8)</NavLink>
              <p
                data-target="#collapseFashion"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseFashion"
                style={{ visibility: "hidden" }}
              >
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </li>
            <li className="filter-title-common-list">
              <NavLink>Music (2)</NavLink>
              <p
                data-target="#collapseFashion"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseFashion"
                style={{ visibility: "hidden" }}
              >
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </li>
            <li className="filter-title-common-list">
              <NavLink>Clothing (6)</NavLink>
              <p
                data-target="#collapseFashion"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseFashion"
                style={{ visibility: "hidden" }}
              >
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </li>
          </ul>
        </div>
      </aside>
      <aside>
        <div className="price-filter-box">
          <div className="filter-title-common-box">
            <h5>PRICE</h5>
            <p
              data-target="#collapsePrice"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapsePrice"
            >
              <i className="fa-solid fa-plus"></i>
            </p>
          </div>
          <ul className="collapse show" id="collapsePrice">
            <li>
              <div className="price-slider-wrapper">
                <OriginalSlider
                  className={"slider"}
                  onChange={setPriceValues}
                  value={priceValues}
                  min={MINPR}
                  max={MAXPR}
                />
                <div className="filter-price-show">
                  <div className="price_label">
                    Price: <span className="from">${priceValues[0]}</span> —
                    <span className="to">${priceValues[1]}</span>
                  </div>
                  <div className="price_button">
                    <button
                      type="button"
                      className="button"
                      onClick={() => handlePriceFilter(priceValues)}
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <aside>
        <div className="color-filter-box">
          <div className="filter-title-common-box">
            <h5>COLOR</h5>
            <p
              data-target="#collapseColor"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseColor"
            >
              <i className="fa-solid fa-plus"></i>
            </p>
          </div>
          <div className="collapse show" id="collapseColor">
            <ul className="color-box-style">
              {colorOptions.map((color) => {
                return (
                  <li
                    style={{
                      border: selectedColor.includes(color)
                        ? "1px solid black"
                        : "none",
                    }}
                  >
                    <Link
                      t="#"
                      className={`filter-color`}
                      data-value={color}
                      style={{ backgroundColor: `${color}` }}
                      onClick={() => handleSelectColor(color)}
                    ></Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
      <aside>
        <div className="size-filter-box">
          <div className="filter-title-common-box">
            <h5>SIZES</h5>
            <p
              data-target="#collapseSizes"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseSizes"
            >
              <i className="fa-solid fa-plus"></i>
            </p>
          </div>
          <div className="collapse show" id="collapseSizes">
            <ul className="size-box-style">
              {sizeOptions.map((size) => {
                return (
                  <li className={selectedSize?.includes(size) ? "active" : ""}>
                    <Link
                      t="#"
                      className={`filter-size ${
                        selectedSize?.includes(size) ? "enabled" : "disabled"
                      }`}
                      data-value={size}
                      onClick={() => handleSelectSizes(size)}
                    >
                      {size.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
      <aside>
        <div className="featured-filter-box">
          <div className="filter-title-common-box">
            <h5>FEATURED</h5>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <SlickCarousel {...Shared.shopFeatured}>
                <div className="item">
                  {featuredData.slice(0, 3).map((p) => {
                    return (
                      <div key={p.id}>
                        <div className="row">
                          <div className="col-4 pr-0 mb-20">
                            <div className="product-img">
                              <figure className="product-swap-on-hover">
                                <img
                                  className="product-swap-on-hover__front-image"
                                  src={p.image}
                                  alt={p.title}
                                />
                                <img
                                  className="product-swap-on-hover__back-image"
                                  src={p.image}
                                  alt={p.title}
                                />
                              </figure>
                            </div>
                          </div>
                          <div className="col-8 pr-0 mb-20">
                            <div className="product-items-text">
                              <p>
                                <Link tp="#">{p.title.slice(0, 16)}...</Link>
                              </p>
                              <Link
                                href="#"
                                className="product-stars"
                                title={p.rating.rate}
                                style={{
                                  "--rating": `${p.rating.rate}`,
                                }}
                              >
                                <span className="product-stars-tooltip">
                                  {p.rating.rate}
                                </span>
                              </Link>
                              <span>${p.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="item">
                  {featuredData.slice(3, 6).map((p) => {
                    return (
                      <div key={p.id}>
                        <div className="row">
                          <div className="col-4 pr-0 mb-20">
                            <div className="product-img">
                              <figure className="product-swap-on-hover">
                                <img
                                  className="product-swap-on-hover__front-image"
                                  src={p.image}
                                  alt={p.title}
                                />
                                <img
                                  className="product-swap-on-hover__back-image"
                                  src={p.image}
                                  alt={p.title}
                                />
                              </figure>
                            </div>
                          </div>
                          <div className="col-8 pr-0 mb-20">
                            <div className="product-items-text">
                              <p>
                                <Link tp="#">{p.title.slice(0, 16)}...</Link>
                              </p>
                              <Link
                                href="#"
                                className="product-stars"
                                title={p.rating.rate}
                                style={{
                                  "--rating": `${p.rating.rate}`,
                                }}
                              >
                                <span className="product-stars-tooltip">
                                  {p.rating.rate}
                                </span>
                              </Link>
                              <span>${p.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SlickCarousel>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default memo(Filter);
