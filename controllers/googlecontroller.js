
exports.googleSuccess = (req, res) => {
  req.sso = 'google'
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
};

exports.googleFailed =  (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
};
