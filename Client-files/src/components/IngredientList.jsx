import { useState } from "react";
import { useRecipe } from "../context/RecipeContext";

function IngredientList() {
  // state: newIngredient (local input)
  // from context: ingredients, setIngredients

  // addIngredient()         → adds trimmed, non-duplicate ingredient
  // removeIngredient(index) → removes ingredient at index
  // handleKeyDown(e)        → calls addIngredient on Enter key

  // returns null if ingredients.length === 0

  return (
    <div className="ingredient-list">
      {/* Heading */}
      {/* Tag pills with remove button */}
      {/* Add more input + button */}
    </div>
  );
}

export default IngredientList;