import React, { useEffect } from 'react'
import './AboutWe.css'
import AboutWePic from '../../../assets/about-we-img.png'
import star from '../../../assets/hero-star.png'
import regVector from '../../../assets/home-registration-vector.png'

// These are imports for scroll trigger
import { gsap, Power4} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutWe = () => {
  useEffect(() => {

    //Annimation for Who we are section starts here
    let trackOne = gsap.timeline({
      scrollTrigger: {
        trigger: '.About-we-img-main',
        start: "top 70%",
      },
    });
    let trackTwo = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-we-left',
        start: "top 70%",
      },
      defaults: {
        ease: Power4.easeInOut,
      }
    });

    let mm = gsap.matchMedia();
    mm.add("(min-width: 888px)", () => {
      trackTwo.to('.about-we-left', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
        .to('.About-we-img-main', {scale: 1, opacity: 1, y: '0', duration:1}, '-=0.2')
    });

    mm.add("(max-width: 887px)", () => {
      trackTwo.to('.about-we-left', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
      trackOne.to('.About-we-img-main', {scale: 1, opacity: 1, y: '0', duration:1})
    })
    
    
    
  }, [])
  return (
    <div className="about-we-container">
        <img src={star} alt="" className='about-we-star'/>
        <div className="about-we-wrapper">
            <div className="about-we-left">
              <h1>Who Are We?</h1>
              <p>By offering a reliable and fast delivery service for businesses and individuals, Zummey is revolutionising logistics, one delivery at a time. Our platform connects registered clients with properly vetted logistic bike owners, providing secure and seamless delivery solutions. With Zummey, you can easily track the progress of the delivery of your packages on your phone and other devices, ensuring a hassle-free experience.</p>
            </div>
            <div className="registration-img">
                <img src={AboutWePic} alt="" className='About-we-img-main'/>
                <img src={regVector} alt="" className='about-reg-vector'/>
           </div>
        </div>
    </div>
  )
}

export default AboutWe