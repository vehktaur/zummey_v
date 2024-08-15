import React from 'react'
import './Recipt.css'
import { usePaystackPayment } from 'react-paystack';
import whatsapp from "../../assets/whatsapp.png"
import { useSelector } from 'react-redux';




// const PackagePrintTable = ({ formData }) => {
//     return (
//       <table className="print-table">
//         <tbody>
//           <tr>
//             <td>Sender's Name:</td>
//             <td>{formData.senderName}</td>
//           </tr>
//           <tr>
//             <td>Receiver's Name:</td>
//             <td>{formData.recieverName}</td>
//           </tr>
//           <tr>
//             <td>Sender's Email:</td>
//             <td>{formData.senderEmail}</td>
//           </tr>
//           <tr>
//             <td>Sender's Number:</td>
//             <td>{formData.senderNumber}</td>
//           </tr>
//           <tr>
//             <td>Receiver’s Number:</td>
//             <td>{formData.recieverNumber}</td>
//           </tr>
//           <tr>
//             <td>Your Location:</td>
//             <td>{formData.yourLocation}</td>
//           </tr>
//           <tr>
//             <td>Receiver's Location:</td>
//             <td>{formData.dropLocation}</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   };


const Recipt = () => {
    const formData = useSelector(state => state.form.formData);


    let mydistance=formData.Distance;
    let BaseFee=350;
    let unit=50;
    
    const calculateTotalPrice = (Distance, unitCost, baseFee) => {
        // Calculate the price based on distance and unit cost
        const distanceCost = Distance * unitCost;
        
        // Add the base fee to the calculated distance cost
        const totalPrice = distanceCost + baseFee;
        
        return totalPrice;
      };
      
    
    const calculateDistanceCost = (Distance, unitCost) => {
          // Calculate the distance cost
          const distanceCost = Distance * unitCost;
          return distanceCost;
        };
        
    
    
    
    let dcost=calculateDistanceCost(mydistance,unit);
    
    let chargePrice=calculateTotalPrice(mydistance,unit,BaseFee);
    



    const config = {
        reference: (new Date()).getTime().toString(),
        email: "zummeylogistics@gmail.com",
        amount: chargePrice*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_live_5b47109a06ff2a5f517c6d08ea78584a964e8fe7',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };
    
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
    
    const PaystackPay = () => {
        const initializePayment = usePaystackPayment(config);
        return (
          <div className='pay-container'>
              <button className='pay' onClick={() => {
                  initializePayment(onSuccess, onClose)
              }}>Pay</button>
          </div>
        );
    };
    


    

    const handlePrint = () => {
        window.print();
      };




  return (
    <div className="recipt-container">
        <a href="https://wa.me/09068499532" className='whatsapp-link'>
            <div className="whatsapp">
                <img src={whatsapp} alt=""/>
                
            </div>
        </a>
        
        <div className="recipt-wrapper">
            <h1 className='order-heading'>Order Summary</h1>
            <div className="order-summary">
              
                <div className="sender-name recipt-same">
                    <p>Sender's Name:</p>
                    <p>{formData.SenderName}</p>
                </div>
                
                <div className="reciever-name recipt-same">
                    <p>Recievers Name: </p>
                    <p>{formData.RecieverName}</p>
                </div>
                <div className="sender-email recipt-same">
                    <p>Sender's Email:</p>
                    <p>{formData.SenderEmail}</p>
                </div>
                <div className="sender-number recipt-same">
                    <p>Receiver’s Number:</p>
                    <p>{formData.SenderNumber}</p>
                </div>
                <div className="reciever-number recipt-same">
                    <p>Receiver’s Number:</p>
                    <p>{formData.RecieverNumber}</p>
                </div>
                <div className="your-location recipt-same">
                    <p>Pick up Location:</p>
                    <p>{formData.YourLocation}</p>
                </div>
                <div className="reciever-location recipt-same">
                    <p>Drop off Location:</p>
                    <p>{formData.DropLocation}</p>
                </div>
           </div>
            <h1>Cost Break Down</h1>
            <div className="cost-breakdown">
                <p><span>Base Fee: </span> <span className="value">#...</span></p>
                <p><span>Cost/Km: </span> <span className="value">#...</span></p>
                <p className='bold'><span>TOTAL COST:  </span> <span className="value">#{chargePrice}</span></p>
            </div>
            <PaystackPay />

            {/* <button className="print-button" onClick={handlePrint}>
                Print Package Information
            </button> */}
        </div>
    </div>
  )
}

export default Recipt