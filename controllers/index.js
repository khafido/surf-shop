const User = require('../models/user');

module.exports = {
  postRegister(req, res, next) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      image: req.body.image,
    })
    User.register(newUser, req.body.password, function(err){
      if (err) {
        console.log(err);
        return next('failed user registered!, ', err);
      }
      console.log('user registered!');
      res.redirect('/');
    });
  }
}
