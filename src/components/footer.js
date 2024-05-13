import React from "react";
import '../styles/index.css'

function Footer() {
    return ( 
        <>
            <div className="bg-dark text-white ">
              <div className="container-fluid  row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 p-5  ">
                <div className="col">
                  <h4>Exclusive</h4>
                  <h6>Subscribe</h6>
                  <p>Get 10% off your first order</p>
                </div>
                <div className="col">
                  <h4>Support</h4>
                  <p>111 Biljoy sarani, Dhaka, DH 1515, Bangladesh</p>
                  <p>Exclusive@gmail.com</p>
                  <p>8888-0000-9999</p>
                </div>
                <div className="col">
                  <h4>Account</h4>
                  <p>My Account</p>
                  <p>Login/ Register</p>
                  <p>Cart</p>
                  <p>Wishlist</p>
                  <p>Shop</p>
                </div>
                <div className="col">
                  <h4>Quick Link</h4>
                  <p>Privacy Policy</p>
                  <p>Term of Use</p>
                  <p>FAQ</p>
                  <p>Contact</p>
                </div>
                <div className="col">
                  <h4>Download App</h4>
                  <p className="fs-small mb-0">Save $3 with app for new users only</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <i className="bi bi-qr-code" style={{ fontSize: "75px" }}></i>
                    </div>
                    <div className="d-inline ps-2 pt-1">
                      <a href="#">
                        <img
                          src="https://geeks-react.netlify.app/static/media/appstore.b464860c93223b3fc15fc7d026bcdca0.svg"
                          alt=""
                          className="img-fluid pb-1"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="https://geeks-react.netlify.app/static/media/playstore.f23c3dcbde32e767203274d4b1749cc7.svg"
                          alt=""
                          className="img-fluid ml-2"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="display-flex justify-content-center">
                    <i className="bi bi-facebook ps-2"></i>
                    <i className="bi bi-twitter ps-4"></i>
                    <i className="bi bi-instagram ps-4"></i>
                    <i className="bi bi-linkedin ps-4"></i>
                  </div>
                </div>
              </div>
            </div>
        </>
     );
}

export default Footer;
