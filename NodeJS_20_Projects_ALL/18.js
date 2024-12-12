var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
 service : 'email' ,
              auth: {
                           user: 'k@gmail.com',
                          pass:'1234'
                       }
});
var mailOptions={
      from:'abd@g1',
      to: 'bcd@g1,@g2,@g3',
      subject: 'asdfghjkl',
      text: ' hello '
}
transporter.sendMail(mailOptions,function(err,info){
      if(err){
       console.log(err);
      }
      else{
          console.log(' Mail Sent '+info.response);
      }
})