const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nico Tailored Therapies' });
});

router.post('/', function(req, res, next){
  //form data, from which form
  // pass to handler to send email/ perhaps keep a database of each form
  // try to use ajax to load the form result instead of the entire page.
  res.render('index');
});

module.exports = router;
