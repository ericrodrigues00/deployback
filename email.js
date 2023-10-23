// emailModule.js
const nodemailer = require('nodemailer');
const path = require('path');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port:465,
  auth: {
    user: "texticketsexchange@gmail.com",
    pass: "oaio wtpw fglm xssn"
  }
});

async function main(pdfFileName, pdfFilePath) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "texticketsexchange@gmail.com", // sender address
    to: "maurosdr@hotmail.com", // list of receivers
    subject: "Emaiuuuu", // Subject line
    text: "Hello world?", // plain text body
    attachments: [
      {
        filename: pdfFileName,
        path: pdfFilePath,
        contentType: 'application/pdf'
      }
    ]
  });

  console.log("Message sent: %s", info.messageId);
}

const pdfFileName = 'example.pdf';
const pdfFilePath = path.join("C:/Users/mauro/Downloads/mauro sales dias ramos - 644417.pdf");
main(pdfFileName, pdfFilePath)

module.exports = {
  main
};
