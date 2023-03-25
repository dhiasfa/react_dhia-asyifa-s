import React from "react";
import "./style.css";
import iconIg from "./image/icon-ig.png";
import iconYT from "./image/icon-yt.png";
import iconTW from "./image/icon-tw.png";
import { ContactUs } from "./ContactUs";
import imgAbout from "./image/cnk-about.jpg";
import { useRef } from "react";

export const WelcomPage = () => {
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const handleAboutClick = () => {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleContactClick = () => {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <>
      {/* Header */}
      <div className="header ps-md-5 pe-md-5">
        <div className="container-fluid">
          <div className=" d-flex justify-content-between">
            <h2>Local Bag</h2>
            <nav className="navbar navbar-expand-md navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link" onClick={handleAboutClick}> About Us</p>
                </li>
                  <li className="nav-item">
                    <p className="nav-link" onClick={handleAboutClick}> Contact Us</p>
                </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="content">
        <div className="container">
          <div className="main-content">
            <h1>Spring Summer 2023 : State Of Play</h1>
            <p className="pt-2">
              Thank you for choosing our store. We hope you find the perfect bag
              to suit your needs. Our latest seasons collection invites you to
              enter the world with bright colors.
            </p>
            <div className="btn-buy">
              <button>
                <a href="">SHOP NOW</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* AboutUS */}
      <div className="AboutUS" ref={aboutRef}>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md">
              <h3 className="text-center mb-4">About Us</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={imgAbout} alt="about Us" className="img-fluid" />
            </div>
            <div className="col-md-6 ps-5">
              <div className="text-center pt-3">
                <h5>Brand Story</h5>
              </div>
              <div className="content-about">
                <p>
                  With a vision to build a global brand that is self-assured,
                  empowering and giving confidence to all women, it creates
                  collections that enhance life and work. Signifiers of
                  potential, Local bag is always consumer first and aims
                  to unlock an aspirational brand experience that is
                  consistently attainable.
                </p>
                <p>
                  Local bag celebrates the joy of fashion and embraces its
                  natural duality: Challenger & Lover. Asian & Global. Night &
                  Day. Work & Play.
                </p>
                <p>
                  The brand is an undeniable democratizer of fashion, never
                  compromising creativity for affordability and challenging the
                  conventions that fashion is for the few.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contact-us" ref={contactRef}>

      <ContactUs />
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="container-fluid">
          <div className="main-footer">
            <div className="row mb-5 d-flex justify-content-between">
              <div className="col-md-4 col-sm-3">
                <h3>Local Bag</h3>
                <p>
                  Local bag is founded with a vision to give authority to women
                  around the world to express themselves freely through fashion.
                </p>
                <p className="d-inline mt-2" id="follow">
                  FOLLOW US
                </p>
                <a href="https://www.instagram.com/dhiaacaa/">
                  <img src={iconIg} alt="instagram" />
                </a>
                <a href="https://twitter.com/jenmiqi12">
                  <img src={iconTW} alt="twitter" />
                </a>
                <a href="https://m.youtube.com/channel/UCbSbV0gc3V3iCNupovckThw">
                  <img src={iconYT} alt="youtube" />
                </a>
              </div>
              <div className="col-md-2">
                <h4>PRODUCT</h4>
                <div className="product-footer">
                  <p>
                    <a href="">New Product</a>
                  </p>
                  <p>
                    <a href="">Bags</a>
                  </p>
                  <p>
                    <a href="">Wallets</a>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <h4>SERVICE</h4>
                <div className="product-footer">
                  <p>
                    <a href="">FAQ</a>
                  </p>
                  <p>
                    <a href="">Contact Us</a>
                  </p>
                  <p>
                    <a href="">Order Status</a>
                  </p>
                  <p>
                    <a href="">Privilege Membership</a>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <h4>STORE LOCATION</h4>
                <div className="location">
                  <h5>Central Park</h5>
                  <p> Jl. S. Parman Kav.28, Upper Ground Floor Indonesia</p>
                  <p>+62 (21) 56985773</p>
                </div>
              </div>
            </div>
            <p className="d-flex justify-content-center">
              © Local Bag, all rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
