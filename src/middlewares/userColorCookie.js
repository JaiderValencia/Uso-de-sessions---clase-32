function color(req, res, next) {
  if (req.cookies.user_color) {
    console.log("hola");
  }

  next();
}

module.exports = color;
