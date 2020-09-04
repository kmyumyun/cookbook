const recipeService = require("../services/recipe.service");
const messageResources = require("../../resources/messages.resource.json");

exports.createNewRecipe = async function (req, res) {
  let recipeDTO = req.body;

  try {
    let result = await recipeService.createRecipe(recipeDTO);
    res.send({
      message: messageResources.recipe.create.success.format([result.title]),
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: messageResources.recipe.create.fail.format([err]) });
  }
};
