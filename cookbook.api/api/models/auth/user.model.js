const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const message = require("../../../resources/messages.resource.json");

const UserModelSchema = new Schema({
  username: {
    type: String,
    required: [
      true,
      message.validate.schemeModel.required.format(["Username"]),
    ],
    minlength: [
      3,
      message.validate.schemeModel.minLength.format(["Username", "3"]),
    ],
    maxlength: [
      35,
      message.validate.schemeModel.maxLength.format(["Username", "35"]),
    ],
  },
  email: {
    type: String,
    required: [true, message.validate.schemeModel.required.format(["Email"])],
  },
  password: {
    type: String,
    required: [
      true,
      message.validate.schemeModel.required.format(["Password"]),
    ],
  },
  firstName: {
    type: String,
    required: [
      true,
      message.validate.schemeModel.required.format(["First Name"]),
    ],
    maxlength: [
      35,
      message.validate.schemeModel.maxLength.format(["First Name", "35"]),
    ],
  },
  lastName: {
    type: String,
    required: [
      true,
      message.validate.schemeModel.required.format(["Last Name"]),
    ],
    maxlength: [
      35,
      message.validate.schemeModel.maxLength.format(["Last Name", "35"]),
    ],
  },
  userInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserInfo",
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

const UserModel = mongoose.model("User", UserModelSchema);

module.exports = UserModel;
