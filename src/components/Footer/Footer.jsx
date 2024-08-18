import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import apple from '../../assets/apple.svg';
import android from '../../assets/android.png';

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

          <div className="google-app text-white font-medium">
            <div className="border border-white rounded-[0.54rem] justify-center w-full ~max-w-[9.88rem]/[11.38rem] flex items-center ~gap-2/3 px-4 py-2 h-full">
              <img
                className="block w-full ~max-w-[1.7rem]/[1.81rem]"
                src={apple}
                alt="apple"
              />
              <div>
                <h6 className="~text-[0.6rem]/[0.7rem] leading-[1rem] whitespace-nowrap">
                  Coming soon
                </h6>
                <p className="~text-sm/base text-[1rem] leading-[1rem] whitespace-nowrap">
                  App Store
                </p>
              </div>
            </div>
            <div className="border border-white rounded-[0.54rem] w-full ~max-w-[9.88rem]/[11.38rem] flex justify-center items-center gap-3 px-4 py-2 h-full">
              <img
                className="block w-full ~max-w-[1.7rem]/[1.81rem]"
                src={android}
                alt="android"
              />
              <div>
                <h6 className="~text-[0.6rem]/[0.7rem] leading-[1rem] whitespace-nowrap">
                  Coming soon
                </h6>
                <p className="~text-sm/base text-[1rem] leading-[1rem] whitespace-nowrap">
                  App Store
                </p>
              </div>
            </div>
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
