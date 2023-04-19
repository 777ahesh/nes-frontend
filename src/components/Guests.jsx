import React from "react";
import "./styles/Guests.css";

const speakers = [
  {
    name: "Dr. Raghunath Mashelkar",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ramesh_Mashelkar_Apr09.jpg/330px-Ramesh_Mashelkar_Apr09.jpg",
    occupation: "World-renowned Innovator, Padma Vibhushan, Padma Bhushan, Padma Shree Awardee"
  },
  {
    name: "Dr. Vijay Bhatkar",
    photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdXcP4jivMam7y0FRDimxVLzENPMMM5VKskTbp3ThuADl8abIb",
    occupation: "Architect of India's First Super Computer, Padma Bhushan, Padma Shri and Maharashtra Bhushan Awardee"
  },
  {
    name: "Mr. Arsh Goyal",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgPdnRJL-oLNtBSP0Qg19hH5ka2CrrgNcwZbfPlmZTA&s",
    occupation: "Ex-ISRO, Ex-CodeChef, Famous Youtuber"
  },
  {
    name: "Mr. Ashish Dhone",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXqIw6R7CkHC5jwHc4RPHsVwdc96VCeRAb852usPdqA&s",
    occupation: "Top 50 in World at Microsoft, Top 120 in Google Hacker's Ranking"
  },
  {
    name: "Mr. Ishan Sharma",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6WovIizdfQx4rkG8Zr3nx6MceQ5gh3TgGHf0gbXb4A&s",
    occupation: "Founder MarkitUp, Famous Youtuber"
  },
  {
    name: "Mr. Manish Samota",
    photo: "https://media.licdn.com/dms/image/C5103AQHPQpj_xHFJRg/profile-displayphoto-shrink_400_400/0/1561397214977?e=1687392000&v=beta&t=QK39PXVXOmL_FmWGiEQfBUo6cg-SyGFwXzifIGM23TE",
    occupation: "Head of Products, Reliance Jio Info COMM"
  },
  {
    name: "Mr. Om Thoke",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBI9KXl7fEBtqa0eqjgI9b-oSGCvV6CRLXjIOdOr_86w&s",
    occupation: "Serial Entrepreneur,  Startup Investor, India's Veteran Blogger"
  },
  {
    name: "Mr. Rajesh KS",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiP3OVg3x5evldVr7fEB3r2KA0dByTgmXM9JdVwrmcrQ&s",
    occupation: "VP - Product Engineering, Mastercard "
  },
  {
    name: "Mr. Rajiv Malhan",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJsFXtE4qHoIL0Eon4_AzRMerRrHMvvruLOONpc2GlWA&s",
    occupation: "Head - Strategic Projects and Business Transformation, Aditya Birla Capital"
  },
  {
    name: "Mr. Shravan Tikoo",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolwCnsUenQ0kxaSE_L6eSO8Z2jhPE-KLAHEK3hGBdqSZquMy-nf8SJilrarKOMMAEO-sc3X2xON4&usqp=CAU&ec=48665699",
    occupation: "Group PM, Bhanzu, Ex-Principal PM, Byju_s"
  },
  {
    name: "Mr. Suhas Motwani",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5uVhtHFjPiDeNaYYtnFuN_zOCAlQexFWzzVQvKISfg&s",
    occupation: "Founder, The Product Folks"
  }
  // Add more speakers and guests here
];

const Guests = () => {
  return (
    <section id="team" className="pb-5">
      <div className="container">
        <h2 className="guest-title h1">Guests</h2>
        <div className="row">
          {speakers.map((speaker, index) => (
            <div key={index} className="col-xs-12 col-sm-6 col-md-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="card">
                      <div className="card-body my-3 mx-2 text-center">
                        <img src={speaker.photo} alt={speaker.name} />
                        <h3 className="mt-3">{speaker.name}</h3>
                        <p>{speaker.occupation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card">
                      <div className="card-body my-4 mx-4 text-center">
                        <h4 className="card-title">{speaker.name}</h4>
                        <p className="card-text">
                          This is basic card with image on top, title,
                          description and button. This is basic card with image
                          on top, title, description and button. This is basic
                          card with image on top, title, description and button.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guests;
