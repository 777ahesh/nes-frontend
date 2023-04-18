import React from "react";
import "./styles/Footer.css";
import IEEE from "../images/nes-logo.png";

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-white footer-div">
        {/* style="background-color: #929fba" */}
        <div className="container p-4 pb-0">
          <section >
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <div className="image">
                  <img src={IEEE} alt="IEEE LOGO" />
                </div>
                <br />
                
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                <p style={{textAlign:"justify"}}>
                <i className="fa-solid fa-location-dot"></i> &nbsp;
                  P- 14 , Rajiv Gandhi Infotech Park, MIDC – Phase I, Hinjawadi,
                  Pune – 411 057, Maharashtra, India
                </p>
                <h6 style={{textAlign:"justify"}} className="text-uppercase mb-4 font-weight-bold">
                 Contact Us
                </h6>
                <p style={{textAlign:"justify"}} ><i className="fa-solid fa-phone"></i>&nbsp;
                  IIC I2IT Chair
                </p>
                <p style={{textAlign:"justify"}}>+91 7385576991</p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <hr className="w-100 clearfix d-md-none" />

              {/* <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h4 className="text-uppercase mb-4 font-weight-bold">
                  LEARN MORE
                </h4>
                <p>Privacy</p>
                <p>Security</p>
                <p>Terms</p>
              </div> */}

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="/"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="/"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#dd4b39" }}
                  href="/"
                  role="button"
                >
                  <i className="fab fa-google" />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="/"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="/"
                  role="button"
                >
                  <i className="fab fa-linkedin-in" />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#333333" }}
                  href="/"
                  role="button"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mb-4">
          {/* style="background-color: rgba(0, 0, 0, 0.2)" */}
          Developed by IIC I2IT
          © 2022 Copyright:
          &nbsp;
          <a className="text-white" href="/">
            nes.iic.i2it
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
