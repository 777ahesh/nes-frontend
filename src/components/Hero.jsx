import "./styles/Hero.css";
// import React, { useState, useEffect } from "react";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  // const [countdown, setCountdown] = useState(null);

  // useEffect(() => {
  //   const deadline = new Date("April 30, 2023 23:59:59").getTime();
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = deadline - now;
  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //     setCountdown(`${days} ${hours} ${minutes} ${seconds}`);

  //     // setCountdown(countdown);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  // const { days, hours, minutes, seconds } = countdown;


  const myRef = useRef(null);

  const scrollToRef = () => {
    window.scrollTo(0, myRef.current.offsetTop);
  }



  return (

    <div className="hero">
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
          {/* <h1>NATIONAL</h1> */}

          <p className="popout">
            <span>NATIONAL</span><br />
            <span>ENTREPRENEURSHIP</span><br />
            <span>SUMMIT</span>
          </p>

          {/* <h1>ENTREPRENEURSHIP</h1>
            <h1>SUMMIT</h1> */}
        </div>

        {/* <div className="counter">
          <h3>Registration closes in</h3>
          {countdown && (
            <div className="countdown">
              <div className="boxes">
                <div className="box">
                  <span className="num" id="day-box">
                    {countdown.split(" ")[0]}
                  </span>
                  <span className="text">Days</span>
                </div>
                <div className="box">
                  <span className="num" id="day-box">
                    {countdown.split(" ")[1]}
                  </span>
                  <span className="text">Hours</span>
                </div>
                <div className="box">
                  <span className="num" id="day-box">
                    {countdown.split(" ")[2]}
                  </span>
                  <span className="text">Minutes</span>
                </div>
                <div className="box">
                  <span className="num" id="day-box">
                    {countdown.split(" ")[3]}
                  </span>
                  <span className="text">Seconds</span>
                </div>
              </div>
            </div>
          )}
        </div> */}

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

        {/* <div className="counter">
          <h3>Registration closes in</h3>
          {countdown && (
            <div className="countdown">
              <div className="boxes">
                <div className="box">
                  <span className="num" id="day-box">
                    {countdown.split(" ")[0]}
                  </span>
                  <span className="text">Days</span>
                </div>
                <div className="box">
                  <span className="num" id="day-box">
                    {countdown.split(" ")[1]}
                  </span>
                  <span className="text">Hours</span>
                </div>
                <div className="box">
                  <span className="num" id="day-box">
                    {countdown.split(" ")[2]}
                  </span>
                  <span className="text">Minutes</span>
                </div>
                <div className="box">
                  <span className="num" id="day-box">
                    {countdown.split(" ")[3]}
                  </span>
                  <span className="text">Seconds</span>
                </div>
              </div>
            </div>
          )}
        </div> */}

      </section >
    </div >

  );
};

export default Hero;
