import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import appStore from '../../assets/app-store.png';
import googleStore from '../../assets/google-store.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-top">
          <NavLink to="/" className="desktop-logo">
            <img className="logo" src={logo} alt="" />
          </NavLink>

          <div className="google-app">
            <img src={appStore} alt="" />
            <img src={googleStore} alt="" />
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="rights footer-same">
            &copy; Copyright 2024 Zummey Logistics. All rights reserved
          </div>

          <div className="social-icons footer-same">
            <a
              href="https://web.facebook.com/profile.php?id=61554043081487"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="social-icon"
              />
            </a>
            <a href="https://twitter.com/ZummeyLogistics" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="social-icon"
              />
            </a>
            <a href="https://www.instagram.com/officialzummey/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="social-icon"
              />
            </a>
          </div>

          <ul className="footer-link footer-same">
            <li>Terms & Privacy</li>
            <li>Cookies</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
