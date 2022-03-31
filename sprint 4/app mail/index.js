var nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_ACCOUNT,
    pass: process.env.GOOGLE_APP_PASSWORD
  }
});

var mailOptions = {
  from: 'youremail@gmail.com', // irrelevant, it will be your email
  to: 'omarolmedoferrer@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!', // plain text body, can be also html
  html: `<h1>Welcome 😎</h1>
        <p>That was easy!</p>
        <p>This is a test email</p>
        <small>Copyright Omar Olmedo Ferrer © 2022</small>` // html body
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});