import React, { useEffect, useRef } from 'react'
import './AboutHero.css'
import { NavLink } from 'react-router-dom';

// These are imports for scroll trigger
import { gsap, Power4} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const AboutHero = useRef(null);

  useEffect(() => {
      let tl = gsap.timeline({defaults: {ease: Power4.easeInOut, duration:2}})

      tl.fromTo(
          AboutHero.current,
          { 'clip-path': 'polygon(0 100%, 99% 100%, 100% 100%, 0% 100%)', opacity: 0, y: 100 },
          { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }
      );

  }, [])

  return (
    <div className="about-hero-container">
        <div className="about-hero-wrapper" ref={AboutHero}>
            <h1>ABOUT US</h1>
            <p>Zummey is not just another logistics app; it's a movement. Our platform connects logistic bike owners with registered clients, enabling seamless and reliable delivery services tailored to your needs. With Zummey, you can say goodbye to long wait times, exorbitant fees, and unreliable services. We're putting the power back in your hands.</p>
            <NavLink to='/location'><button className="about-download">Use Zummey</button></NavLink>
        </div>
    </div>
  )
}

export default AboutHero