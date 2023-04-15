import React from "react";
import "./styles/About.css";
import Nes from './nes-logo.png'
function About() {
  return (
    <>
      <div className="about">
        <div className="first title">
          <h1 className="col ">About Us</h1>
        </div>
        <div className="second">
          <p>
            WELCOME to the <b>NATIONAL ENTREPRENEURSHIP SUMMIT 2023</b>.
            <br></br>
            Where innovation and creativity meet to shape the future of
            entrepreneurship in our country.
            <br></br>
            As a leading platform for aspiring entrepreneurs,investors and
            industry experts,we are committed to <br></br> providing an engaging and
            insightful experiance that drives meaningful change.
          </p>
        </div>
        <div className="third">
            <img src={Nes} alt="Nes"/>
        </div>
      </div>
    </>
  );
}

export default About;
