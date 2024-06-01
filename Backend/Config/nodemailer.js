const nodemailer = require("nodemailer");
const ejs = require('ejs');
const path = require('path');
let transporter = nodemailer.createTransport(
{ host:process.env.EMAIL_HOST,
port:process.env.EMAIL_PORT,
secure: false,
auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
}});

let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../View/mailers', relativePath),
        data,
        function (err, template) {
            if (err) {
                console.log('error in rendering template',err);
                return;
            }

            mailHTML = template;
        }
    );

    return mailHTML;
};

module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
};