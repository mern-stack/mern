const mail = require("../../../../email");
exports.page = (req, res) => {
  // let user = {};
  // user.email = "hello@gma.com";
  // mail.send({
  //   user,
  //   subject: "Reset your password",
  //   resetURL: `<a href="login.com">Reset your password</a>`,
  //   filename: "password-reset"
  // });
  return res.json("Mern Starter Version 0.1.0");
};
