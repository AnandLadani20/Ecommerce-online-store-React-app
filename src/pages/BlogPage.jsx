import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../style/blog.css";
import Shared from "../utils/shared";
import { ReactComponent as HomeIcon } from "../files/svg/homeIcon.svg";

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog - My Ecommerece App";
  }, []);
  return (
    <>
      <Header />
      <>
        <section className="page-titel">
          <div className="container">
            <ul className="page-wrapper-titel">
              <li>
                <Link to="/">
                  <HomeIcon />
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right" />
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
        </section>
        {/* Blog Start */}
        <section className="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 pl-lg-0">
                <div className="row">
                  {Shared.latestNewsArr.map((news) => {
                    return (
                      <div className="col-lg-4 col-md-6 mb-20" key={news.title}>
                        <div className="latest-news-wapper">
                          <div className="latest-news-img">
                            <Link to="#">
                              <img src={news.img} alt="" />
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
              </div>
              <div className="col-lg-3 m-blog-wapper">
                <div className="blog-wapper">
                  <div className="about-the-blog">
                    <h3 className="blog-heading">About The Blog</h3>
                    <p>
                      Lorem ipsum dolor sit amet, conse elit porta. Vestibulum
                      ante justo, volutpat quis porta diam.
                    </p>
                  </div>
                  <div className="blog-input  blog-top-row">
                    <form method="get" id="searchform" className="searchform">
                      <div className="input-group">
                        <input
                          className="form-control porto-search-init"
                          placeholder="Search…"
                        />
                        <button type="submit" className="btn  p-2">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="reacent-post blog-top-row">
                    <h3 className="blog-heading"> Recent Posts</h3>
                    <ul>
                      <li>
                        <span>February 26, 2018</span>
                        <Link to="#">Top New Collection</Link>
                      </li>
                      <li>
                        <span>February 26, 2018</span>
                        <Link to="#">Fashion Trends</Link>
                      </li>
                      <li>
                        <span>February 26, 2018</span>
                        <Link to="#">Right Choices</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="reacent-comments  blog-top-row">
                    <h3 className="blog-heading"> Recent Comments</h3>
                    <ul>
                      <li>
                        <span>John Doe</span> on{" "}
                        <Link to="#">Women Casual Bag Spring</Link>
                      </li>
                      <li>
                        <span>John Doe</span> on{" "}
                        <Link to="#">Women Casual Bag Spring</Link>
                      </li>
                      <li>
                        <span>John Doe</span> on{" "}
                        <Link to="#">Women Casual Bag Spring</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-categories blog-top-row">
                    <h3 className="blog-heading"> Categories </h3>
                    <ul>
                      <li>
                        <Link to="#">Bag</Link>(2)
                      </li>
                      <li>
                        <Link to="#">Fashion</Link>(2)
                      </li>
                      <li>
                        <Link to="#">Modal</Link>(2)
                      </li>
                      <li>
                        <Link to="#">Traveling</Link>(2)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-sidebar-wrapper" id="blog-sidebar-wrapper">
            <div className="blog-wapper">
              <div className="about-the-blog">
                <h3 className="blog-heading">About The Blog</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse elit porta. Vestibulum ante
                  justo, volutpat quis porta diam.
                </p>
              </div>
              <div className="blog-input  blog-top-row">
                <form method="get" id="searchform" className="searchform">
                  <div className="input-group">
                    <input
                      className="form-control porto-search-init"
                      placeholder="Search…"
                    />
                    <button type="btn" className="btn  p-2">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="reacent-post blog-top-row">
                <h3 className="blog-heading"> Recent Posts</h3>
                <ul>
                  <li>
                    <span>February 26, 2018</span>
                    <Link to="#">Top New Collection</Link>
                  </li>
                  <li>
                    <span>February 26, 2018</span>
                    <Link to="#">Fashion Trends</Link>
                  </li>
                  <li>
                    <span>February 26, 2018</span>
                    <Link to="#">Right Choices</Link>
                  </li>
                </ul>
              </div>
              <div className="reacent-comments  blog-top-row">
                <h3 className="blog-heading"> Recent Comments</h3>
                <ul>
                  <li>
                    <span>John Doe</span> on{" "}
                    <Link to="#">Women Casual Bag Spring</Link>
                  </li>
                  <li>
                    <span>John Doe</span> on{" "}
                    <Link to="#">Women Casual Bag Spring</Link>
                  </li>
                  <li>
                    <span>John Doe</span> on{" "}
                    <Link to="#">Women Casual Bag Spring</Link>
                  </li>
                </ul>
              </div>
              <div className="blog-categories blog-top-row">
                <h3 className="blog-heading"> Categories </h3>
                <ul>
                  <li>
                    <Link to="#">Bag</Link>(2)
                  </li>
                  <li>
                    <Link to="#">Fashion</Link>(2)
                  </li>
                  <li>
                    <Link to="#">Modal</Link>(2)
                  </li>
                  <li>
                    <Link to="#">Traveling</Link>(2)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Blog End */}
      </>

      <Footer />
    </>
  );
};

export default BlogPage;
