const config = require('config');
const nodemailer = require('nodemailer');

module.exports = async function (message) {

console.log(config.get('mail.host'));
console.log(config.get('mail.auth.user'));
console.log(config.get('mail.auth.pass'));

    let transporter = nodemailer.createTransport({
        host: config.get('mail.host'),
        port: 587,
        secure: false,
        auth: {
            user: config.get('mail.auth.user'),
            pass: config.get('mail.auth.pass')
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    transporter.verify(function(error, success) {
        if(error)  console.log(error);
        else console.log("Server is ready to send");
    });
    
    let info = await transporter.sendMail(message);
    
    console.log("Message send: %s", info.messageId);
}

