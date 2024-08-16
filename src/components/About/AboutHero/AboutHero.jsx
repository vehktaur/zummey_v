import React, { useEffect, useRef } from 'react';
import './AboutHero.css';

import underline from '../../../assets/underline_swirl.svg';

// These are imports for scroll trigger
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const AboutHero = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: Power4.easeInOut, duration: 2 }
    });

    tl.fromTo(
      AboutHero.current,
      {
        'clip-path': 'polygon(0 100%, 99% 100%, 100% 100%, 0% 100%)',
        opacity: 0,
        y: 100
      },
      {
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0
      }
    );
  }, []);

  return (
    <div className="about-hero-container  relative text-white px-5 sm:~px-8/16 pt-[3.69rem] pb-[6.69rem]">
      <div className="absolute inset-0 bg-about-hero brightness-50 z-[-1] " />
      <div
        className="about-hero-wrapper text-center font-poppins max-w-[70rem] mx-auto"
        ref={AboutHero}
      >
        <h1 className="~text-[2rem]/[2.2rem] font-bold relative">
          ABOUT US <span className='block absolute left-[50%] translate-x-[-50%] top-[100%]'><img src={underline} alt="underline" /></span>
        </h1>
        <p className="mt-12">
          At Zummey, we firmly believe that delivery should be a daily part of
          everyone’s lives—accessible, trustworthy, and very affordable for all.
          Our mission is to simplify the way people receive the things they
          need, from everyday essentials such as groceries and drugs to special
          treats from their favourite vendors. We’re committed to making
          deliveries not just convenient but also an integral part of modern
          living, ensuring that everyone, regardless of location or budget, can
          access delivery services easily. From logistics to technology, our
          dedicated team and verified delivery partners handle deliveries to
          ensure that each user gets exceptional service.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
