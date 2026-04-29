import { useEffect, useState, useMemo } from "react";
import { useRecipe } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";

function SavedRecipes() {
  const { savedRecipes, fetchSavedRecipes, loading } = useRecipe();

  // state: filterDiet, filterDifficulty, searchTerm

  useEffect(() => {
    // fetchSavedRecipes on mount
  }, [fetchSavedRecipes]);

  // filteredRecipes (useMemo) → filter savedRecipes by diet, difficulty, and searchTerm

  // if loading → return Loader

  return (
    <div className="saved-recipes-page">
      {/* Page heading */}

      <div className="filters-bar">
        {/* Search input → searchTerm */}
        {/* Diet filter select → All Diets, Vegan, Vegetarian, Keto, Gluten-Free, Dairy-Free, Low Carb, High Protein, Paleo */}
        {/* Difficulty filter select → All Difficulties, Easy, Medium, Hard */}
      </div>

      {/* if filteredRecipes empty → empty state message (differentiate between no saved recipes vs no filter matches) */}
      {/* else → recipes grid: map filteredRecipes → RecipeCard with isSaved=true */}
    </div>
  );
}

export default SavedRecipes;