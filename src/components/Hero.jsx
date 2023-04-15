import React, { useState, useEffect } from "react";

const Hero = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const deadline = new Date("April 30, 2023 23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="hero">
      <section id="navbar" className=" start-header start-style ">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light bg-transparent">
            <a className="navbar-brand" href="https://front.codes/">
              <h1>IIC</h1>
            </a>
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
                  <a
                    className="nav-link active"
                    href="/"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                  <a className="nav-link" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                  <a className="nav-link" href="/">
                    Agency
                  </a>
                </li>
                <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                  <a
                    className="nav-link"
                    href="/"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                  <a className="nav-link" href="/">
                    Journal
                  </a>
                </li>
                <li className="nav-item pl-4 pl-md-0 ms-0 ms-md-4">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      <section id="Hero" className="Hero">
        {/* <div className="logo">
          <img src="nes-logo.png" alt="logo"></img>
        </div> */}
        <div className="iic">
          <h3>Institutes Innovation Council</h3>
          <h5>International Institute of Information Technology</h5>
        </div>
        <div>
          <h4>Presents</h4>
        </div>
        <div className="nes">
          <h1>NATIONAL</h1>
          <h1>ENTREPRENEURSHIP</h1>
          <h1>SUMMIT</h1>
        </div>
        <div className="counter">
          {countdown && <h3>Registration closes in: {countdown}</h3>}
        </div>
        {/* <div className="reg-btn">
            <button><a href="/">REGISTER</a></button>
        </div> */}
        <div className="login-box">
          <form>
            <a href="/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              register
            </a>
          </form>
        </div>

      </section>
      </div>
    </>
  );
};

export default Hero;
