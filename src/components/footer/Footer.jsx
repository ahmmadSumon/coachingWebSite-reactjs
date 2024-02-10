// src/components/Footer.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import "../footer/footer.scss"
const Footer = () => {
  return (
    <div>
      <footer className='container'>
      
          <div className="row footer-row">
            <div className="col-md-4 footer-col-left">
              <img className="img-fluid logo pointer-event" src={logo} alt="" />
              <p>
                Design amazing digital experiences that <br /> create more happy in the world.
              </p>
            </div>
            <div className="col-md-4 footer-col-middle">
              <h5>Pages</h5>
              <div className="link">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/sales">Extra Sales/ Landingpage</NavLink>
                <NavLink to="/guide">Free guide</NavLink>
              </div>
            </div>
            <div className="col-md-4 footer-col-right">
              <h5>Contact</h5>
              <div className="link">
                <Link to="#">+123 456 789</Link>
                <Link to="#">hello@gmail.com</Link>
                <Link to="#">Instagram</Link>
                <Link to="#">LinkedIn</Link>
              </div>
            </div>
          </div>

      </footer>
    </div>
  );
};

export default Footer;
