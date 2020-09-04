const RecipeModel = require("../models/recipe/recipe.model");

exports.createRecipe = async function (recipeDTO) {
  let recipe = new RecipeModel({
    title: recipeDTO.title,
    description: recipeDTO.description,
    instructions: recipeDTO.instructions,
    ingredients: recipeDTO.ingredients,
    pictureURLs: recipeDTO.pictureURLs,
    cookingTime: {
      preparation: recipeDTO.preparation,
      cooking: recipeDTO.cookingTime,
    },
    source: {
      link: recipeDTO.link,
      text: recipeDTO.text,
    },
    portions: {
      minPortions: recipeDTO.minPortions,
      maxPortions: recipeDTO.maxPortions,
    },
    comeplexity: recipeDTO.comeplexity,
  });

  let result = await recipe.save();
  return result;
};
