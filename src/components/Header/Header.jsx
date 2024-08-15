import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import mobile_logo from '../../assets/mobile-logo.png';
import hamburger from '../../assets/hamburger.png';
import hamburgerX from '../../assets/hamburger-x.png';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);

  const handleImageClick = () => {
    setShowHamburger((prevState) => !prevState);
    console.log(showHamburger);
  };

  document.onclick = function (clickEvent) {
    if (
      clickEvent.target.className !== 'mobile-link' &&
      clickEvent.target.id !== 'hamburger' &&
      clickEvent.target.className !== 'nav-wrapper' &&
      clickEvent.target.className !== 'nav-link-main' &&
      clickEvent.target.className !== `mobile-link mobile` &&
      clickEvent.target.className !== `nav-container  nav-mobile`
    ) {
      setShowHamburger(true);
    }
  };

  const handleScroll = () => {
    const scrollThreshold = 0;

    if (window.scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.2 } });

    if (showHamburger) {
      // Animate in when hamburger is shown
      tl.to('.mobile-link li:nth-child(1)', { opacity: 0, y: -50 }, '-=0.1');
      tl.to('.mobile-link li:nth-child(2)', { opacity: 0, y: -50 }, '-=0.1');
      tl.to('.mobile-link li:nth-child(3)', { opacity: 0, y: -50 }, '-=0.1');
      tl.to('.mobile-link .download', { opacity: 0, x: -100 }, '-=0.1');
    } else {
      // Animate out when hamburger is hidden
      tl.to('.mobile-link li:nth-child(1)', { opacity: 1, y: 0 }, '-=0.1');
      tl.to('.mobile-link li:nth-child(2)', { opacity: 1, y: 0 }, '-=0.1');
      tl.to('.mobile-link li:nth-child(3)', { opacity: 1, y: 0 }, '-=0.1');
      tl.to('.mobile-link .download', { opacity: 1, x: 0, duration: 0.3 });
    }
  }, [showHamburger]);

  return (
    <div className={`nav-container ${scrolled ? 'backdrop-blur-sm bg-white/30 nav-color' : ''} ${showHamburger == false ? 'nav-mobile' : ''}`}>
      <div className="nav-wrapper">
        
        <NavLink to="/" className="desktop-logo"><img src={logo} alt="" className="desktop-logo" /></NavLink>

        <NavLink to="/" className="mobile-logo"><img src={mobile_logo} alt="" className="mobile-logo" /></NavLink>

        <div className="nav-link desktop-link">
          <ul className='nav-link-main'>
            <li><NavLink className={({ isActive }) => (isActive ? 'active': '')} to="/">Home</NavLink></li>
            <li><NavLink to="/about">About us</NavLink></li>
            {/* <li><NavLink to="javascript:void()">Riders</NavLink></li> */}
            <li><NavLink to="/contact">Contact</NavLink></li>
            
          </ul>
        </div>

        <NavLink to="/location"><button className="download desktop-link">Use Zummey</button></NavLink>

        <div className={`mobile-link ${showHamburger == false ? 'mobile': ''}`}>
          <div className="nav-link">
            <ul className='nav-link-main'>
              <li className='work'><NavLink className={({ isActive }) => (isActive ? 'active': '')} to="/">Home</NavLink></li>
              <li><NavLink to="/about">About us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <NavLink to="/location"><button className="download" data-aos={showHamburger ? 'fade-right' : 'none'}>Use Zummey</button></NavLink>
        </div>

        <div className="menu-icon" onClick={handleImageClick}>
          <img
            src={hamburger}
            alt="Menu"
            className={showHamburger ? 'visible' : 'hidden'}
            id="hamburger"
          />
          <img
            src={hamburgerX}
            alt="Menu"
            className={showHamburger ? 'hidden' : 'visible'}
            id="hamburger"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
