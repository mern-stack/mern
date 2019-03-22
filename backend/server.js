const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const application = require("./config/application");
const database = require("./config/database");
const helmet = require("helmet");
const csrf = require("csurf");

const app = new express();
// Boot Application
app.listen(application.port);
// Register Routes
app.use("/", routes);
//Register Middlewares
// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// connect to database
mongoose
  .connect(database.mongoUri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
