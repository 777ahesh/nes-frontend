import React from "react";
import "./styles/UserForm.css";
// import handleFileSelect from '../js/myfunction';
import { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
function UserForm() {
  const [FName, setFName] = useState("");
  const [MName, setMName] = useState("");
  const [LName, setLName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPh1, setUserPh1] = useState("");
  const [userPh2, setUserPh2] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [city, setCity] = useState("");
  const [userConfirmPass, setConfirmPass] = useState("");

  function checkPass() {
    const pass = userPass;
    const cpass = userConfirmPass;

    if (pass !== cpass) {
      alert("Password does not matched");
    }
  }

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

      <Container className="form-container">
        <form className="form-style">
          <div className="top-container">
            <Row className="name-sec">
              {/* <div className='name-section'> */}
              <div className="input-group">
                <input
                  required={true}
                  type="text"
                  autoComplete="off"
                  className="input"
                  value={FName}
                  onChange={(e) => setFName(e.target.value)}
                />
                <label className="user-label">First Name</label>
              </div>
              <div className="input-group">
                <input
                  className="input"
                  required={true}
                  autoComplete="off"
                  type="text"
                  value={MName}
                  onChange={(e) => setMName(e.target.value)}
                />
                <label className="user-label">Middle Name</label>
              </div>
              <div className="input-group">
                <input
                  className="input"
                  required={true}
                  autoComplete="off"
                  type="text"
                  value={LName}
                  onChange={(e) => setLName(e.target.value)}
                />
                <label className="user-label">Last Name</label>
              </div>
            </Row>
            {/* <Row className='img-sec'>
              <div className='form-image-section'>
                <img id='profile-pic-preview' src={Avatar} alt='Preview' />
                <label htmlFor='profile'>Profile Picture</label>
                <input type='file' id='profile-pic' name='profile-pic'  accept='image/*' onChange={handleFileSelect} className='inputfile' />
                <label htmlFor="profile-pic">Choose a file</label>
              </div>
              
              </Row> */}
          </div>
          <div className="input-group f-width">
            <input
              className="input"
              required={true}
              autoComplete="off"
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label className="user-label">Email ID</label>
          </div>
          <Row className="className= h-width">
            <div className="input-group">
              <input
                className="input"
                required={true}
                autoComplete="off"
                type="password"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
              />
              <label className="user-label">Password</label>
            </div>
          </Row>
          <Row className="h-width">
            <div className="input-group">
              <input
                className="input"
                required={true}
                autoComplete="off"
                type="password"
                value={userConfirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                onBlur={checkPass}
              />
              <label className="user-label">Confirm Password</label>
            </div>
          </Row>
          <Row className="h-width">
            <div className="input-group">
              <input
                className="input"
                required={true}
                autoComplete="off"
                type="text"
                value={userPh1}
                onChange={(e) => setUserPh1(e.target.value)}
              />
              <label className="user-label">Phone No. 1</label>
            </div>
          </Row>
          <Row className="h-width">
            <div className="input-group">
              <input
                className="input optional"
                required={false}
                autoComplete="off"
                type="text"
                value={userPh2}
                onChange={(e) => setUserPh2(e.target.value)}
              />
              <label className="user-label">Phone No. 2</label>
            </div>
          </Row>
          <div className="input-group f-width">
            <input
              className="input"
              required={true}
              autoComplete="off"
              type="text"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
            />
            <label className="user-label">College Name</label>
          </div>
          <div className="input-group f-width">
            <input
              className="input"
              required={true}
              autoComplete="off"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label className="user-label">City</label>
          </div>
          <div className="input-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default UserForm;
