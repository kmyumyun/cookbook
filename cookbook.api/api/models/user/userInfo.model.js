const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoModelSchema = new Schema({
    
});

const UserInfoModel = mongoose.model("UserInfo", UserInfoModelSchema);

module.exports = UserInfoModel;
