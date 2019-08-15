const nodemailer = require('nodemailer');

module.exports = async function (message) {

    let transporter = nodemailer.createTransport({
        host: "mail.nicotailoredtherapies.co.uk",
        port: 587,
        secure: false,
        auth: {
            user: "daniel@nicotailoredtherapies.co.uk",
            pass: "nico1-daniel"
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

