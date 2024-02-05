import React, { useState, useEffect, memo } from "react";
import { Link, useParams } from "react-router-dom";
import "../../style/categories.css";
import GridSkeleton from "./GridSkeleton";
import ListSkeleton from "./ListSkeleton";
import { useFilterContext } from "../../context/filter";

import { ReactComponent as ShopBagIcn } from "../../files/svg/shopBag.svg";
import { useCartContext } from "../../context/cart";
import { useWishlistContext } from "../../context/wishlist";

const CategoriesPage = ({ productListView }) => {
  const { fetchAllProduct, filteredProductDatas } = useFilterContext();
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 6;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  console.log("filterProd", filteredProductDatas);
  const records = filteredProductDatas.slice(firstIndex, lastIndex);
  console.log("records", records, filteredProductDatas);
  const nPages = Math.ceil(filteredProductDatas.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const cartContext = useCartContext();
  const wishlistContext = useWishlistContext();

  const addToWishlist = (Item) => {
    wishlistContext.addWishlistCart(Item);
  };
  const addToCart = (Item) => {
    cartContext.updateCart(Item);
  };

  const handleChangePage = (n) => {
    setCurrentPage(n);
  };
  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const { categoryName } = useParams();

  useEffect(() => {
    fetchAllProduct(categoryName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);
  // price

  return (
    <>
      <>
        {productListView ? (
          <>
            <div className="col-12">
              <div className="cate-product-listview">
                {!records.length ? (
                  <ListSkeleton />
                ) : (
                  <>
                    {records.map((prdctArr1) => {
                      return (
                        <>
                          <ListView
                            prdctArr1={prdctArr1}
                            addToWishlist={() => addToWishlist(prdctArr1)}
                            addToCart={() => addToCart(prdctArr1)}
                          />
                        </>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {!records.length ? (
              <GridSkeleton />
            ) : (
              <>
                {records.map((prdctArr1) => {
                  return (
                    <>
                      <GridView
                        prdctArr1={prdctArr1}
                        addToWishlist={() => addToWishlist(prdctArr1)}
                        addToCart={() => addToCart(prdctArr1)}
                      />
                    </>
                  );
                })}
              </>
            )}
          </>
        )}
      </>

      <div className="col-12 pt-3">
        <hr />
      </div>
      <div className="col-12 col-md-12">
        <div className="categories-pagination-box">
          <ul>
            <li onClick={handlePrevPage}>
              <i className="fa-solid fa-chevron-left"></i>{" "}
            </li>

            {numbers.map((n, i) => {
              return (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                  onClick={() => handleChangePage(n)}
                >
                  {n}
                </li>
              );
            })}
            <li onClick={handleNextPage}>
              <i className="fa-solid fa-chevron-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default memo(CategoriesPage);

const GridView = ({ prdctArr1, addToWishlist, addToCart }) => (
  <>
    <div className="col-6 col-sm-4 col-lg-4 pb-2 px-2 px-md-2 px-lg-3">
      <div className="item" key={prdctArr1.id}>
        <div className="feauture-tb-item product-type-advanced">
          <div className="page-wrapper">
            <Link
              to={`/product/${prdctArr1.title.replace("/", "")}/${
                prdctArr1.id
              }`}
            >
              <figure className="swap-on-hover img-thumbnail">
                <img
                  className="swap-on-hover__front-image"
                  src={prdctArr1.image}
                  alt={prdctArr1.title}
                  loading="lazy"
                />
              </figure>
            </Link>
            <div className="tb-hover-content with-link">
              <div
                className="feauture-tb-woo-link overflow-hidden porto-tb-wishlist porto-gb-icon-top"
                onClick={() => addToWishlist(prdctArr1)}
              >
                <i className="fa-regular fa-heart" />
              </div>
              <div className="feauture-tb-woo-link porto-gb-icon-bottom">
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <div
                onClick={() => addToCart(prdctArr1)}
                className="feauture-tb-woo-link  feauture-gb-bottom"
              >
                <i className="fa-solid fa-arrow-right-long" />
                ADD TO CART
              </div>
            </div>
            <div className="featured-products-bottom">
              <div className="featured-products-top-text">
                <h5>
                  <Link to="#">{prdctArr1.category}</Link>
                </h5>
                <h3>
                  <Link
                    to={`/product/${prdctArr1.title.replace("/", "")}/${
                      prdctArr1.id
                    }`}
                  >
                    {prdctArr1.title.slice(0, 30)}
                  </Link>
                </h3>
                <Link
                  href="#"
                  className="featured-stars"
                  data-toggle="tooltip"
                  data-placement="top"
                  title={prdctArr1?.rating.rate}
                  style={{
                    "--rating": `${prdctArr1?.rating.rate}`,
                  }}
                >
                  <span className="feature-tooltip">
                    {prdctArr1?.rating.rate}
                  </span>
                </Link>
                <div className="featured-products-bottom-text">
                  <h4>${prdctArr1?.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const ListView = ({ prdctArr1, addToWishlist, addToCart }) => (
  <>
    <div className="row align-items-center pb-3">
      <div className="col-12 col-sm-4">
        <div className="cate-product-listview-imgbox">
          <Link
            to={`/product/${prdctArr1.title.replace("/", "")}/${prdctArr1.id}`}
          >
            <img src={prdctArr1.image} alt={prdctArr1.title} loading="lazy" />
          </Link>
        </div>
      </div>
      <div className="col-12 col-sm-8 py-3 py-sm-0">
        <div className="cate-product-listview-details">
          <p className="product-cate-content">{prdctArr1.category}</p>
          <h5
            className="product-title-content"
            to={`/product/${prdctArr1.title.replace("/", "")}/${prdctArr1.id}`}
          >
            {prdctArr1.title}
          </h5>
          <Link
            href="#"
            className="featured-stars"
            data-toggle="tooltip"
            data-placement="top"
            title={prdctArr1?.rating.rate}
            style={{
              "--rating": `${prdctArr1?.rating.rate}`,
            }}
          >
            <span className="feature-tooltip">{prdctArr1?.rating.rate}</span>
          </Link>
          <p className="cate-product-desc">
            {prdctArr1.description.slice(0, 140)}...
          </p>
          <h5 className="cate-product-price">${prdctArr1.price}</h5>
          <div className="listview-prdct-feature">
            <ul>
              <li onClick={() => addToCart(prdctArr1)}>
                <ShopBagIcn /> ADD TO CART
              </li>
              <li onClick={() => addToWishlist(prdctArr1)}>
                <i className="fa-regular fa-heart" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);
