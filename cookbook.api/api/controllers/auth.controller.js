const mongoose = require("mongoose");
const UserModel = require("../models/auth/user.model");
const config = require("../../resources/config/settings.config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userService = require("../services/user.service");
const messageResources = require("../../resources/messages.resource.json");
const codeNames = require("../../resources/error.code.json");

exports.getAllUsers = function (req, res) {
  UserModel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.login = async function (req, res) {
  let userDTO = req.body;

  try {
    let result = await userService.authenticateUser(userDTO);
    res.status(200).send(result);
  } catch (err) {
    let status = err.status ? err.status : 500;
    let code = err.code ? err.code : codeNames.unknown;
    let message = err.message
      ? err.message
      : messageResources.user.authenticate.general;

    res.status(status).send({ message, code });
  }
};

exports.register = async function (req, res) {
  let userDTO = req.body;

  try {
    let result = await userService.createUser(userDTO);
    res.send({
      message: `${messageResources.user.create.success} ${result.username}`,
    });
  } catch (err) {
    let status = err.status ? err.status : 500;
    let code = err.code ? err.code : codeNames.unknown;
    let message = err.message
      ? err.message
      : messageResources.user.create.fail.general;

    res.status(status).send({
      message,
      code,
      parameter: err.parameter,
    });
  }
};
