const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const message = require("../../../resources/messages.resource.json");

const RecipeModelSchema = new Schema({
  title: {
    type: String,
    required: [true, message.validate.schemeModel.required.format(["Title"])],
    maxlength: [
      50,
      message.validate.schemeModel.maxLength.format(["Title", "50"]),
    ],
  },
  description: {
    type: String,
    required: [
      true,
      message.validate.schemeModel.required.format(["Brief description"]),
    ],
    minlength: [
      5,
      message.validate.schemeModel.minLength.format(["Description", "5"]),
    ],
    maxlength: [
      200,
      message.validate.schemeModel.maxLength.format(["Description", "200"]),
    ],
  },
  instructions: [
    {
      type: String,
      required: [
        true,
        message.validate.schemeModel.required.format(["Instructions"]),
      ],
      minlength: [
        5,
        message.validate.schemeModel.minLength.format(["Instructions", "5"]),
      ],
      maxlength: [
        1000,
        message.validate.schemeModel.maxLength.format(["Instructions", "1000"]),
      ],
    },
  ],
  ingredients: [
    {
      type: String,
      required: [
        true,
        message.validate.schemeModel.required.format(["Ingredients"]),
      ],
      minlength: [
        3,
        message.validate.schemeModel.minLength.format(["Ingredients", "3"]),
      ],
      maxlength: [
        50,
        message.validate.schemeModel.maxLength.format(["Ingredients", "50"]),
      ],
    },
  ],
  pictureURLs: [
    {
      type: String,
      required: [
        true,
        message.validate.schemeModel.required.format(["PictureURL"]),
      ],
    },
  ],
  seenCounter: {
    type: Number,
    required: [
      true,
      message.validate.schemeModel.required.format(["Seen counter"]),
    ],
    default: 0,
    min: [0, message.validate.schemeModel.min.format(["Seen counter", "0"])],
  },
  createdOn: {
    type: Date,
    required: [
      true,
      message.validate.schemeModel.required.format(["Creation date"]),
    ],
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cookingTime: {
    preparation: {
      type: Number,
      min: [
        0,
        message.validate.schemeModel.min.format(["Preparation time", "0"]),
      ],
    },
    cooking: {
      type: Number,
      min: [0, message.validate.schemeModel.min.format(["Cooking time", "0"])],
    },
  },
  source: {
    link: String,
    text: String,
  },
  portions: {
    minPortions: {
      type: Number,
      min: [0, message.validate.schemeModel.min.format(["Min portions", "0"])],
      validate: {
        validator: function (v) {
          return this.portions.maxPortions >= v;
        },
        message: "Min portions should be <= max portions!",
      },
    },
    maxPortions: {
      type: Number,
      min: [0, message.validate.schemeModel.min.format(["Max portions", "0"])],
      validate: {
        validator: function (v) {
          return this.portions.minPortions <= v;
        },
        message: "Min portions should be <= max portions!",
      },
    },
  },
  complexity: {
    type: Number,
    min: [0, message.validate.schemeModel.min.format(["Complexity", "0"])],
    max: [10, message.validate.schemeModel.min.format(["Complexity", "10"])],
  },
  rating: {
    score: {
      type: Number,
      min: [0, message.validate.schemeModel.min.format(["Rating score", "0"])],
      max: [5, message.validate.schemeModel.min.format(["Rating score", "5"])],
      required: [
        true,
        message.validate.schemeModel.required.format(["Rating score"]),
      ],
      default: 0,
    },
    count: {
      type: Number,
      min: [
        0,
        message.validate.schemeModel.min.format(["Rating counter", "0"]),
      ],
      required: [
        true,
        message.validate.schemeModel.required.format(["Rating counter"]),
      ],
      default: 0,
    },
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Declined", "Saved"],
    required: true,
    default: "Pending",
  },
});

const RecipeModel = mongoose.model("Recipe", RecipeModelSchema);
module.exports = RecipeModel;
