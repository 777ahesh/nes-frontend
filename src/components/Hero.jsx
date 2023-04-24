import "./styles/Hero.css";
import React from "react";
import { NavLink } from "react-router-dom";
import ParticleComponent from "./subcomponents/ParticleComponent";
const Hero = () => {
  return (
    <>

      <div className="hero">
        <ParticleComponent theme="dark" />
        <section id="navbar" className=" start-header start-style ">
          <div className="container">
            {/* <nav className="navbar navbar-expand-md navbar-light bg-transparent"> */}
            <nav className="navbar navbar-expand-md navbar-light ">
              <NavLink className="navbar-brand" href="/">
                <h1>IIC</h1>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto py-4 py-md-0">
                  <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  {/* <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                  <NavLink className="nav-link" to="/about" onClick={scrollToRef}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                  <NavLink className="nav-link" to="/">
                    Events
                  </NavLink>
                </li>
                <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                  <NavLink
                    className="nav-link"
                    to="/"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Speakers
                  </NavLink>
                </li> */}
                  <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                    <NavLink className="nav-link" to="/team">
                      Team
                    </NavLink>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                    <NavLink className="nav-link" to="/team">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>

        <section id="Hero" className="Hero">
          <div className="iic">
            <h3>Institutes Innovation Council</h3>
            <h5>International Institute of Information Technology</h5>
          </div>
          <div>
            <h4>Presents</h4>
          </div>
          <div className="nes">
            <p className="popout">
              <span>NATIONAL</span><br />
              <span>ENTREPRENEURSHIP</span><br />
              <span>SUMMIT</span>
            </p>
          </div>

          <div className="login-box">
            <form>
              <NavLink to="/register">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                register
              </NavLink>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
