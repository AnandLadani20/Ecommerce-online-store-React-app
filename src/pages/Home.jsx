import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../style/home.css";
import Shared from "../utils/shared";
import productImg1 from "../files/img/01.jpg";
import productImg2 from "../files/img/jewelary.png";
import productImg3 from "../files/img/mensShirt.png";
import productImg4 from "../files/img/womenCl.png";
// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// axios fetch data
import Api from "../api/Api";
import productService from "../service/product.service";
import { useCartContext } from "../context/cart";
import { useWishlistContext } from "../context/wishlist";

const Home = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [totalProduct, setTotalProduct] = useState([]);

  useEffect(() => {
    fetchLimitedData();
    fetchAllData();
    fetchCategData();
  }, []);
  console.log("test");
  const fetchLimitedData = async () => {
    try {
      const response = await productService.limitedProduct();
      if (response) {
        setData1(response.data);
      }
    } catch (error) {
      alert("error", error.message);
    }
  };

  const fetchAllData = async () => {
    try {
      const response = await productService.getAllProduct();
      if (response) {
        setData2(response.data);
      }
    } catch (error) {
      alert("error", error.message);
    }
  };

  const fetchCategData = async () => {
    try {
      const response = await productService.categProduct();
      if (response) {
        setData3(response.data);
      }
    } catch (error) {
      alert("error", error.message);
    }
  };

  useEffect(() => {
    const fetchData4 = async () => {
      try {
        const response = await Api.get("/products/category/jewelery");
        const jeweleryData = response.data.length;

        const response2 = await Api.get("/products/category/electronics");
        const electronicsData = response2.data.length;

        const response3 = await Api.get("/products/category/men's clothing");
        const mensClothingData = response3.data.length;

        const response4 = await Api.get("/products/category/women's clothing");
        const womensClothingData = response4.data.length;

        setTotalProduct([
          electronicsData,
          jeweleryData,
          mensClothingData,
          womensClothingData,
        ]);
      } catch (error) {
        alert("error", error.message);
      }
    };
    fetchData4();
  }, []);

  const cartContext = useCartContext();

  const addToCart = (Item) => {
    cartContext.updateCart(Item);
  };

  const wishlistContext = useWishlistContext();
  const addToWishlist = (Item) => {
    wishlistContext.addWishlistCart(Item);
  };
  const productImg = [productImg1, productImg2, productImg3, productImg4];
  return (
    <>
      <Header />
      {/* Banner slider start */}
      <section className="banner-slider ">
        <div className="container-fluid p-0 position-relative">
          <Slider {...Shared.settings}>
            <div className="item">
              <div className="banner-wapper ">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-wapper-items-left ">
                      <h5>Find the Boundaries. Push Through!</h5>
                      <h3>Summer Sale</h3>
                      <h2>70% OFF</h2>
                      <div className="banner-wapper-items-left-btn">
                        <p>Starting At</p>
                        <Link to="#">
                          <sup>$</sup>199<sup>99</sup>
                        </Link>
                        <button>SHOP NOW!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="banner-wapper-right">
                <div className="row">
                  <div className="col-lg-7 d-none d-lg-block"> </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="banner-wapper-items-right">
                      <h5>EXTRA</h5>
                      <h2>70% OFF</h2>
                      <h3>ACCESSORIES</h3>
                      <h4>Summer Sale</h4>
                      <button>SHOP NOW!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Banner slider End */}

      {/* Banner Ads Start*/}
      <section className="bammer-ads">
        <div className="container">
          <div className="banner-ads-top">
            <Slider {...Shared.bannerAdsSet}>
              <div className="item">
                <div className="banner-ads-top-wapper ">
                  <div className="banner-ads-top-icon">
                    <i className="fa-solid fa-truck-fast" />
                  </div>
                  <div className="banner-ads-top-text">
                    <h3>FREE SHIPPING &amp; RETURN</h3>
                    <p>Free shipping on all over $99.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="banner-ads-top-wapper">
                  <div className="banner-ads-top-icon">
                    <i className="fa-solid fa-dollar-sign" />
                  </div>
                  <div className="banner-ads-top-text">
                    <h3>MONEY BACK GUARANTEE</h3>
                    <p>100% money back guarantee</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="banner-ads-top-wapper ">
                  <div className="banner-ads-top-icon">
                    <i className="fa-solid fa-envelope-open" />
                  </div>
                  <div className="banner-ads-top-text">
                    <h3>ONLINE SUPPORT 24/7</h3>
                    <p>Always dedicated team</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="banner-ads-bottom">
            <div className="row">
              <div className="col-lg-4 col-md-4 mb-20">
                <div className="banner-ads-bottom-left ">
                  <h2>Porto Watches</h2>
                  <div className="porto-container mb-4">
                    <h3 className="text-decoration-line-through">20%</h3>
                    <h4 className="heading-primery">30%</h4>
                    <h3 className="text-primary-line">OFF</h3>
                  </div>
                  <Link to="#">shop now</Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-20">
                <div className="banner-ads-bottom-center">
                  <div className="banner-ads-bottom-center-text">
                    <h2>DEAL PROMOS</h2>
                    <h3>STARTING AT $99</h3>
                  </div>
                  <Link to="#">Shop Now</Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-20">
                <div className="banner-ads-bottom-right">
                  <h2>Handbages</h2>
                  <h3>STARTING AT $99</h3>
                  <Link to="#">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Ads End*/}

      {/* FEATURED PRODUCTS Start  */}
      <section className="featured-products">
        <div className="container">
          <div className=" heading-middle-border-center">
            <h2 className="heading-tag">FEATURED PRODUCTS</h2>
          </div>
          <Slider {...Shared.featureProductSet}>
            {data1.map((prdctArr1) => {
              return (
                <>
                  <div className="item" key={prdctArr1.id}>
                    <div className="feauture-tb-item product-type-advanced">
                      <div className="page-wrapper">
                        <Link
                          to={`/product/${prdctArr1.title.replace("/", "")}/${
                            prdctArr1.id
                          }`}
                        >
                          <figure className="swap-on-hover">
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
                                to={`/product/${prdctArr1.title.replace(
                                  "/",
                                  ""
                                )}/${prdctArr1.id}`}
                              >
                                {prdctArr1.title.slice(0, 30)}
                              </Link>
                            </h3>
                            <Link
                              href="#"
                              className="featured-stars"
                              data-toggle="tooltip"
                              data-placement="top"
                              title={prdctArr1.rating.rate}
                              style={{ "--rating": `${prdctArr1.rating.rate}` }}
                            >
                              <span className="feature-tooltip">
                                {prdctArr1.rating.rate}
                              </span>
                            </Link>
                            <div className="featured-products-bottom-text">
                              <h4>${prdctArr1.price}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
      {/* FEATURED PRODUCTS End  */}

      {/* NEW ARRIVALS PRODUCTS Start  */}
      <section className="new-arrivals-products">
        <div className="container">
          <div className=" heading-middle-border-center">
            <h2 className="heading-tag">NEW ARRIVALS</h2>
          </div>
          <Slider {...Shared.featureProductSet}>
            {data2.slice(10, data2.length - 1).map((prdctArr2) => {
              return (
                <>
                  <div className="item" key={prdctArr2.id}>
                    <div className="feauture-tb-item product-type-advanced">
                      <div className="page-wrapper">
                        <Link
                          to={`/product/${prdctArr2.title.replace("/", "")}/${
                            prdctArr2.id
                          }`}
                        >
                          <figure className="swap-on-hover">
                            <img
                              className="swap-on-hover__front-image"
                              src={prdctArr2.image}
                              alt={prdctArr2.title}
                              loading="lazy"
                            />
                          </figure>
                        </Link>
                        <div className="tb-hover-content with-link">
                          <div
                            className="feauture-tb-woo-link overflow-hidden porto-tb-wishlist porto-gb-icon-top"
                            onClick={() => addToWishlist(prdctArr2)}
                          >
                            <i className="fa-regular fa-heart" />
                          </div>
                          <div className="feauture-tb-woo-link porto-gb-icon-bottom">
                            <i className="fa-solid fa-magnifying-glass" />
                          </div>
                          <div
                            className="feauture-tb-woo-link  feauture-gb-bottom"
                            onClick={() => addToCart(prdctArr2)}
                          >
                            <i className="fa-solid fa-arrow-right-long" />
                            ADD TO CART
                          </div>
                        </div>
                        <div className="featured-products-bottom">
                          <div className="featured-products-top-text">
                            <h5>
                              <Link to="#">{prdctArr2.category}</Link>
                            </h5>
                            <h3>
                              <Link
                                to={`/product/${prdctArr2.title.replace(
                                  "/",
                                  ""
                                )}/${prdctArr2.id}`}
                              >
                                {prdctArr2.title.slice(0, 30)}
                              </Link>
                            </h3>
                            <Link
                              href="#"
                              className="featured-stars"
                              data-toggle="tooltip"
                              data-placement="top"
                              title={prdctArr2.rating.rate}
                              style={{ "--rating": `${prdctArr2.rating.rate}` }}
                            >
                              <span className="feature-tooltip">
                                {prdctArr2.rating.rate}
                              </span>
                            </Link>
                            <div className="featured-products-bottom-text">
                              <h4>${prdctArr2.price}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
      {/* NEW ARRIVALS PRODUCTS End  */}

      {/* New Fashion Brands Start */}
      <section className="new-fasion">
        <div className="container">
          <div className="new-fasion-wapper">
            <div className="new-fasion-left-text">
              <h2>Big sales</h2>
              <h3>ALL NEW FASHION BRANDS ITEMS UP TO 70% OFF</h3>
              <p>Online Purchases Only</p>
            </div>
            <div className="new-fasion-wapper-btn">
              <Link to="#">view sale</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Fashion Brands End */}

      {/* Browse our Categories Start */}
      <section className="browse-our-categories">
        <div className="container">
          <div className="our-Categories heading-middle-border-center">
            <h2 className="heading-tag-browse">BROWSE OUR CATEGORIES</h2>
          </div>
          <Slider {...Shared.categoryProductSet}>
            {data3.map((prdctArr3, index) => {
              return (
                <div className="item" key={index}>
                  <div className="our-categories-img">
                    <Link to={`/shop/products/category/${prdctArr3}`}>
                      <img src={productImg[index]} alt="" loading="lazy" />
                    </Link>
                    <div className="our-categories-item">
                      <h4>{prdctArr3}</h4>
                      <p>{totalProduct[index]} PRODUCTS</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      {/* Browse our Categories End */}

      {/* Customer Support Start */}
      <section className="customer-support">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 mb-20">
              <div className="customer-support-wapper">
                <div className="customer-support-icon-top">
                  <i className="fa-solid fa-headphones" />
                </div>
                <div className="customer-support-center">
                  <h3>CUSTOMER SUPPORT</h3>
                  <p>You Won't Be Alone</p>
                </div>
                <div className="customer-support-bottom">
                  <p>
                    We really care about you and your website as much as you do.
                    Purchasing Porto or any other theme from us you get 100%
                    free support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-20">
              <div className="customer-support-wapper">
                <div className="customer-support-icon-top">
                  <i className="fa-regular fa-credit-card" />
                </div>
                <div className="customer-support-center">
                  <h3>FULLY CUSTOMIZABLE</h3>
                  <p>Tons Of Options</p>
                </div>
                <div className="customer-support-bottom">
                  <p>
                    With Porto you can customize the layout, colors and styles
                    within only a few minutes. Start creating an amazing website
                    right now!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-20">
              <div className="customer-support-wapper">
                <div className="customer-support-icon-top">
                  <i className="fa-solid fa-share" />
                </div>
                <div className="customer-support-center">
                  <h3>POWERFUL ADMIN</h3>
                  <p>Made To Help You</p>
                </div>
                <div className="customer-support-bottom">
                  <p>
                    Porto has very powerful admin features to help customer to
                    build their own shop in minutes without any special skills
                    in web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Support End */}

      {/* Top Fashion Start */}
      <section className="top-fashion">
        <div className="top-fashion-wapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4  col-md-4 mb-30">
                <div className="top-fashion-text ">
                  <h2>
                    TOP FASHION <br /> DEALS
                  </h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-3  mb-30">
                <div className="top-fashion-btn">
                  <Link to="#">view sale</Link>
                </div>
              </div>
              <div className="col-lg-5 col-md-5  mb-30">
                <div className="exclusive-coupon">
                  <h5>Exclusive COUPON</h5>
                  <div className="exclusive-coupon-items center-align">
                    <p>UP TO</p>
                    <h5>$100</h5>
                    <h6>OFF</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Fashion End */}

      {/* Latest News Start */}
      <section className="latest-news">
        <div className="container">
          <div className="latest-news-heading heading-middle-border-center">
            <h2 className="heading-tag-latest">latest news</h2>
          </div>
          <div className="row">
            {Shared.latestNewsArr.map((news) => {
              return (
                <div className="col-lg-3 col-md-4 mb-20" key={news.title}>
                  <div className="latest-news-wapper">
                    <div className="latest-news-img">
                      <Link to="#">
                        <img src={news.img} alt="" loading="lazy" />
                      </Link>
                    </div>
                    <div className="latest-news-img-date">
                      <p>{news.date}</p>
                      <span>{news.month}</span>
                    </div>
                    <div className="latest-news-text">
                      <h3>
                        <Link to="#">{news.title}</Link>
                      </h3>
                      <p>{news.desc}</p>
                      <span>
                        <Link to="#">{news.comment} Comment</Link>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="latest-news-border" />
        </div>
      </section>
      {/* Latest News End */}

      {/* comapny logo Start */}
      <section className="company-logo">
        <div className="container">
          <div className="row">
            {Shared.companyLogoArr.map((i) => {
              return (
                <div className="col-lg-2 col-md-4 col-6 mb-20">
                  <div className="company-logo-wapper">
                    <img src={i} alt={`logo-${i}`} loading="lazy" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="company-logo-border"></div>
        </div>
      </section>
      {/* comapny logo End */}

      <>
        {/* Products Start */}
        <section className="product">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 mb-20">
                <div className="product-wapper">
                  <div className="product-heading">
                    <h2>FEATURED PRODUCTS</h2>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {data2.slice(0, 3).map((p) => {
                        return (
                          <div key={p.id}>
                            <div className="row">
                              <div className="col-4 pr-0 mb-20">
                                <div className="product-img">
                                  <Link
                                    to={`/product/${p.title.replace("/", "")}/${
                                      p.id
                                    }`}
                                  >
                                    <figure className="product-swap-on-hover">
                                      <img
                                        className="product-swap-on-hover__front-image"
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                      />
                                      <img
                                        className="product-swap-on-hover__back-image"
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                      />
                                    </figure>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-8 pr-0 mb-20">
                                <div className="product-items-text">
                                  <p>
                                    <Link
                                      to={`/product/${p.title.replace(
                                        "/",
                                        ""
                                      )}/${p.id}`}
                                    >
                                      {p.title.slice(0, 20)}...
                                    </Link>
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
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-20">
                <div className="product-wapper">
                  <div className="product-heading">
                    <h2>BEST SELLING PRODUCTS</h2>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {data2.slice(3, 6).map((p) => {
                        return (
                          <div key={p.id}>
                            <div className="row">
                              <div className="col-4 pr-0 mb-20">
                                <div className="product-img">
                                  <Link
                                    to={`/product/${p.title.replace("/", "")}/${
                                      p.id
                                    }`}
                                  >
                                    <figure className="product-swap-on-hover">
                                      <img
                                        className="product-swap-on-hover__front-image"
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                      />
                                      <img
                                        className="product-swap-on-hover__back-image"
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                      />
                                    </figure>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-8 pr-0 mb-20">
                                <div className="product-items-text">
                                  <p>
                                    <Link
                                      to={`/product/${p.title.replace(
                                        "/",
                                        ""
                                      )}/${p.id}`}
                                    >
                                      {p.title.slice(0, 20)}...
                                    </Link>
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
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-20">
                <div className="product-wapper">
                  <div className="product-heading">
                    <h2>LATEST PRODUCTS</h2>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {data2.slice(6, 9).map((p) => {
                        return (
                          <div key={p.id}>
                            <div className="row">
                              <div className="col-4 pr-0 mb-20">
                                <div className="product-img">
                                  <Link
                                    to={`/product/${p.title.replace("/", "")}/${
                                      p.id
                                    }`}
                                  >
                                    <figure className="product-swap-on-hover">
                                      <img
                                        className="product-swap-on-hover__front-image"
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                      />
                                      <img
                                        className="product-swap-on-hover__back-image"
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                      />
                                    </figure>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-8 pr-0 mb-20">
                                <div className="product-items-text">
                                  <p>
                                    <Link
                                      to={`/product/${p.title.replace(
                                        "/",
                                        ""
                                      )}/${p.id}`}
                                    >
                                      {p.title.slice(0, 20)}...
                                    </Link>
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
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-20">
                <div className="product-wapper">
                  <div className="product-heading">
                    <h2>TOP RATED PRODUCTS</h2>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {data2.slice(9, 12).map((p) => {
                        return (
                          <div key={p.id}>
                            <div className="row">
                              <div className="col-4 pr-0 mb-20">
                                <div className="product-img">
                                  <Link
                                    to={`/product/${p.title.replace("/", "")}/${
                                      p.id
                                    }`}
                                  >
                                    <figure className="product-swap-on-hover">
                                      <img
                                        className="product-swap-on-hover__front-image"
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                      />
                                      <img
                                        className="product-swap-on-hover__back-image"
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                      />
                                    </figure>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-8 pr-0 mb-20">
                                <div className="product-items-text">
                                  <p>
                                    <Link
                                      to={`/product/${p.title.replace(
                                        "/",
                                        ""
                                      )}/${p.id}`}
                                    >
                                      {p.title.slice(0, 20)}...
                                    </Link>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Products End */}
      </>

      {/* login form modal popup html start  */}

      {/* login form modal popup html end  */}
      <Footer />
    </>
  );
};

export default Home;
