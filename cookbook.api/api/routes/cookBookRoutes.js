"use strict"

module.exports = function(app) {
    let cookBook = require("../controllers/cookBookController");
}

app.route("/task")
    .get(cookBook.listAllTasks)
    .post(cookBook.createTask);

app.route("/tasks/:taskId")
