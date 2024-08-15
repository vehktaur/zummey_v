import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

// This is for font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const sendMail = async (e) => {
    e.preventDefault();

    const templateParams = {
      Name,
      Email,
      Message,
    };

    const formDatab = new FormData(e.target);

    emailjs
      .send(
        'service_m96mqzi', 
        'template_9zibr5d', 
        templateParams, 
        'sbw3SopIslxnFkRiO'
      )
      .then(
        (response) => {
          fetch(
            "https://script.google.com/macros/s/AKfycbyfOr4iaLfgmh_7iw7wo4TWtFPaq_Mo03aFC5EdtmhziT8UirwMNc5x2oOyv8mWSS6NdQ/exec",
            {
              method: "POST",
              body: formDatab
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log('Email sent successfully:', data);
            })
            .catch((error) => {
              console.error('Error sending to Google Script:', error);
            });

          toast.success('Your Order has been received', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => {
              setName('');
              setEmail('');
              setMessage('');
            }
          });
        },
        (error) => {
          console.error('Email sending failed:', error);
          toast.error('An error occurred', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1 data-aos="fade-up" data-aos-duration="1000">Contact us!</h1>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className='sub-heading'>
          Just fill this form and we will contact you promptly. Drop us a message at
          <span className="info"> zummeylogistics@gmail.com</span>
        </p>
        <form className="contact-form form2" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" onSubmit={sendMail}>
          <input
            type="text"
            placeholder='Your Name'
            value={Name}
            name='Name'
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder='Your Email'
            value={Email}
            name='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder='Message'
            value={Message}
            name='Message'
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">
            Submit <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{ color: "#ffffff" }} />
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
