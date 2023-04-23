import About from "../components/About";
// import About from "./components/About";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Guests from "../components/Guests";
import Hero from "../components/Hero";
import TestiMonials from "../components/TestiMonials/TestiMonials";
import Timeline from "../components/Timline";
import ParticleComponent from "../components/subcomponents/ParticleComponent";
import ParticleBackground from "../components/subcomponents/ParticlesBackground";
import Nes from "../images/nes-logo.png";
import "../styles.css";

function Main() {
  const [loading, setLoading] = useState("hello");
  useEffect(() => {
    setTimeout(() => {
      setLoading("true");
    }, 0);
    setTimeout(() => {
      setLoading("false");
      console.log("Welcome");
    }, 6000);
  }, []);

  // const loading = "true";

  const texts = ["Build","Build", "Network", "Grow", "Let's Summit!"];

  return (
    <div className="App">
      {loading === "false" ? (
        <>
          <Hero />
          {/* <About /> */}
          <About />
          <Guests />
          <Timeline />
          <TestiMonials />
          {/* <Sponsors/> */}
          {/* <UserForm/> */}
          <Footer />
        </>
      ) : loading === "hello" ? (
        <ParticleBackground />
      ) : (
        <>

          <div className="container d-flex justify-content-center align-items-center modal-container">
            <ParticleComponent theme="dark" />

            <div className="row wrapper">
              <div className="col-md-6"><img className="img-fluid" src={Nes} alt="responsive" /></div>
              {/* <div class="d-none d-md-block border-left h-100"></div> */}
              <div className="words col-md-6">
              {texts.map((text, index) => (
                  <span
                    key={index}
                    // style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {text}
                  </span>
               ))
              }
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
export default Main;
