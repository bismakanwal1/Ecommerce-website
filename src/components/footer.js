import React from "react";
function Footer() {
    return ( 
        <>
            <div className="bg-dark text-white">
              <div className="container-fluid text-center row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
                <div className="col">
                <h2>Exclusive</h2>
                <h6>Subscribe</h6>
                <p>Get 10% off your first order</p>
                </div>
                <input
              type="email"
            style={{border:"none" }}
              id="email"
              name="email"
              placeholder="Enter Your Email"
            />
                <div className="col">hlo</div>
                <div className="col">hlo</div>
                <div className="col">hlo</div>
                <div className="col">hlo</div>
              </div>
            </div>
        </>
     );
}

export default Footer;