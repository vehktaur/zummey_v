import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Hero.module.css';
import appStore from '../../../assets/app-store.png';
import googleStore from '../../../assets/google-store.png';
import heroBoth from '../../../assets/hero-both.png';
import rider from '../../../assets/hero_rider.jfif';
import heroPackage from '../../../assets/hero_package.png';
import payment from '../../../assets/payed.png';
import delivered from '../../../assets/delivered.png';
import star from '../../../assets/hero-star.png';
import underline from '../../../assets/underline_swirl.svg';

// This is for font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// These are imports for scroll trigger
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroLeftRef = useRef(null);
  const heroRightRef = useRef(null);

  const words = [
    'Food',
    'Clothing',
    'Medicine',
    'Waybill',
    'Gadgets',
    'Accessories',
    'Waybill'
  ];

  const [word, setWord] = useState(0);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: Power4.easeInOut, duration: 2 }
    });

    tl.fromTo(
      heroLeftRef.current,
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

    // Animations for hero right
    gsap.fromTo(
      heroRightRef.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, ease: 'power4.inOut', duration: 1.5, delay: 0.5 } // Add a delay of 0.5 seconds
    );

    // Annimation for services section starts here
    let mm = gsap.matchMedia();
    mm.add('(min-width: 640px)', () => {
      // This is the animation for main project section
      gsap.fromTo(
        `.${css.service}`,
        { y: 100, opacity: 0 }, // From values
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: `.${css.service}`,
            start: 'top 80%'
          }
        } // To values
      );
    });

    mm.add('(max-width: 639px)', () => {
      const services = gsap.utils.toArray(`.${css.service}`);
      services.forEach((service) => {
        service,
          gsap.fromTo(
            service,
            { y: 150, opacity: 0 }, // From values
            {
              y: 0,
              opacity: 1,
              delay: 0.2,
              duration: 1,
              scrollTrigger: {
                trigger: service,
                start: 'top 90%'
              }
            } // To values
          );
      });
    });
    // Annimation for services section ends here

    //Annimation for track section starts here
    let trackOne = gsap.timeline({
      scrollTrigger: {
        trigger: `.${css.track_image}`,
        start: 'top 70%'
      }
    });
    let trackTwo = gsap.timeline({
      scrollTrigger: {
        trigger: `.${css.track_text}`,
        start: 'top 70%'
      }
    });

    trackOne.to(`.${css.track_image}`, { scale: 1, opacity: 1, y: '0' });
    trackTwo.to(
      `.${css.track_text}`,
      {
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 0.7
      },
      '+=0.2'
    );
    //Annimation for track section ends here
  }, []);

  useEffect(() => {
    const toggleWords = () => {
      if (word >= 6) {
        setWord(0);
      } else {
        setWord((prev) => prev + 1);
      }
    };

    const intervalId = setInterval(toggleWords, 2000);

    return () => clearInterval(intervalId);
  }, [word, words.length]);

  return (
    <div className={css.hero_container}>
      <div className={css.hero_pattern}>
        <div className={css.hero_wrapper}>
          <img src={star} alt="" className={css.hero_star} ref={heroLeftRef} />
          <img src={star} alt="" className={css.hero_star} />
          <img src={star} alt="" className={css.hero_star} />
          <div className={`${css.hero_left} `} ref={heroLeftRef}>
            <h1 style={{ lineHeight: 'normal' }}>
              Get <span className={css.orange__text}>{words[word]}</span>{' '}
              Delivered in Minutes
            </h1>
            <p>
              We make your deliveries happen fast, easy and cheap. Make a
              delivery anywhere in Benin City for as low as 400 naira now!
            </p>
            <NavLink to="/location">
              <button className={css.order}>
                Make a Delivery Now
                <FontAwesomeIcon
                  icon={faArrowRight}
                  bounce
                  size="sm"
                  style={{ color: '#ffffff' }}
                />
              </button>
            </NavLink>
            <p className={`${css.call__text} pb-6`}>
              Call us for a delivery instead:{' '}
              <strong className="inline-block relative">
                09068499532
                <span className="absolute inline-block h-[8rem] right-3 top-[115%] left-3">
                  <img className="block" src={underline} alt="underline" />
                </span>
              </strong>
            </p>
          </div>
          <div
            className={`${css.hero_right} ${css.animate}`}
            ref={heroRightRef}
          >
            <img src={payment} alt="" className={css.payment} />
            <img src={delivered} alt="" className={css.delivered} />
            <div className="flex gap-6 items-center">
              <div className="h-[22.68rem] w-[15rem] rounded-[77.5rem] overflow-hidden border-[length:3px] border-zummey-orange">
                <img
                  src={heroPackage}
                  alt=""
                  className="w-full block h-full object-cover"
                />
              </div>
              <div className="h-[30rem] w-[18rem] rounded-[77.5rem] overflow-hidden border-[length:3px] border-zummey-orange">
                <img
                  src={rider}
                  alt=""
                  className="w-full block h-full object-cover scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
