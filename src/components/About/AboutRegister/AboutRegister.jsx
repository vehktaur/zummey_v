import React, { useEffect } from 'react'
import aboutRegisterImg from '../../../assets/about-register-img.png'
import vector from '../../../assets/about-register-vector.png'
import './AboutRegister.css'
// This is for font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { gsap, Power4} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutRegister = () => {

  useEffect(() => {
    let RegistrationOne = gsap.timeline({
      scrollTrigger: {
        trigger: '.aboutRegisterImg',
        start: "top 70%",
      },
    });

    let RegistrationTwo = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-register-text',
        start: "top 70%",
      },
      defaults: {
        ease: Power4.easeInOut,
      }
    });

    let mm = gsap.matchMedia();
    mm.add("(min-width: 915px)", () => {
      RegistrationOne.to('.aboutRegisterImg', {scale: 1, opacity: 1, y: '0', duration:1})
        .to('.about-register-text', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1}, '-=0.7')
        .to(".about-register-text", {'clip-path': 'none'})
        .to(".vector", {x:0, opacity:1}, '-=0.6')
    });

    mm.add("(max-width: 914px)", () => {
      RegistrationTwo.to('.about-register-text', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
      RegistrationOne.to('.aboutRegisterImg', {scale: 1, opacity: 1, y: '0', duration:1})
    })

  }, [])
  
  return (
    <div className="about-register-container">
        <div className="about-register-wrapper">
            <button className='mobile-register-download-btn'>Get notified when we launch our mobile Appad App <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button>
            <img src={aboutRegisterImg} alt="" className='aboutRegisterImg' />

            <div className="about-register-text">
                <h1>Sign in / <span className="span-register">Register</span></h1>
                <p>Join our community of satisfied customers and enjoy the benefits of convenient, safe, and efficient deliveries. Start requesting your logistics bikes now and discover a whole new level of convenience. Trust Zummey to improve your logistics experience today.</p>
                <div className="button-vector">
                <a href="#notify" className='get_notified get_notified_about'><button>Get notified when we launch our mobile App<FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button></a>
                  <img src={vector} alt="" className='vector'/>
                </div>
            </div> 
            
        </div>
    </div>
  )
}

export default AboutRegister