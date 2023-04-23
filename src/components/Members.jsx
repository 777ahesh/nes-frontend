import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Members.css";

const MembersPage = () => {
  return (
    <>
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
                  <NavLink className="nav-link" to="/about" >
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
                  <NavLink className="nav-link" to="/">
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
    <div className="Members">
      <div className="container">
        <h1>Our Team</h1>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img alt="people"
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
                ></img>
              </div>
              <div className="team-content">
                <h3 className="name">Michele Miller</h3>
                <h4 className="title">Web Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <NavLink to="/" className="fab fa-facebook" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-twitter" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-google-plus" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-linkedin" aria-hidden="true"></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img alt="people"
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=839"
                ></img>
              </div>
              <div className="team-content">
                <h3 className="name">Patricia Knott</h3>
                <h4 className="title">Web Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <NavLink to="/" className="fab fa-facebook" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-twitter" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-google-plus" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-linkedin" aria-hidden="true"></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img alt="people"
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=856"
                ></img>
              </div>
              <div className="team-content">
                <h3 className="name">Justin Ramos</h3>
                <h4 className="title">Web Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <NavLink to="/" className="fab fa-facebook" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-twitter" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-google-plus" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-linkedin" aria-hidden="true"></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img alt="people"
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=836"
                ></img>
              </div>
              <div className="team-content">
                <h3 className="name">Mary Huntley</h3>
                <h4 className="title">Web Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <NavLink to="/" className="fab fa-facebook" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-twitter" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-google-plus" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-linkedin" aria-hidden="true"></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img alt="people"
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
                ></img>
              </div>
              <div className="team-content">
                <h3 className="name">Michele Miller</h3>
                <h4 className="title">Web Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <NavLink to="/" className="fab fa-facebook" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-twitter" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-google-plus" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-linkedin" aria-hidden="true"></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img alt="people"
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=839"
                ></img>
              </div>
              <div className="team-content">
                <h3 className="name">Patricia Knott</h3>
                <h4 className="title">Web Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <NavLink to="/" className="fab fa-facebook" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-twitter" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-google-plus" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-linkedin" aria-hidden="true"></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img alt="people"
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=856"
                ></img>
              </div>
              <div className="team-content">
                <h3 className="name">Justin Ramos</h3>
                <h4 className="title">Web Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <NavLink to="/" className="fab fa-facebook" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-twitter" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-google-plus" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-linkedin" aria-hidden="true"></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img alt="people"
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=836"
                ></img>
              </div>
              <div className="team-content">
                <h3 className="name">Mary Huntley</h3>
                <h4 className="title">Web Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <NavLink to="/" className="fab fa-facebook" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-twitter" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-google-plus" aria-hidden="true"></NavLink>
                </li>
                <li>
                  <NavLink to="/" className="fab fa-linkedin" aria-hidden="true"></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MembersPage;
