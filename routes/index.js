const express = require('express');
const router = express.Router();
const nodemailer = require("../middleware/nodemailer");


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Nico Tailored Therapies' });
});

router.post('/corporate', function (req, res, next) {

  const email = req.body.email;
  nodemailer({
    from: '"Nico Tailored Therapies" <info@nicotailoredtherapies.co.uk',
    to: "info@nicotailoredtherapies.co.uk",
    subject: "On-site Enquiry -> " + email,
    text: "Onsite Enquiry from: " + email,
    html: "Onsite Enquiry from:<b>" + email + "</b>"
  });
 
  res.send(req.body);
});

router.post('/wanted', function (req, res, next) {

  const email = req.body.email;
  nodemailer({
    from: '"Nico Tailored Therapies" <info@nicotailoredtherapies.co.uk',
    to: "info@nicotailoredtherapies.co.uk",
    subject: "Therapist Wanted Enquiry -> " + email,
    text: "Therapist Enquiry from: " + email,
    html: "Therapist Enquiry from:<b>" + email + "</b>"
  });

  res.send(req.body);
});

router.post('/contact', function (req, res, next) {

  const first = req.body.first;
  const last = req.body.last;
  const email = req.body.email;
  const message = req.body.message;

  nodemailer({
    from: '"Nico Tailored Therapies" <info@nicotailoredtherapies.co.uk',
    to: "info@nicotailoredtherapies.co.uk",
    subject: `Contact Form From  -> ${first} ${last}`,
    text: 
    `Therapist Enquiry from ${first} ${last}.
    ${first}'s email address is ${email}.
    
    Message...
    ${message}`,
    html: 
    `<h1>We got an online &quot;Therapist Enquiry&quot; from ${first} ${last}.</h1>
    <p>${first}'s email address is <strong>${email}</strong>.</p>
    <p><strong>Message...</strong></p>
    <p>${message}</p>`
  });

  res.send(req.body);
});

module.exports = router;
