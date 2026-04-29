import { createContext, useState, useContext, useCallback } from "react";
import axios from "axios";

const RecipeContext = createContext();

export const useRecipe = () => {
  // custom hook for consuming context
};

export const RecipeProvider = ({ children }) => {
  // state: ingredients, recipe, suggestions, savedRecipes, loading, error, dietaryPreference

  const API_BASE = "/api/recipes";

  // analyzeImage(imageFile)  → POST /analyze
  // generateRecipe()         → POST /generate
  // getRecipeSuggestions()   → POST /suggestions
  // saveRecipe(recipeData)   → POST /save
  // fetchSavedRecipes()      → GET  /saved
  // deleteSavedRecipe(id)    → DELETE /saved/:id
  // clearRecipe()            → resets recipe and suggestions

  return (
    <RecipeContext.Provider value={{/* all state and functions */}}>
      {children}
    </RecipeContext.Provider>
  );
};