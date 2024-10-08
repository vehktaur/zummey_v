import React, { useEffect } from 'react';
import './Registration.css';
import regImg from '../../../assets/home-registration-img.png';
import regVector from '../../../assets/reg_vector.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <div className="registration_container">
      <div className="registration_wrapper">
        <div className="registration-text-wrapper">
          <h1>No Stress, No Hassle</h1>

          <div className="registration-process">
            <div
              className="registration-one registration-same"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="registration-number-line">
                <div className="number">1</div>
                <div className="line"></div>
              </div>
              <div className="registration-text">
                <span>Place your order</span>
                <p>
                  Tell us what you want delivered, as you want it delivered.
                </p>
              </div>
            </div>
            <div
              className="registration-two registration-same"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="140"
            >
              <div className="registration-number-line">
                <div className="number">2</div>
                <div className="line"></div>
              </div>
              <div className="registration-text">
                <span>Immediate Contact</span>
                <p>
                  In 2 minutes max, we’ll call you to confirm your delivery
                  order and send your rider.
                </p>
              </div>
            </div>
            <div
              className="registration-three registration-same"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="registration-number-line">
                <div className="number">3</div>
                <div className="line"></div>
              </div>
              <div className="registration-text">
                <span>Delivery in action</span>
                <p>
                  Your rider will move to receive the package and send it to
                  your intended location.
                </p>
              </div>
            </div>
            <div
              className="registration-four registration-same"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <div className="registration-number-line">
                <div className="number">4</div>
                <div className="line"></div>
              </div>
              <div className="registration-text">
                <span>Confam!</span>
                <p>You’ll get notified once your delivery is completed. </p>
              </div>
            </div>
          </div>

          <a href="#notify" className="block">
            <button className="btn-flex mt-12" data-aos="fade-right">
              Start using Zummey{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                bounce
                size="sm"
                style={{ color: '#ffffff' }}
              />
            </button>
          </a>
        </div>

        <div
          className="home-registration-img mx-auto md:mx-0 mt-8 md:mt-0"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={regImg} alt="" className="registration-img-main" />
          <img
            src={regVector}
            alt=""
            className=" w-[1000rem] rotate-[10deg] h-[33rem] hidden xl:block xl:scale-x-[1.9] right-[109.5%] top-[30%] absolute"
          />
        </div>

        <div className="mobile_btn mt-4">
          <a href="#notify" className="get_notified">
            <button className="btn-flex" data-aos="fade-right">
              Start using Zummey{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                bounce
                size="sm"
                style={{ color: '#ffffff' }}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
