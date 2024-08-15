import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveFormData } from '../ReciptRedux/actions';
import './Location.css';
import { renderEmail } from '@react-email/render';
import nodemailer from 'nodemailer';

const Location = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    recieverName: '',
    senderEmail: '',
    senderNumber: '',
    recieverNumber: '',
    yourLocation: '', // To store sender location coordinates
    dropLocation: '', // To store receiver location coordinates
    yourLocationLat:'',
    yourLocationLong:'',
    dropLocationLat:'',
    dropLocationLong:'',
    distance:'',
  });

  const calculateDistance = (yourLocationLat, yourLocationLong, dropLocationLat, dropLocationLong) => {
    const R = 6371; // Radius of the Earth in kilometers
    const lat1 = yourLocationLat * (Math.PI / 180); // Convert degrees to radians
    const lon1 = yourLocationLong * (Math.PI / 180);
    const lat2 = dropLocationLat * (Math.PI / 180);
    const lon2 = dropLocationLong * (Math.PI / 180);
  
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  // Calculate distance
  const distance = calculateDistance(
    formData.yourLocationLat,
    formData.yourLocationLong,
    formData.dropLocationLat,
    formData.dropLocationLong
  );

  formData.distance = Math.floor(distance);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // If the changed field is related to location, update the corresponding latitude and longitude
    if (name === 'yourLocation' || name === 'dropLocation') {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: value }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            [name + 'Lat']: location.lat(),
            [name + 'Long']: location.lng()
          }));
        }
      });
    }
  };

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const autoCompleteRef1 = useRef();
  const autoCompleteRef2 = useRef();

  const handleAutocompleteSelect = (ref, name) => {
    if (ref.current) {
      ref.current.addListener('place_changed', () => {
        const place = ref.current.getPlace();
        if (!place.geometry || !place.geometry.location) return;
  
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: place.formatted_address,
          [name + 'Lat']: location.lat,
          [name + 'Long']: location.lng,
        }));
      });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      autoCompleteRef1.current = new window.google.maps.places.Autocomplete(
        document.getElementById('senderAddress'),
        { types: ['geocode'] }
      );
      autoCompleteRef2.current = new window.google.maps.places.Autocomplete(
        document.getElementById('dropLocation'),
        { types: ['geocode'] }
      );
  
      handleAutocompleteSelect(autoCompleteRef1, 'yourLocation');
      handleAutocompleteSelect(autoCompleteRef2, 'dropLocation');
    };
  }, []);

  const sendEmail = async () => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: formData.senderEmail,
      subject: 'Delivery Details',
      html: renderEmail(
        <div>
          <h2>Delivery Details</h2>
          <p>Sender Name: {formData.senderName}</p>
          <p>Receiver Name: {formData.recieverName}</p>
          <p>Sender Email: {formData.senderEmail}</p>
          <p>Sender Number: {formData.senderNumber}</p>
          <p>Receiver Number: {formData.recieverNumber}</p>
          <p>Pick up Location: {formData.yourLocation}</p>
          <p>Drop off Location: {formData.dropLocation}</p>
          <p>Distance: {formData.distance} km</p>
        </div>
      )
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Failed to send email.', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { senderNumber, recieverNumber } = formData;

    if (senderNumber.length !== 11 || recieverNumber.length !== 11) {
      alert('Please enter valid 11-digit numbers for both sender and receiver.');
      return;
    }

    dispatch(saveFormData(formData));
    sendEmail(); // Send email before navigating
    navigateTo('/recipt');
  };

  return (
    <div className="location-container">
      <div className="location-wrapper">
        <form className='form' onSubmit={handleSubmit}>
          <h3>Delivery Details</h3>
          <div className="sender-reciever-name">
            <div className="sender-name sender-reciever-same">
              <label htmlFor="senderName">Sender Name</label>
              <input id='senderName' onChange={handleChange} value={formData.senderName} name='senderName' type="text" placeholder='Enter Your name' required pattern="[A-Za-z ]+" title="Please enter only letters (no numbers or special characters)" />
            </div>
            </div>
            <div className="reciever-name sender-reciever-same">
              <label htmlFor="reciever_name">Receiver Name</label>
              <input value={formData.recieverName} onChange={handleChange} name='recieverName' type="text" placeholder='Enter receiver name' required pattern="[A-Za-z ]+" title="Please enter only letters (no numbers or special characters)" />
            </div>
       

          <div className="sender-reciever-email sender-reciever-number">
            <div className="sender-email sender-reciever-same">
              <label htmlFor="sender_email">Sender Number</label>
              <input value={formData.senderNumber} onChange={handleChange} type="number" placeholder='Enter your number' name='senderNumber' id="receiverInput"  required/>
              <span id="error" style={{color: "red"}}></span>
            </div>

            <div className="reciever_email sender-reciever-same">
              <label htmlFor="reciever_email">Receiver Number</label>
              <input value={formData.recieverNumber} onChange={handleChange} type="number" placeholder='Enter receiver number' name='recieverNumber' id="receiverInput2"  required/>
              <span id="error2" style={{color: "red"}}></span>
            </div>
          </div>

          <div className="sender-reciever-email">
            <div className="sender-email sender-reciever-same">
              <label htmlFor="sender_email">Sender Email</label>
              <input value={formData.senderEmail} onChange={handleChange} type="email" placeholder='Enter your email' name='senderEmail' required/>
            </div>
          </div> 
          {/* Sender Address */}
          <div className="sender_address address_same">
            <label htmlFor="senderAddress" className="block text-gray-700 font-bold mb-2">Pick up Location</label>
            <input id="senderAddress" value={formData.yourLocation} onChange={handleChange} type="search" placeholder='Enter your address' name='yourLocation' required/>
            {/* Hidden inputs for latitude and longitude */}
            <input type="hidden" name="yourLocationLat" value={formData.yourLocationLat} />
            <input type="hidden" name="yourLocationLong" value={formData.yourLocationLong} />
          </div>

          {/* Receiver Address */}
          <div className="reciever_address address_same">
            <label htmlFor="dropLocation" className="block text-gray-700 font-bold mb-2">Drop off Location</label>
            <input id="dropLocation" value={formData.dropLocation} onChange={handleChange} placeholder='Enter receiver address' type="search" name='dropLocation' required/>
            {/* Hidden inputs for latitude and longitude */}
            <input type="hidden" name="dropLocationLat" value={formData.dropLocationLat} />
            <input type="hidden" name="dropLocationLong" value={formData.dropLocationLong} />
          </div>

          {/* Distance */}
          <input type="hidden" name="distance" value={formData.distance} />
          <div>
            <button className="next-submit" type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Location;
