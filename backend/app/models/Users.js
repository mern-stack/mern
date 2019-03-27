const mongoose = require("mongoose");
const UsersObject = require("../../database/migrations/create_Users_model");
const Users = mongoose.model("Users", new mongoose.Schema(UsersObject));

module.exports = Users;
