import RecipeCard from "./RecipeCard";

function RecipeDisplay({ recipe }) {
  // return null if no recipe

  return (
    <div className="recipe-display">
      {/* RecipeCard component */}

      {/* Ingredients section: map over recipe.ingredients → show name and quantity */}

      {/* Instructions section: map over recipe.instructions → show step number and description */}

      {/* Nutrition section (conditional): map over calories, protein, carbs, fat, fiber */}

      {/* Serving suggestions section (conditional): map over recipe.servingSuggestions */}
    </div>
  );
}

export default RecipeDisplay;