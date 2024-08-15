import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveFormData } from '../ReciptRedux/actions';
import './Location.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Location = () => {
  const [formData, setFormData] = useState({
    SenderName: '',
    RecieverName: '',
    SenderEmail: '',
    SenderNumber: '',
    RecieverNumber: '',
    YourLocation: '', // To store sender location coordinates
    DropLocation: '', // To store receiver location coordinates
    //  // Default distance
    YourLocationLat:'',
    YourLocationLong:'',
    DropLocationLat:'',
    DropLocationLong:'',
    Distance:'',
  });

  const calculateDistance = (YourLocationLat, YourLocationLong, DropLocationLat, DropLocationLong) => {
    const R = 6371; // Radius of the Earth in kilometers
    const lat1 = YourLocationLat * (Math.PI / 180); // Convert degrees to radians
    const lon1 = YourLocationLong * (Math.PI / 180);
    const lat2 = DropLocationLat * (Math.PI / 180);
    const lon2 = DropLocationLong * (Math.PI / 180);
  
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const Distance = R * c; // Distance in kilometers
    return Distance;
  };
  

// console.log(formData.yourLocationLat)
// console.log(formData.yourLocationLong)
// console.log(formData.dropLocationLat)
// console.log(formData.dropLocationLong)

  // Calculate distance
  const Distance = calculateDistance(
    formData.YourLocationLat,
    formData.YourLocationLong,
    formData.DropLocationLat,
    formData.DropLocationLong
  );


  // console.log(distance+ "km")
formData.Distance = Math.floor(Distance);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // If the changed field is related to location, update the corresponding latitude and longitude
    if (name === 'YourLocation' || name === 'DropLocation') {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: value }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;
          setFormData(({
            ...formData,
            [name]: value,
            [name + 'Lat']: location.lat(),
            [name + 'Long']: location.lng()
          }));
        }
      });
    }
  };




  // Update formData with the calculated distance
  const updatedFormData = {
    ...formData,
    Distance: Distance.toFixed(2) // Convert distance to string with 2 decimal places
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
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAYMC8rxqvFYluFdt1oKOzN-hk3A-uh0kU&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      autoCompleteRef1.current = new window.google.maps.places.Autocomplete(
        document.getElementById('SenderAddress'),
        { types: ['geocode'], componentRestrictions: { country: 'NG' } }
      );
      autoCompleteRef2.current = new window.google.maps.places.Autocomplete(
        document.getElementById('DropLocation'),
        { types: ['geocode'], componentRestrictions: { country: 'NG' } }
      );
  
      handleAutocompleteSelect(autoCompleteRef1, 'YourLocation');
      handleAutocompleteSelect(autoCompleteRef2, 'DropLocation');
    };
  }, []);
 
  
  const sendEmail = (e) => {
    e.preventDefault();
    // Send email using emailjs
    const { SenderNumber, RecieverNumber } = formData;

    if (!(SenderNumber.length >= 11) && !(RecieverNumber.length >= 11)) {
      alert('Please enter valid 11-digit numbers for both sender and receiver.');
      return
    }

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    emailjs
      .send(
        'service_1ky6bu7',
        'template_6bu5i3q',
        formData,
        'va4ZCj9Iuo2lCelmi' 
      )
      .then(
        (response) => {

          fetch(
            "https://script.google.com/macros/s/AKfycbwRkt5xkT9pUgMXsekgs2RDrodN7CwAkQUjh8YimMPKH8Q7fMwBaUGySMHRWupzB9jY/exec",
            {
              method: "POST",
              body: formDatab
            }
          ).then((res) => res.json())
            
            .then((data) => {
              console.log('Email sent successfully:', data);
            })
            .catch(() => {
              return
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
                dispatch(saveFormData(formData));
                navigateTo('/receipt');
              }
            })


          // dispatch(saveFormData(formData));
          // navigateTo('/recipt');
        },
        (error) => {
          console.error('Email sending failed:', error);
          toast.error('An error occured', {
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
 
 
 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
      
        // const { senderNumber, recieverNumber } = formData;

        // if (senderNumber.length !== 11 || recieverNumber.length !== 11) {
        //   alert('Please enter valid 11-digit numbers for both sender and receiver.');
        //   return;
        // }

        // dispatch(saveFormData(formData));
        // navigateTo('/recipt');
    
  // };

  return (
    <div className="location-container">
      <div className="location-wrapper">
        <form className='form'  onSubmit={sendEmail}>
          <h3>Delivery Details</h3>
          <div className="sender-reciever-name">
            <div className="sender-name sender-reciever-same">
              <label htmlFor="senderName">Sender Name</label>
              <input id='senderName' onChange={handleChange} value={formData.SenderName} name='SenderName' type="text" placeholder='Enter Your name' required pattern="[A-Za-z ]+" title="Please enter only letters (no numbers or special characters)" />
            </div>
            </div>
            <div className="reciever-name sender-reciever-same">
              <label htmlFor="reciever_name">Receiver Name</label>
              <input value={formData.RecieverName} onChange={handleChange} name='RecieverName' type="text" placeholder='Enter receiver name' required pattern="[A-Za-z ]+" title="Please enter only letters (no numbers or special characters)" />
            </div>
       

          <div className="sender-reciever-email sender-reciever-number">
            <div className="sender-email sender-reciever-same">
              <label htmlFor="sender_email">Sender Number</label>
              <input value={formData.SenderNumber} onChange={handleChange} type="tel" placeholder='Enter your number' name='SenderNumber' id="receiverInput"  required/>
              <span id="error" style={{color: "red"}}></span>
            </div>

            <div className="reciever_email sender-reciever-same">
              <label htmlFor="reciever_email">Receiver Number</label>
              <input value={formData.RecieverNumber} onChange={handleChange} type="tel" placeholder='Enter receiver number' name='RecieverNumber' id="receiverInput2"  required/>
              <span id="error2" style={{color: "red"}}></span>
            </div>
          </div>

          <div className="sender-reciever-email">
            <div className="sender-email sender-reciever-same">
              <label htmlFor="sender_email">Sender Email</label>
              <input value={formData.SenderEmail} onChange={handleChange} type="email" placeholder='Enter your email' name='SenderEmail' required/>
            </div>
          </div>
          {/* Sender Address */}
          <div className="sender_address address_same">
            <label htmlFor="senderAddress" className="block text-gray-700 font-bold mb-2">Pick up Location</label>
            <input id="SenderAddress" value={formData.YourLocation} onChange={handleChange} type="search" placeholder='Enter your address' name='YourLocation' required/>
            {/* Hidden inputs for latitude and longitude */}
            <input type="hidden" name="YourLocationLat" value={formData.YourLocationLat} />
            <input type="hidden" name="YourLocationLong" value={formData.YourLocationLong} />
          </div>
          {/* Receiver Address */}
          <div className="reciever_address address_same">
            <label htmlFor="dropLocation" className="block text-gray-700 font-bold mb-2">Drop off Location</label>
            <input id="DropLocation" value={formData.DropLocation} onChange={handleChange} placeholder='Enter receiver address' type="search" name='DropLocation' required/>
            {/* Hidden inputs for latitude and longitude */}
            <input type="hidden" name="DropLocationLat" value={formData.DropLocationLat} />
            <input type="hidden" name="DropLocationLong" value={formData.DropLocationLong} />
          </div>

          {/* Distance */}
          <input type="hidden" name="Distance" value={formData.Distance} />
          <div>
          
            
          </div>
          <button className="next-submit">Next</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Location;