// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import '../navBar/navBar.scss';
import Button from '../button/Button';

const NavBar = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavbarToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('no-scroll', isMobileMenuOpen);
    document.querySelector('.navbar-links').classList.toggle('show', isMobileMenuOpen);
  };

  const closeNavbar = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('no-scroll');
    document.querySelector('.navbar-links').classList.remove('show');
  };

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isMobileMenuOpen) {
        e.preventDefault();
      }
    };

    document.body.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.body.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar ${isNavbarFixed ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img className="img-fluid logo pointer-event" src={logo} alt="" />
          </Link>
          <button
            className="navbar-menuBtn"
            type="button"
            onClick={handleNavbarToggle}
          >
            <span className="navbar-menuBtn-icon">&#9776;</span>
          </button>

          <div className={`navbar-links ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className='nav-link' exact onClick={closeNavbar}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className='nav-link' onClick={closeNavbar}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className='nav-link' onClick={closeNavbar}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sales" className='nav-link' onClick={closeNavbar}>
                  Extra Salespage
                </NavLink>
              </li>
            </ul>
            <Button insideText = 'Get your free guide now' onClick={closeNavbar}/>
            

  

            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
