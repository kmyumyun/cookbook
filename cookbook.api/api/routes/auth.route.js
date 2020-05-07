const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller")
const authService = require("../services/auth/auth.service")

router.route("/")
    .get([authService.verifyToken], (req, res) => {
            res.json("Auth Home Page");
    });

router.route("/login")
    .get(authController.getAllUsers)
    .post(authController.login);

router.route("/register")
        .post(authController.register);

module.exports = router;