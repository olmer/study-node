const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed to login',
  successRedirect: '/',
  successFlash: 'Logged in'
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'Logged out');
  res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  req.flash('error', 'You should be logged in');
  res.redirect('/login');
};
