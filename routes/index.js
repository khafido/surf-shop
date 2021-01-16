const express = require('express');
const router = express.Router();
const passport = require('passport');
const { postRegister } = require('../controllers/index');
const { errorHandler } = require('../middleware/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Surf Shop - Home' });
});

// GET /register
router.get('/register', function(req, res, next){
  res.send('GET /register');
});

// POST /register
router.post('/register', errorHandler(postRegister));

// GET /login
router.get('/login', function(req, res, next){
  res.send('GET /login');
});

// POST /login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

// GET /profile
router.get('/profile', function(req, res, next){
  res.send('GET /profile');
});

// PUT /profile/:user_id
router.put('/profile/:user_id', function(req, res, next){
  res.send('PUT /profile/:user_id');
});

// GET /forgot-pw
router.get('/forgot-pw', function(req, res, next){
  res.send('GET /forgot-pw');
});

// PUT /forgot-pw
router.put('/forgot-pw', function(req, res, next){
  res.send('PUT /forgot-pw');
});

// GET /reset-pw
router.get('/reset-pw/:token', function(req, res, next){
  res.send('GET /reset-pw/:token');
});

// PUT /reset-pw
router.put('/reset-pw/:token', function(req, res, next){
  res.send('PUT /reset-pw/:token');
});

// GET /logout
router.get('/logout', function (req, res, next){
  req.logout;
  res.redirect("/");
});

module.exports = router;
