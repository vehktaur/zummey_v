import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Notified.css'

const Notified = () => {
    const [email, setEmail] = useState('');

    const sendMail = async (e) => {
        e.preventDefault();

        const templateParams = {
            email: email,
        };

        emailjs.send('service_1ky6bu7', 'template_bjlm1xi', templateParams, 'va4ZCj9Iuo2lCelmi')
            .then(() => {
                console.log("success")
                e.target.reset();
                toast.success('Your submission has been received', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }, () => {
                console.log("failure")
                toast.error('An error occurred', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }

    return (
        <div className="notified-container" id='notify'>
            <div className="notified-wrapper">
                <div className="heading">
                    <h1>Get Notified</h1>
                    <p>Be notified when we launch our mobile app.</p>
                </div>
                <div className="form-notified">
                    <form onSubmit={sendMail}>
                        <input 
                            type="email" 
                            placeholder='Enter your email' 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div> 
            </div>
            <ToastContainer />
        </div>
    )
}

export default Notified
