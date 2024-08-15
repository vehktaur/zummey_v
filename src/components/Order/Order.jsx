import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveFormData } from '../ReciptRedux/actions';
import '../Contact/Contact.css'
// import locate from '../../assets/locate.png'
// import map from '../../assets/Map.png'
import './Order.css'

// This is for font awesome
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

    const [formData, setFormData] = useState({
      senderName: '',
      recievernumber: '',
      location: '',
      dropLocation: '',
      recieverName: '',
      recieverNumber: '',
      instruction: ''
    });

    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(saveFormData(formData));
      navigateTo('/location')
    };

  return (
    <div className="contact-container">
        <div className="contact-wrapper order">
            <h1 data-aos="fade-up" data-aos-duration="1000">Use Zummey</h1>
            <p data-aos="fade-up"  data-aos-delay="300" data-aos-duration="1000" className='sub-heading'>Fill the form below to complete your order.</p>
            <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                <input type="text" value={formData.name} name='name' onChange={handleChange} placeholder='Senders Name'  />
                <input type="text" value={formData.number} name='number' onChange={handleChange} placeholder="Sender's Number"/>
                <div className="button-wrapper">
                  <input type="text" value={formData.location} name='location' onChange={handleChange} placeholder='Enter Pick-up Location'/>
                  {/* <div className="pick-up-btn">
                    <p>Find Me</p>
                    <img src={locate} alt="" />
                  </div> */}
                </div>
                <div className="button-wrapper">
                  <input type="text" value={formData.dropLocation} name='dropLocation' onChange={handleChange} placeholder='Enter Drop-off Location'/>
                  {/* <div className="pick-up-btn">
                    <p>Find Me</p>
                    <img src={locate} alt="" />
                  </div> */}
                </div>
               
                
                <input type="text" value={formData.recieverName} name='recieverName' onChange={handleChange} placeholder="Receiver's Name"/>
                <input type="text" value={formData.recieverNumber} name='recieverNumber' onChange={handleChange} placeholder="Receiver's Number"/>
                <input type="text" value={formData.instruction} name='instruction' onChange={handleChange} placeholder="Further Instructions to the Rider"/>
                <button>Next<FontAwesomeIcon icon={faArrowRight} onChange={handleChange} bounce size="sm" style={{color: "#ffffff",}} /></button>
            </form>
        </div>
    </div>
  )
}

export default Order
