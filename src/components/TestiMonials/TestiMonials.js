import TestiMonialsDetails from "../TestiMonialsDetails/TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from "../nes-logo.png";
import "./TestiMonials.css";

const TestiMonials = () => {
  const testiMonials = [
    {
      img: "https://res.cloudinary.com/dteiwrdfu/image/upload/v1669990959/ieee/event01_ptzyul.png",
    },
    {
      img: "https://res.cloudinary.com/dteiwrdfu/image/upload/v1669990959/ieee/event01_ptzyul.png",
    },
    {
      img: "https://res.cloudinary.com/dteiwrdfu/image/upload/v1669990959/ieee/event01_ptzyul.png",
    },
    {
      img: "https://res.cloudinary.com/dteiwrdfu/image/upload/v1669990959/ieee/event01_ptzyul.png",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
        <div className="title mt-5">
          <h1 className="col ">Events Showcase</h1>
        </div>
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div class="item">
                  <img className="" src={img} alt="event" />
                </div>
              ) : (
                testiMonials.map((testiMonialDetail,index) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={index}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TestiMonials;
