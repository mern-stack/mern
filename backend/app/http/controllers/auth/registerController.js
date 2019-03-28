const mail = require("../../../../email");
const user = require("../../../models/Users");
const validateRegisterInput = require("../../../validations/auth/register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../../../../config/application").key;

exports.register = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(422).json(errors);
  }
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
        .then(user => res.json("User Created Successfully"))
        .catch(err => console.log(err));
    });
  });
};
