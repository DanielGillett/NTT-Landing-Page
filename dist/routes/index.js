"use strict";

var express = require('express');

var router = express.Router();

var nodemailer = require("../../middleware/nodemailer");

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Nico Tailored Therapies'
  });
});
router.post('/corporate', function (req, res, next) {
  var email = req.body.email;
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
  var email = req.body.email;
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
  var first = req.body.first;
  var last = req.body.last;
  var email = req.body.email;
  var message = req.body.message;
  nodemailer({
    from: '"Nico Tailored Therapies" <info@nicotailoredtherapies.co.uk',
    to: "info@nicotailoredtherapies.co.uk",
    subject: "Contact Form From  -> ".concat(first, " ").concat(last),
    text: "Therapist Enquiry from ".concat(first, " ").concat(last, ".\n    ").concat(first, "'s email address is ").concat(email, ".\n    \n    Message...\n    ").concat(message),
    html: "<h1>We got an online &quot;Therapist Enquiry&quot; from ".concat(first, " ").concat(last, ".</h1>\n    <p>").concat(first, "'s email address is <strong>").concat(email, "</strong>.</p>\n    <p><strong>Message...</strong></p>\n    <p>").concat(message, "</p>")
  });
  res.send(req.body);
});
module.exports = router;