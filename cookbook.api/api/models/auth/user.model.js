const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModelSchema = new Schema ({
    username: String,
    email: String,
    password: String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ]
})

const UserModel = mongoose.model("User", UserModelSchema);

module.exports = UserModel;