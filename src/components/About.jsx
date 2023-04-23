import "./styles/About.css";
import Nes from '../images/nes-logo.png';
import React, { useState, useEffect } from "react";

const About = () => {
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
      setCountdown(`${days} ${hours} ${minutes} ${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container" >
        <div className="counter">
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
        </div>

        <div className="about">
          <div className="row ">
            <h1 className="mb-5">ABOUT NES</h1>
            <div className="col-12 col-lg-3"><img className="img-fluid" src={Nes} alt="Nes" /></div>
            <div className="col-12 col-lg-9 para">
              <p className="about-heading">
                WELCOME to the <b>NATIONAL ENTREPRENEURSHIP SUMMIT 2023</b>.
                {/* <br /> */}
              </p>
              <p className="about-content">
                Where innovation and creativity meet to shape the future of
                entrepreneurship in our country.
                <br />
                As a leading platform for aspiring entrepreneurs,investors and
                industry experts,we are committed to providing an engaging and
                insightful experiance that drives meaningful change.
              </p>
            </div>
          </div>
        </div>

      </div >
    </>
  );
}

export default About;
