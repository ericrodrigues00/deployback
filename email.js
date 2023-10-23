// emailModule.js
const nodemailer = require('nodemailer');
const path = require('path');

const CreateMailTransporter = () =>{
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port:465,
  auth: {
    user: "texticketsexchange@gmail.com",
    pass: "oaio wtpw fglm xssn"
  }
});
  return transporter;
}
async function main(pdfFileName, pdfFilePath) {
  const transporter = CreateMailTransporter();
  
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


module.exports = {
  main
};
