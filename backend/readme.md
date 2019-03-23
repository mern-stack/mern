## Send Email
```js
let user = {};
  user.email = "hello@gma.com";
  mail.send({
    user,
    subject: "Reset your password",
    resetURL: `<a href="login.com">Reset your password</a>`,
    filename: "password-reset"
  });

```