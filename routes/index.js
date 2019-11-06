var express = require('express');
var router = express.Router();
const app  = require('../controllers/app.contoller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Scrum Process',
    value: ''
  });
});

router.post('/fizzbuzz/', app.fizzBuzz)
router.post('/maxchar/', app.maxChar)
router.post('/palindrome/', app.palindrome)
router.post('/reverseint/', app.reverseInt)
router.post('/vowels/', app.vowels)

module.exports = router;
