const nodeMailer = require('../Config/nodemailer');

// this is another way of exporting a method
exports.ForgotPasswordEmail = (user) => {
    let htmlString = nodeMailer.renderTemplate({user : user},'/ForgotPassword.ejs');
       nodeMailer.transporter.sendMail({
          from: 'gavaskark@outlook.com',
          to: user.email,
          subject: "New Comment Published!",
          html: htmlString 
       }, (err, info) => {
           if (err){
               console.log('Error in sending mail', err);
               return;
           }
   
           console.log('Message sent', info);
           return;
       });
   }