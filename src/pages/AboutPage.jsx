import React, { useEffect } from "react";
import CountUp from "react-countup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/about.css";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../files/svg/homeIcon.svg";
import testimonial1 from "../files/img/shop2_about_us_person1.jpg";
import testimonial2 from "../files/img/shop2_about_us_person2.jpg";

const AboutPage = () => {
  const chooseUs = [
    {
      id: "1111",
      title: "Free Shipping",
      icon: "fa-truck-fast",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.",
    },
    {
      id: "2222",
      title: "100% money back guarantee.",
      icon: "fa-hand-holding-dollar",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.",
    },
    {
      id: "3333",
      title: "Online Support 24/7",
      icon: "fa-user-astronaut",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.",
    },
  ];

  const clientArr = [
    {
      id: "11",
      name: "JOHN SMITH",
      p: "SMARTWAVE CEO",
      review:
        "Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum dolor sit amet, consectetur elitad adipiscing cas non placerat mi.",
      img: testimonial1,
    },
    {
      id: "22",
      name: "BOB SMITH",
      p: "SMARTWAVE CEO",
      review:
        "Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum dolor sit amet, consectetur elitad adipiscing cas non placerat mi.",
      img: testimonial2,
    },
  ];

  useEffect(() => {
    document.title = "About Us - My Ecommerece App";
  }, []);

  return (
    <>
      <Header />
      <>
        {/* About Us Start */}
        <section className="about-us">
          <div className="about-us-wapper">
            <div className="container">
              <div className="about-us-items">
                <h3>ABOUT US</h3>
                <h1>OUR COMPANY</h1>
                <Link to="#">contact</Link>
              </div>
            </div>
          </div>
        </section>
        {/* About Us End */}
        {/* Page Top Title Start */}
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
                <Link>about us</Link>
              </li>
            </ul>
          </div>
        </section>
        {/* Page Top Title End */}
        {/* Our Store Start */}
        <section className="our-store">
          <div className="container">
            <div className="our-store-wapper">
              <div className="our-store-heading">
                <h2>Our story</h2>
              </div>
              <div className="our-store-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h4>
                  “ Many desktop publishing packages and web page editors now
                  use Lorem Ipsum as their default model search for evolved over
                  sometimes by accident, sometimes on purpose ”
                </h4>
              </div>
            </div>
          </div>
        </section>
        {/* Our Store End */}
        {/* WHY CHOOSE US Start */}
        <section className="why-choose-us">
          <div className="container">
            <div className="why-choose-us-heading">
              <h2>WHY CHOOSE US</h2>
            </div>
            <div className="row">
              {chooseUs.map((val) => {
                return (
                  <div className="col-lg-4 col-md-4 mb-20" key={val.id}>
                    <div className="why-choose-us-wapper">
                      <i className={`fa-solid ${val.icon}`} />
                      <h3>{val.title}</h3>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* WHY CHOOSE US End */}
        {/* Happpy Clients Start */}
        <section className="happy-clients">
          <div className="container">
            <div className="happy-clients-heading">
              <h2>HAPPY CLIENTS</h2>
            </div>
            <div className="row">
              {clientArr.map((d) => {
                return (
                  <div className="col-lg-6 col-md-6 mb-20" key={d.id}>
                    <div className="happy-clients-wapper">
                      <div className="happy-clients-top">
                        <div className="happy-clients-top-img">
                          <img src={d.img} alt={d.name} />
                        </div>
                        <div className="happy-clients-text">
                          <h4>
                            <Link to="#">{d.name}</Link>
                          </h4>
                          <p>{d.p}</p>
                        </div>
                      </div>
                      <div className="happy-client-bottom">
                        <p>{d.review}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Happpy Clients End */}
        <section className="our-business-service">
          <div className="container">
            <div id="projectFacts" className="sectionClass">
              <div className="projectFactsWrap ">
                <div className="item">
                  <h3>
                    <CountUp start={0} end={200} delay={3}></CountUp>+
                  </h3>
                  <p>Secure Storage</p>
                </div>
                <div className="item">
                  <h3>
                    <CountUp start={0} end={2000} duration={3} delay={3} />+
                  </h3>
                  <p>Happy clients</p>
                </div>
                <div className="item">
                  <h3>
                    <CountUp start={0} end={24} duration={6} delay={3} />
                    Hr
                  </h3>
                  <p>Cups of coffee</p>
                </div>
                <div className="item">
                  <h3>
                    <CountUp start={0} end={265} duration={4} delay={3} />+
                  </h3>
                  <p>Photos taken</p>
                </div>
                <div className="item">
                  <h3>
                    <CountUp start={0} end={99} duration={4} delay={3} />%
                  </h3>
                  <p>Photos taken</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
};

export default AboutPage;
