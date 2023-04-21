const controller = {
  index: (req, res) => {
    res.render("index", { user: req.session.user });
  },
  login: (req, res) => {
    req.body.name = req.body.name ? req.body.name : "Jhon Doe";

    req.body.email = req.body.email ? req.body.email : "email@doe.com";

    req.body.color = req.body.color ? req.body.color : "any color";

    req.body.age = req.body.age ? req.body.age : "any age";

    const user = {
      name: req.body.name,
      email: req.body.email,
      color: req.body.color,
      age: req.body.age,
    };

    if (req.body.remember) {
      res.cookie("user_color", req.body.color);
    }

    req.session.user = user;

    res.render("index", { user });
  },
  dashboard: (req, res) => {
    const user = req.session.user;

    res.render("dashboard", { user });
  },
};

module.exports = controller;
