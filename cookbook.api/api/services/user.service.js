const UserModel = require("../models/auth/user.model");
const UserInfoModel = require("../models/user/userInfo.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const message = require("../../resources/messages.resource.json");
const code = require("../../resources/error.code.json");
const config = require("../../resources/config/settings.config");

exports.createUser = async function (userDTO) {
  let username = await UserModel.findOne({
    username: userDTO.username,
  });

  let email = await UserModel.findOne({
    email: userDTO.email,
  });

  if (username || email) {
    let duplicateData = username ? "Username" : "Email";
    throw {
      message: message.user.create.fail.duplicate.format([duplicateData]),
      status: 400,
      code: code.duplicateUserData,
      parameter: duplicateData.toLocaleLowerCase()
    };
  }

  let userInfo = new UserInfoModel();

  let user = new UserModel({
    username: userDTO.username,
    email: userDTO.email,
    password: bcrypt.hashSync(userDTO.password, 8),
    firstName: userDTO.firstName,
    lastName: userDTO.firstName,
    userInfo: userInfo,
  });

  let result = await user.save();
  return result;
};

exports.authenticateUser = async function (userDTO) {
  let user = await UserModel.findOne({
    username: userDTO.username,
  });

  if (!user) {
    throw {
      message: message.user.authenticate.notFound,
      status: 401,
      code: code.userNotfound,
    };
  }

  var validPassword = bcrypt.compareSync(userDTO.password, user.password);

  if (!validPassword) {
    throw {
      message: message.user.authenticate.incorrectPassword,
      status: 401,
      code: code.userPasswordInvalid,
    };
  }

  var token = jwt.sign({ id: user.id }, config.appSettings.jwtSecret, {
    expiresIn: 10, // set to 10 secs for testing
  });

  return {
    id: user._id,
    username: user.username,
    email: user.email,
    accessToken: token,
  };
};
