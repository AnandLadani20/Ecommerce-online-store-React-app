import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const PageTitleHeader = ({ hierarchyFirst, hierarchySecond, pageTitle }) => {
  return (
    <>
      <div className="account-header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="breadcrumbs-wrap text-center">
                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  {hierarchyFirst && (
                    <>
                      <i className="fa-solid fa-chevron-right"></i>
                      <li>
                        <Link to="#">{hierarchyFirst}</Link>
                      </li>
                    </>
                  )}
                  {hierarchySecond && (
                    <>
                      <i className="fa-solid fa-chevron-right"></i>
                      <li>
                        <Link to="#">{hierarchySecond}</Link>
                      </li>
                    </>
                  )}
                </ul>
                <h3>{pageTitle}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitleHeader;
