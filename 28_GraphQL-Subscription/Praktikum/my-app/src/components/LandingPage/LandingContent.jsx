import React from "react";
import "./LandingPage.style.css";
import hero from "../../assets/img/hero-img.png";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
export const LandingContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col">
        <div className="content-landingPage">
          <div className="d-flex justify-content-evenly align-items-center">
            <div className="p-2">
              <h1>Better Solutions For Your Business</h1>
              <p>
                We are team of talented designers making websites with Bootstrap
              </p>

              <button
                type="button"
                className="btn btn-primary px-4 py-2"
                onClick={() => navigate("/createProduct")}>
                Create Product
              </button>
              <button
                type="submit"
                className="btn btn-light mx-4 px-4 py-2"
                id="btn-watch-video">
                Watch Video
              </button>
            </div>
            <div className="p-2">
              <img src={hero} alt="hero" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* card */}
        <Card />
        {/* News */}
        <div className="news">
          <h2>Join Our Newsletter</h2>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form action="" className="d-flex justify-content-center">
            <input type="text" id="kotakInput" />
            <a href="">
              <button id="btnSubscribe" value="Subscribe">
                Subscribe
              </button>
            </a>
          </form>
        </div>
        <div className="footer-nav">
          <div className="d-flex justify-content-evenly align-items-center">
            <div className="links">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Terms of service</a>
                </li>
                <li>
                  <a href="">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="service">
              <h2>Our Service</h2>
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div className="network">
              <h2>Our Social Networks</h2>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="kotak">
                <div className="bulat1" />
                <div className="bulat2" />
                <div className="bulat3" />
                <div className="bulat4" />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p id="copyright">
            © Copyright <span>Arsha</span>. All Rights Reserved
          </p>
          <p id="design">
            Designed by <span>BootstrapMade</span>
          </p>
        </footer>
      </div>
    </>
  );
};
