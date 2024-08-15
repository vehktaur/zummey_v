// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { senderEmail, senderName, recieverName, senderNumber, recieverNumber, yourLocation, dropLocation, distance } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your actual email
      pass: 'your-password' // Replace with your actual password
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com', // Replace with your actual email
    to: senderEmail,
    subject: 'Delivery Details',
    html: `
      <h2>Delivery Details</h2>
      <p>Sender Name: ${senderName}</p>
      <p>Receiver Name: ${recieverName}</p>
      <p>Sender Email: ${senderEmail}</p>
      <p>Sender Number: ${senderNumber}</p>
      <p>Receiver Number: ${recieverNumber}</p>
      <p>Pick up Location: ${yourLocation}</p>
      <p>Drop off Location: ${dropLocation}</p>
      <p>Distance: ${distance} km</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Failed to send email.', error);
    res.status(500).send('Failed to send email.');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
