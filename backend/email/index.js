const nodemailer = require("nodemailer");
const pug = require("pug");
const juice = require("juice");
const htmlToText = require("html-to-text");
const email = require("../config/mail");

const transport = nodemailer.createTransport({
  host: email.host,
  port: email.port,
  auth: {
    user: email.username,
    pass: email.password
  }
});

const generateHTML = (filename, options = {}) => {
  const html = pug.renderFile(
    `${__dirname}/../views/email/${filename}.pug`,
    options
  );
  const inlined = juice(html);
  return inlined;
};

exports.send = options => {
  const html = generateHTML(options.filename, options);
  const text = htmlToText.fromString(html);
  const mailOptions = {
    from: email.from,
    to: options.user.email,
    subject: options.subject,
    html,
    text
  };
  return transport.sendMail(mailOptions);
};
