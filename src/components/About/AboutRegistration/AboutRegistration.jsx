import React, { useEffect } from 'react'
import './AboutRegistration.css'
import aboutRegImg from '../../../assets/about-registration-img.png'
import star from '../../../assets/hero-star.png'

import { gsap, Power4} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// This is for font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AboutRegistration = () => {
  useEffect(() => {
    let RegistrationOne = gsap.timeline({
      scrollTrigger: {
        trigger: '.reg-img',
        start: "top 70%",
      },
    });
    let RegistrationTwo = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-reg-left',
        start: "top 70%",
      },
      defaults: {
        ease: Power4.easeInOut,
      }
    });

    let mm = gsap.matchMedia();
    mm.add("(min-width: 727px)", () => {
      RegistrationTwo.to('.about-reg-left', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
        .to('.reg-img', {scale: 1, opacity: 1, y: '0', duration:1}, '-=0.6')
    });

    mm.add("(max-width: 726px)", () => {
      RegistrationTwo.to('.about-reg-left', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
      RegistrationOne.to('.reg-img', {scale: 1, opacity: 1, y: '0', duration:1})
    })

  })

  return (
    <div className="about-reg-container">
        <img src={star} alt="" className='about-star'/>
        <div className="about-reg-wrapper">
          <div className="about-reg-left">
            <h1>Easy Registration</h1>
            <p>Whether you're a bike owner or a client, joining the Zummey community is simple and hassle-free. Download our mobile application or access our user-friendly web app to get started.</p>
            <a href="#notify" className='get_notified get_notified_about'><button>Get notified when we launch our mobile App<FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button></a>
          </div>
          <img src={aboutRegImg} alt="" className='reg-img'/>
        </div>
    </div>
  )
}

export default AboutRegistration