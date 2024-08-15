import React, { useEffect } from 'react'
import './Order.css'
import star from '../../../assets/hero-star.png'
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Order = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
  })

  return (
    <div className="order-container">
        <img src={star} alt="" className='star1'/>
        <img src={star} alt="" className='star2'/>

        <div className="order-wrapper">
            <h1 data-aos="zoom-in">Embrace Peace of Mind</h1>
            <p data-aos="zoom-in">Register today with Zummey and say goodbye to long wait times, high delivery fees, and unreliable services.</p>
            <NavLink to='/contact'><button data-aos="zoom-in">GET IN TOUCH <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button></NavLink>
        </div>
    </div>
  )
}

export default Order