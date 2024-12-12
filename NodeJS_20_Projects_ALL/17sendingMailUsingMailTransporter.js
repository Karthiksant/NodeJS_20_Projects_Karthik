var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karthikgammath13@gmail.com',
    // wantedly hidden password
    //its in google drive
    pass: 'wizu'
  }
});

var mailOptions = {
  from: 'karthikgammath13@gmail.com',
  // for multiple ' abcgmail1, defgamil2, sdfgh'
  to: 'kalyankarthik1011@gmail.com,karthiksant8@gmail.com,narasimhabhukya1998@gmail.com',
  subject: 'Im nodeJS eehhh...!',
  text: 'That was easy though !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});