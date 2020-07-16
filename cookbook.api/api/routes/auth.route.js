const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const validation = require("../middlewares/validators");

router.route("/").get([validation.verifyToken], (req, res) => {
  res.json("Auth Home Page");
});

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);

module.exports = router;
