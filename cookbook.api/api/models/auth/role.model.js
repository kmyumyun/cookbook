const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleModelSchema = new Schema({
    name: String,
})

const RoleModel = mongoose.model("Role", RoleModelSchema);

module.exports = RoleModel;