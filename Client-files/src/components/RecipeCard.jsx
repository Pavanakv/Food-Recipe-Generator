import { useNavigate } from "react-router-dom";
import { useRecipe } from "../context/RecipeContext";

function RecipeCard({ recipe, isSaved = false }) {
  // handleSave()   → calls saveRecipe, shows alert
  // handleDelete() → confirms, calls deleteSavedRecipe
  // handleView()   → navigates to /saved/:id if isSaved

  return (
    <div className="recipe-card" onClick={handleView}>
      {/* Header: title + difficulty badge */}
      {/* Meta: prepTime, cookTime, servings */}
      {/* Dietary tags */}
      {/* Actions: Save or Delete button */}
    </div>
  );
}

export default RecipeCard;