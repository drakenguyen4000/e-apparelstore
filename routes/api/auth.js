const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcryptjs"),
  config = require("config"),
  jwt = require("jsonwebtoken"),
  auth = require("../../middleware/auth"),
  User = require("../../models/User");
  
//Index Route
router.post("/auth", (req, res) => {
  const { name, password } = req.body;
  //simple validation
  if (!name || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //Check for existing user
  User.findOne({ name }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exists" });

    //Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      jwt.sign(
        {
          id: user._id,
        },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              _id: user._id,
              name: user.name,
            },
          });
        }
      );
    });
  });
});

//persist
router.get("/users", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
