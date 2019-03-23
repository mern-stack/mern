const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const application = require("./config/application");
const database = require("./config/database");
const helmet = require("helmet");
const path = require("path");
const passport = require("passport");

const app = new express();
// Boot Application
app.listen(application.port);
console.log(`Server Started at PORT ${application.port}`);
// view engine setup
// view engine setup
app.set("views", path.join(__dirname, "views")); // this is the folder where we keep our pug files
app.set("view engine", "pug"); // we use the engine pug, mustache or EJS work great too

//Register Middlewares
// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
// Passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// Register Routes
app.use("/", routes);
// connect to database
mongoose
  .connect(database.mongoUri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
