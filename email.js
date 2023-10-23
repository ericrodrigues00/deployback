// emailModule.js
const nodemailer = require('nodemailer');
const path = require('path');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "texticketsexchange@gmail.com",
    pass: "oaio wtpw fglm xssn"
  }
});

async function sendEmailWithAttachment(
    from,
    to,
    subject,
    text,
    pdfFileName,
    pdfFilePath
) {
  const mailOptions = {
    from,
    to,
    subject,
    text,
    attachments: [
      {
        filename: pdfFileName,
        path: pdfFilePath,
        contentType: 'application/pdf'
      }
    ]
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}

const from = "texticketsexchange@gmail.com";
const to = 'maurosdr@hotmail.com';
const subject = 'Emaiuuu';
const text = 'texto';
const pdfFileName = 'example.pdf';
const pdfFilePath = path.join("C:/Users/mauro/Downloads/maurosrd - 611252.pdf");
sendEmailWithAttachment(from, to, subject, text, pdfFileName, pdfFilePath);


module.exports = {
  sendEmailWithAttachment
};
