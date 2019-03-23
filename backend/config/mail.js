const host = process.env.EMAIL_HOST;
const port = process.env.EMAIL_PORT;
const username = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;
const encryption = process.env.EMAIL_ENCRYPTION;
const from = process.env.FROM;
module.exports = {
  host: host,
  port: port,
  username: username,
  password: password,
  encryption: encryption,
  from: from
};
