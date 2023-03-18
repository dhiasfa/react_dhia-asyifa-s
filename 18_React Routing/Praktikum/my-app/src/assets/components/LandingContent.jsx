import React from 'react'
import "../styleLanding.css"
import gambar from "./img/hero-img.png"
import { useNavigate } from 'react-router-dom'
export const LandingContent = () => {
    const navigate = useNavigate();

  return (
    <>
    <div className="body">
    <div className="container-fluid">
        <div className="content-landing">
            <div className="row">
                <div className="col-md-5 col-sm-5">
                <div className="judul">
                    <h1>Better Solutions For Your Business</h1>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                    <div className="navigasi">
                        <a href="">
                        <button id="btnStart">Get Started </button>
                        </a>
                        <a href="" id="btnWatch">
                        Watch Video
                        </a>
                    </div>
                    </div>
                </div>
                <div className=" col-lg-5 col-md-7 col-sm-12">
                    <div className="heroku">
                    <img src={gambar} alt="gambar Heroku" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                <button type="button" className="btn btn-outline-info" onClick={()=>navigate('/createProduct')}>Halaman Create Product</button>
                </div>
            </div>
        </div>
        <div className="news">
            <h2>Join Our Newsletter</h2>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form className='form-content' action="" method="post">
            <input type="text" id="kotakInput" name="username" />
            <a href="">
                <button id="btnSubscribe" value="Subscribe">
                Subscribe
                </button>
            </a>
            </form>
        </div>
        <div className="footer-nav">
            <div className="company">
            <h3>ARSHA</h3>
            <p> A108 Adam Street </p>
            <p className="indent"> New York, NY 535022</p>
            <p className="indent">United States </p>
            <p>
                <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p>
                <strong>Email:</strong> info@example.com
            </p>
            </div>
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
                Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                valies
            </p>
            <div className="kotak">
                <div className="bulat1" />
                <div className="bulat2" />
                <div className="bulat3" />
                <div className="bulat4" />
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
</div>
    
</>
  )
}
