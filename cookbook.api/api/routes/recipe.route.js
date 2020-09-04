const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe.controller");

router.route("/create").post(recipeController.createNewRecipe);

module.exports = router;
