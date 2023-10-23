const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'Gmail', 'Outlook', 'Yahoo', etc.
  auth: {
    user: "texticketsexchange@gmail.com", // Your email address
    pass: "oaio wtpw fglm xssn" // Your email password or app-specific password 
}
});

// Email data
function sendEmailWithAttachment(
    from,
    to,
    subject,
    text
  ) {
    // Email data
    const mailOptions = {
      from,
      to,
      subject,
      text
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email: ' + error);
        res.status(500).json({ error: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Pika2');
      }
    });
  }
  

module.exports = {
    sendEmailWithAttachment
};

