import React from "react";
import { Link } from "react-router-dom";

const ProductSkeleton = () => {
  const mapped = Array.from({ length: 6 });
  return (
    <>
      {mapped.map((elm, i) => {
        return (
          <div className="col-12 col-md-6 col-lg-4" key={i}>
            <div className="item skeleton-item-style">
              <div className="feauture-tb-item product-type-advanced">
                <div className="page-wrapper">
                  <Link>
                    <figure className="swap-on-hover">
                      <img
                        src="ss"
                        className="swap-on-hover__front-image"
                        loading="lazy"
                        alt=""
                      />
                    </figure>
                  </Link>

                  <div className="featured-products-bottom">
                    <div className="featured-products-top-text">
                      <h5>
                        <Link to="#"></Link>
                      </h5>
                      <h3>
                        <Link to="#"></Link>
                      </h3>

                      <div className="featured-products-bottom-text">
                        <h4>{elm}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductSkeleton;
