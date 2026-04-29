const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },

    // ingredients: array of { name (required), quantity }
    ingredients: [],

    // instructions: array of { step (required), description (required) }
    instructions: [],

    // nutrition: { calories, protein, carbs, fat, fiber }
    nutrition: {},

    servings: { type: String, default: "2" },
    prepTime: { type: String },
    cookTime: { type: String },

    // dietaryTags: array of enum → vegan, vegetarian, keto, gluten-free, dairy-free, low-carb, high-protein, paleo
    dietaryTags: [],

    // difficulty: enum → Easy, Medium, Hard (default: Medium)
    difficulty: { type: String, default: "Medium" },

    imageUrl: { type: String },
    detectedIngredients: [String],
    servingSuggestions: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);