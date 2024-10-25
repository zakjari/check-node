require('dotenv').config();
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
  const mailOptions = {
    from: 'zak.jari@gmail.com',
    to: 'zak.jari@gmail.com',
    subject: 'testez Nodemail avec Mailtrap et dotenv',
    text: 'Nodemail avec Mailtrap',
    html: '<h1>bonjour </h1><p>Vous avec bien configuré Nodemailer avec Mailtrap et dotenv</p>'
  };
    transport.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });