import React from "react";
import { Link } from "react-router-dom";

const ListSkeleton = () => {
  const mapped = Array.from({ length: 6 });

  return (
    <>
      {mapped.map((elm, i) => {
        return (
          <div
            className="row align-items-center pb-3 listskeleton-item-style"
            key={i}
          >
            <div className="col-12 col-sm-4">
              <div className="cate-product-listview-imgbox"></div>
            </div>
            <div className="col-12 col-sm-8">
              <div className="cate-product-listview-details">
                <p className="product-cate-content"></p>
                <h5 className="product-title-content"> &nbsp; </h5>
                <Link></Link>
                <p className="cate-product-desc"></p>
                <h5 className="cate-product-price"> &nbsp; </h5>
                <div className="listview-prdct-feature">
                  <ul>
                    <li>{elm}</li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListSkeleton;
