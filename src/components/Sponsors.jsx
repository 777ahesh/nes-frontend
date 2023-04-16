import React from 'react'
import './styles/Sponsors.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
function Sponsors() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 200,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return(
        <div className="mainContainer">
          <h2>Our Sponsors</h2>
          <Slider {...settings}>
            <div className="container slider">
              <img src="./images/adidas.png" alt="sponsor" />
            </div>
            <div className="container slider">
              <img src="./images/facebook.png" alt="sponsor" />
            </div>
            <div className="container slider">
              <img src="./images/google.png" alt="sponsor" />
            </div>
            <div className="container slider">
              <img src="./images/instagram.png" alt="sponsor" />
            </div>
            <div className="container slider">
              <img src="./images/uber.png" alt="sponsor" />
            </div>
            <div className="container slider">
              <img src="./images/youtube.png" alt="sponsor" />
            </div>
          </Slider>
        </div>
      );
}

export default Sponsors