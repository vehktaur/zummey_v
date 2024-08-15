import React, { useEffect } from 'react'
import './Registration.css'
import regImg from '../../../assets/home-registration-img.png'
import regVector from '../../../assets/home-registration-vector.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Registration = () => {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])

    return (
        <div className="registration_container">
            <div className="registration_wrapper">
                <div className="registration-text-wrapper">
                    <h1>Easy Registration</h1>

                    <div className="registration-process">
                        <div className="registration-one registration-same" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                            <div className="registration-number-line">
                                <div className="number">1</div>
                                <div className="line"></div>
                            </div>
                            <div className="registration-text">
                                <span>Log in, or create an account</span>
                                <p>Create an account by providing your name, email address, and phone number.</p>
                            </div>
                        </div>
                        <div className="registration-two registration-same" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="140">
                            <div className="registration-number-line">
                                <div className="number">2</div>
                                <div className="line"></div>
                            </div>
                            <div className="registration-text">
                                <span>Confirm Order</span>
                                <p>Review your order details and confirm. Our dedicated team will quickly process your request and assign a reliable logistics bike provider.</p>
                            </div>
                        </div>
                        <div className="registration-three registration-same" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                            <div className="registration-number-line">
                                <div className="number">3</div>
                                <div className="line"></div>
                            </div>
                            <div className="registration-text">
                                <span>Tracking your orders</span>
                                <p>Track the progress of your delivery through the app's user-friendly interface or stay informed through real-time notifications.</p>
                            </div>
                        </div>
                        <div className="registration-four registration-same" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="250">
                            <div className="registration-number-line">
                                <div className="number">4</div>
                                <div className="line"></div>
                            </div>
                            <div className="registration-text">
                                <span>Review</span>
                                <p>Once your delivery is complete, provide feedback on your experience to help us improve our services. </p>
                            </div>
                        </div>
                    </div>

                    <a href="#notify" className="get_notified"><button className='registration-desktop-download' data-aos="fade-right">Get notified when we launch our mobile App <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{ color: "#ffffff", }} /></button></a>
                </div>

                <div className="home-registration-img" data-aos="zoom-in" data-aos-duration="1000">
                    <img src={regImg} alt="" className='registration-img-main' />
                    <img src={regVector} alt="" className='reg-vector' />
                </div>

                <a href="#notify" className="get_notified"><button className='registration-mobile-download' data-aos="fade-right" >Get notified when we launch our mobile App <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{ color: "#ffffff", }} /></button></a>
            </div>
        </div>
    )
}

export default Registration