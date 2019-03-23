const mail = require("../../../../email");
const user = require("../../../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../../../../config/application").key;

exports.register = (req, res) => {
  const users = new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(users.password, salt, (err, hash) => {
      if (err) throw err;
      users.password = hash;
      users
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
  });
};

exports.login = (req, res) => {
  // Find user by email
  user.findOne({ email: req.body.email }).then(user => {
    // Check for user
    if (!user) {
      // errors.email = "User not found";
      return res.status(404).json("user not found");
    }

    // Check Password
    bcrypt.compare(req.body.password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, email: user.email }; // Create JWT Payload

        // Sign Token
        jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
          return res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        // errors.password = "Password incorrect";
        return res.status(400).json("Password Incorrect");
      }
    });
  });
};
