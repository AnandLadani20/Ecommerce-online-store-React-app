import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../style/product.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import productService from "../../service/product.service";
import { useCartContext } from "../../context/cart";
import ReactImageZoom from "react-image-zoom";
// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Shared from "../../utils/shared.js";
import { useWishlistContext } from "../../context/wishlist.jsx";
import { ReactComponent as HomeIcon } from "../../files/svg/homeIcon.svg";
import sizeGuide from "../../files/img/size_guide.png";

const ColorOption = ({ color, selectedColor, onClick }) => (
  <li style={{ border: selectedColor === color ? "1px solid black" : "none" }}>
    <Link
      t="#"
      className={`filter-color`}
      data-value={color}
      style={{ backgroundColor: `${color}` }}
      onClick={() => onClick(color)}
    ></Link>
  </li>
);

const SizeOption = ({ size, selectedSize, onClick }) => (
  <li className={selectedSize === size ? "active" : ""}>
    <Link
      t="#"
      className={`filter-item ${
        selectedSize === size ? "enabled" : "disabled"
      }`}
      data-value={size}
      onClick={() => onClick(size)}
    >
      {size.toUpperCase()}
    </Link>
  </li>
);

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [productData, setProductData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndexData, setCurrentIndexData] = useState(null);
  const [activeTab, setActiveTab] = useState("desc");
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleClear = () => {
    setSelectedColor("");
    setSelectedSize("");
  };

  const colorOptions = ["#000000", "#0088cc", "#ab6e6e"];
  const sizeOptions = ["XL", "L", "M", "S"];

  const { productId } = useParams();

  const navigate = useNavigate();

  const fetchProductData = async () => {
    try {
      const response = await productService.getAllProduct();
      if (response) {
        setProductData(response.data);
      }
    } catch (error) {
      alert("error", error.message);
    }
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    const currentIndex = getProductIndex;
    setCurrentIndexData(productData[currentIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, productData]);

  const getProductIndex = productData.findIndex(
    (product) => product.id === Number(productId)
  );

  const handleNextProduct = () => {
    try {
      const currentIndex = getProductIndex;
      const nextIndex = (currentIndex + 1) % productData.length;
      if (nextIndex < productData.length) {
        const nextProduct = productData[nextIndex];
        // setCurrentIndexData(nextProduct);
        navigate(
          `/product/${nextProduct.title.replace("/", "")}/${nextProduct.id}`
        );
      }
    } catch (error) {
      console.error("Error fetching next product:", error);
    }
  };

  const handlePrevProduct = async () => {
    try {
      const currentIndex = getProductIndex;
      const prevIndex =
        (currentIndex - 1 + productData.length) % productData.length;
      console.log(prevIndex, "prevIndex");
      if (prevIndex >= 0) {
        const prevProduct = productData[prevIndex];
        // setCurrentIndexData(prevProduct);
        navigate(
          `/product/${prevProduct.title.replace("/", "")}/${prevProduct.id}`
        );
      }
    } catch (error) {
      console.error("Error fetching previous product:", error);
    }
  };

  const { updateCart } = useCartContext();

  const addToCart = (product) => {
    const newobj = {
      quantity: quantity,
    };
    const data = { ...product, ...newobj };
    updateCart(data);
  };

  const onDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onIncrement = () => {
    setQuantity(quantity + 1);
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        setContainerWidth(width);
      }
    };

    // Initial update
    updateContainerWidth();

    window.addEventListener("resize", updateContainerWidth);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  const { addWishlistCart } = useWishlistContext();

  const addTowishlist = (prdt) => {
    const newobj = {
      quantity: quantity,
    };
    const data = { ...prdt, ...newobj };
    addWishlistCart(data);
  };

  useEffect(() => {
    if (slider1.current && slider2.current) {
      slider1.current.slickGoTo(2);
    }
  }, []);

  const handleShowContent = (val) => {
    setActiveTab(val);
  };

  const handleToggleContent = (val) => {
    setActiveTab((prevVal) => (prevVal === val ? null : val));
  };

  useEffect(() => {
    document.title = "Products - My Ecommerece App";
  }, []);

  return (
    <>
      <Header />
      <div className="main-dynamic-product-page">
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
                  {currentIndexData ? (
                    <>
                      <li>
                        <i className="fa-solid fa-chevron-right"></i>
                      </li>
                      <li>
                        <Link to="#">{currentIndexData.title}</Link>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <Slider
                {...Shared.productImage}
                asNavFor={slider2.current}
                ref={slider1}
              >
                <div className="itemImage">
                  <div
                    className="product-img-privew-container"
                    ref={containerRef}
                  >
                    <ReactImageZoom
                      width={containerWidth}
                      height={350}
                      zoomPosition="original"
                      img={`${currentIndexData?.image}`}
                    />
                  </div>
                </div>
                <div className="itemImage">
                  <div
                    className="product-img-privew-container reverse-product-image"
                    ref={containerRef}
                  >
                    <ReactImageZoom
                      width={containerWidth}
                      height={350}
                      zoomPosition="original"
                      img={`${currentIndexData?.image}`}
                      style={{ transform: "scaleX(-1) !important" }}
                    />
                  </div>
                </div>
              </Slider>
              <div className="product-img-thumbnails-slide">
                <Slider
                  {...Shared.productThumbnails}
                  asNavFor={slider1.current}
                  ref={slider2}
                >
                  <div className="item">
                    <div className="product-img-thumbnails-container">
                      <img
                        src={currentIndexData?.image}
                        alt={currentIndexData?.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="product-img-thumbnails-container">
                      <img
                        src={currentIndexData?.image}
                        alt={currentIndexData?.title}
                        loading="lazy"
                        style={{ transform: "scaleX(-1)" }}
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-7">
              <div className="product-details-show-container">
                <div className="product-heading-wrapper-area">
                  <div className="product-title-wrapper">
                    <h2>{currentIndexData?.title}</h2>
                    <div className="product-reviews-show">
                      <Link
                        t="#"
                        className="featured-stars"
                        data-toggle="tooltip"
                        data-placement="top"
                        title={currentIndexData?.rating?.rate}
                        style={{
                          "--rating": `${currentIndexData?.rating?.rate}`,
                        }}
                      >
                        <span className="feature-tooltip">
                          {currentIndexData?.rating?.rate}
                        </span>
                      </Link>
                      <p>10 Customer reviews</p>
                      <p>|</p>
                      <p>Add a review</p>
                    </div>
                    <div className="product-price-box">
                      ${currentIndexData?.price}
                    </div>
                  </div>
                  <div className="product-stepper-area">
                    <div
                      className="product-previos-btn-box"
                      onClick={handlePrevProduct}
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div
                      className="product-next-btn-box"
                      onClick={handleNextProduct}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className="product-description-wrapper-area">
                  <p>{currentIndexData?.description}</p>
                  <div className="wpb_custom_0">
                    <div className="product_meta">
                      <span className="sku_wrapper">
                        SKU: <span className="sku">N/A</span>
                      </span>

                      <span className="posted_in">
                        Categories:
                        <Link to="#"> {currentIndexData?.category}</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-summary-wrap">
                  <table className="variations" cellSpacing="0">
                    <tbody>
                      <tr>
                        <th className="label">Color:</th>
                        <td className="value">
                          <ul
                            className="filter-item-list"
                            data-name="attribute_pa_color"
                          >
                            {colorOptions.map((color) => (
                              <ColorOption
                                key={color}
                                color={color}
                                selectedColor={selectedColor}
                                onClick={handleColorClick}
                              />
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th className="label">Size:</th>
                        <td className="value">
                          <ul
                            className="filter-Sizeitem-list"
                            data-name="attribute_pa_size"
                          >
                            {sizeOptions.map((size) => (
                              <SizeOption
                                key={size}
                                size={size}
                                selectedSize={selectedSize}
                                onClick={handleSizeClick}
                              />
                            ))}
                          </ul>
                          <Link
                            className="reset_variations"
                            t="#"
                            style={{ visibility: "visible" }}
                            onClick={handleClear}
                          >
                            Clear
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <button onClick={logSelections}>Log Selections</button> */}
                </div>
                <div className="product-add-item-cart-box">
                  <div className="cart-product-quantity">
                    <div className="quantity-decrement" onClick={onDecrement}>
                      -
                    </div>
                    <div className="quantity">{quantity}</div>
                    <div className="quantity-increment" onClick={onIncrement}>
                      +
                    </div>
                  </div>
                  <div className="add-to-cart-btn">
                    <button onClick={() => addToCart(currentIndexData)}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="product-share-smd">
                  <div className="share-links">
                    <Link to="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-envelope"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa-brands fa-whatsapp"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-comment"></i>
                    </Link>
                  </div>
                  <div
                    className="product-add-wishlist"
                    onClick={() => addTowishlist(currentIndexData)}
                  >
                    <i className="fa-regular fa-heart" />
                    <span>ADD TO WISHLIST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Review */}
          <div className="row">
            <div className="col-12">
              <div className="product-review-box">
                <h5>Reviews Summary by AI:</h5>

                <h6>Summary:</h6>
                <p>
                  Chaoren Belt is a top notch leather belt with good quality,
                  nice looking with a good fit and reasonably priced.
                </p>

                <h6>Pros:</h6>
                <ul>
                  <li>- Nice leather material</li>
                  <li>- top notch leather</li>
                  <li>- stylish and functional</li>
                  <li>- good quality</li>
                  <li>- adjustable</li>
                  <li>- well made and reasonably priced.</li>
                </ul>

                <h6>Cons:</h6>
                <ul>
                  <li>- May be uncomfortable due to the thickness</li>
                  <li>- size may be too large</li>
                  <li>- plastic belts</li>
                  <li>- not available in USA.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="row">
            <div className="col-12">
              <div className="product-detail-tabs-container">
                <div className="product-title-tabs d-none d-md-block">
                  <ul>
                    <li
                      onClick={() => handleShowContent("desc")}
                      className={activeTab === "desc" ? "active-tab-style" : ""}
                    >
                      DESCRIPTION
                    </li>
                    <li
                      onClick={() => handleShowContent("sizeGuid")}
                      className={
                        activeTab === "sizeGuid" ? "active-tab-style" : ""
                      }
                    >
                      SIZE GUIDE
                    </li>
                    <li
                      onClick={() => handleShowContent("addInfo")}
                      className={
                        activeTab === "addInfo" ? "active-tab-style" : ""
                      }
                    >
                      ADDITIONAL INFORMATION
                    </li>
                  </ul>
                </div>
                <div className="product-tab-content-box">
                  <div
                    onClick={() => handleToggleContent("desc")}
                    className={
                      activeTab === "desc"
                        ? "product-accordin-tabStyle active-tab-style d-md-none"
                        : "product-accordin-tabStyle d-md-none"
                    }
                  >
                    DESCRIPTION
                  </div>
                  <div
                    className={
                      activeTab === "desc"
                        ? "product-description-tab active"
                        : "product-description-tab"
                    }
                  >
                    <p className="tab-common-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur
                      sed do, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat.
                    </p>
                    <ul>
                      <li>
                        <i className="desc-list-icon fa fa-check-circle"></i>
                        Any Product types that You want – Simple, Configurable
                      </li>
                      <li>
                        <i className="desc-list-icon fa fa-check-circle"></i>
                        Downloadable/Digital Products, Virtual Products
                      </li>
                      <li>
                        <i className="desc-list-icon fa fa-check-circle"></i>
                        Inventory Management with Backordered items
                      </li>
                    </ul>
                    <p className="tab-common-para mt-3">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div
                    onClick={() => handleToggleContent("sizeGuid")}
                    className={
                      activeTab === "sizeGuid"
                        ? "product-accordin-tabStyle active-tab-style d-md-none"
                        : "product-accordin-tabStyle d-md-none"
                    }
                  >
                    SIZE GUIDE
                  </div>
                  <div
                    className={
                      activeTab === "sizeGuid"
                        ? "product-sizeGuide-tab active"
                        : "product-sizeGuide-tab"
                    }
                  >
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <div className="product-sizeguide-img">
                          <img src={sizeGuide} alt="sizeGuide" />
                        </div>
                      </div>
                      <div className="col-12 col-md-8">
                        <div className="product-sizeGuide-details">
                          <table>
                            <tr>
                              <th>SIZE</th>
                              <th>CHEST(IN.)</th>
                              <th>WAIST(IN.)</th>
                              <th>HIPS(IN.)</th>
                            </tr>
                            <tr>
                              <td>XS</td>
                              <td>34-36</td>
                              <td>27-29</td>
                              <td> 34.5-36.5</td>
                            </tr>
                            <tr>
                              <td>S</td>
                              <td> 36-38</td>
                              <td> 29-31</td>
                              <td> 36.5-38.5</td>
                            </tr>
                            <tr>
                              <td>M</td>
                              <td> 38-40</td>
                              <td> 31-33</td>
                              <td> 38.5-40.5</td>
                            </tr>
                            <tr>
                              <td>L</td>
                              <td> 40-42</td>
                              <td> 33-36</td>
                              <td> 40.5-43.5</td>
                            </tr>
                            <tr>
                              <td>XL</td>
                              <td> 42-45</td>
                              <td> 36-40</td>
                              <td> 43.5-47.5</td>
                            </tr>
                            <tr>
                              <td>XXL</td>
                              <td> 45-48</td>
                              <td>40-44</td>
                              <td> 47.5-51.5</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleToggleContent("addInfo")}
                    className={
                      activeTab === "addInfo"
                        ? "product-accordin-tabStyle active-tab-style d-md-none"
                        : "product-accordin-tabStyle d-md-none"
                    }
                  >
                    ADDITIONAL INFORMATION
                  </div>
                  <div
                    className={
                      activeTab === "addInfo"
                        ? "product-addinfo-tab active"
                        : "product-addinfo-tab"
                    }
                  >
                    <div className="product-addinfo-content">
                      <table>
                        <tr>
                          <td>Weight</td>
                          <td>23 kg</td>
                        </tr>
                        <tr>
                          <td>Dimensions</td>
                          <td>12 × 23 × 56 cm</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>Green, Indigo</td>
                        </tr>
                        <tr>
                          <td>Size</td>
                          <td>Extra Large</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
