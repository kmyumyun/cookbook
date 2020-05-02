const express = require("express");
const router = express.Router();
const cookBook = require('../controllers/cookBookController');

router.route("/")
    .get( cookBook.listAllTasks)
    .post( cookBook.createTask);

router.route("/:taskId")
    .get( cookBook.readTask)
    .put( cookBook.updateTask)
    .delete( cookBook.deleteTask);

module.exports = router;