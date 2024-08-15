import React, { useEffect, useRef }from 'react'
import { NavLink } from 'react-router-dom';
import css from './Hero.module.css'
import appStore from '../../../assets/app-store.png'
import googleStore from '../../../assets/google-store.png'
import heroBoth from '../../../assets/hero-both.png'
import payment from '../../../assets/payed.png'
import delivered from '../../../assets/delivered.png'
import star from '../../../assets/hero-star.png'
import service1 from '../../../assets/service1.png'
import service2 from '../../../assets/service2.png'
import service3 from '../../../assets/service3.png'
import trackImg from '../../../assets/track-pic.png'
// import courier1 from '../../../assets/courier1.png'
// import courier2 from '../../../assets/courier2.png'
// import courier3 from '../../../assets/courier3.png'

// This is for font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


// These are imports for scroll trigger
import { gsap, Power4} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

    const heroLeftRef = useRef(null);
    const heroRightRef = useRef(null);
    
  
    useEffect(() => {
        
        let tl = gsap.timeline({defaults: {ease: Power4.easeInOut, duration:2}})

        tl.fromTo(
            heroLeftRef.current,
            { 'clip-path': 'polygon(0 100%, 99% 100%, 100% 100%, 0% 100%)', opacity: 0, y: 100 },
            { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }
        );
    
        // Animations for hero right
        gsap.fromTo(
            heroRightRef.current,
            { opacity: 0, x: 200 },
            { opacity: 1, x: 0, ease: 'power4.inOut', duration: 1.5, delay: 0.5 } // Add a delay of 0.5 seconds
        );
        
        // Annimation for services section starts here
        let mm = gsap.matchMedia();
        mm.add("(min-width: 640px)", () => {
            // This is the animation for main project section
            gsap.fromTo(`.${css.service}`, 
                { y: 100, opacity: 0 }, // From values
                { y: 0, opacity: 1, stagger: 0.2, duration: 0.5, 
                    scrollTrigger: {
                        trigger: `.${css.service}`,
                        start: "top 80%",
                    }
                } // To values
            );
        });

        mm.add("(max-width: 639px)", () => {
            const services = gsap.utils.toArray(`.${css.service}`);
            services.forEach(service => {
                service,
                gsap.fromTo(service, 
                    { y: 150, opacity: 0 }, // From values
                    { y: 0, opacity: 1, delay: 0.2, duration: 1, 
                        scrollTrigger: {
                            trigger: service,
                            start: "top 90%",
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
                start: "top 70%",
            }
        });
        let trackTwo = gsap.timeline({
            scrollTrigger: {
                trigger: `.${css.track_text}`,
                start: "top 70%",
            }
        });
        
        trackOne.to(`.${css.track_image}`, {scale: 1, opacity: 1, y: '0'})
            trackTwo.to(`.${css.track_text}`, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: .7}, '+=0.2')
        //Annimation for track section ends here

    }, []);

  return (
    <div className={css.hero_container}>
        <div className={css.hero_pattern}>
            <div className={css.hero_wrapper}>
                <img src={star} alt="" className={css.hero_star} ref={heroLeftRef}/>
                <img src={star} alt="" className={css.hero_star}/>
                <img src={star} alt="" className={css.hero_star}/>
                <div className={`${css.hero_left} `} ref={heroLeftRef}>
                    <h1 style={{lineHeight: 'normal'}} >Bringing the Revolution to <span className={css.logistics_text}>Logistics</span></h1>
                    <p>Our platform connects logistic bike owners with registered clients, enabling seamless and reliable delivery services tailored to your needs.</p>
                    {/* <div className={css.app_download}>
                        <img src={appStore} alt="" />
                        <img src={googleStore} alt="" />
                    </div> */}
                    <NavLink to="/location"><button className={css.order}>Order for a delivery<FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button></NavLink>
                </div>
                <div className={`${css.hero_right} ${css.animate}`} ref={heroRightRef}>
                    <img src={payment} alt="" className={css.payment}/>
                    <img src={delivered} alt="" className={css.delivered}/>
                    <img src={heroBoth} alt="" className={css.hero_both}/>
                </div>
            </div>
        </div>

        {/* This is for the services section, I added it in the hero section because it is not reusable */}
        <div className={css.services_container}>
            <div className={css.services_wrapper}>
                <div className={css.service} >
                    <img src={service1} alt="" />
                    <div className={css.service_text}>
                        <h4>Real-Time Tracking</h4>
                        <span>Track your delivery status in real-time</span>
                    </div>
                </div>
                <div className={css.service} >
                    <img src={service2} alt="" />
                    <div className={css.service_text}>
                        <h4>Reliable Delivery</h4>
                        <span className={css.cuts}>Properly-vetted riders to handle your packages with care and professionalism.</span>
                    </div>
                </div>
                <div className={css.service} >
                    <img src={service3} alt="" />
                    <div className={css.service_text}>
                        <h4>Easy To Use</h4>
                        <span>Hassle-free process from start-to-end of delivery</span>
                    </div>
                </div>
            </div>
        </div>

        {/* This is the section for tracking  */}

        <div className={css.track_container}>
            <div className={css.track_wrapper}>
                <img src={trackImg} alt="" className={css.track_image}/>

                <div className={css.track_text}>
                    <span>Delivery by the hour!</span>
                    <h2><span className={css.track_circle}>Track</span> your delivery progress on the go</h2>
                    <p>Our platform connects logistic bike owners with registered clients, enabling seamless and reliable delivery services tailored to your needs. To ensure that you’re always on top of things, our platform gives you the ability to track your delivery in real-time. Know exactly where your package is, every step of the way. No more guessing or uncertainty. We're putting the power back in your hands, with Zummey, you can track the delivery progress of your package with your phone</p>
                    <a href="#notify" className={css.get_notified}><button>Get notified when we launch our mobile App <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button></a>
                </div>
            </div>
        </div>

        {/* <div className={css.courier_container}>
            <div className={css.courier_container}>
                <h1>Our Courier</h1>

                <div className={css.courier_pics}>
                    <img src={courier1} alt="" />
                    <img src={courier2} alt="" />
                    <img src={courier3} alt="" />
                </div>
            </div>
        </div> */}
    </div>
  )                  
}

export default Hero