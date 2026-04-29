import { useNavigate } from "react-router-dom";
import { useRecipe } from "../context/RecipeContext";
import RecipeDisplay from "../components/RecipeDisplay";

function RecipeResult() {
  const navigate = useNavigate();
  const { recipe, clearRecipe } = useRecipe();

  // handleBack() → clearRecipe and navigate("/")

  // if no recipe → return fallback UI with "Go Home" button → navigate("/")

  return (
    <div className="recipe-result-page">
      {/* Back button → handleBack */}
      {/* Page heading */}
      {/* RecipeDisplay component */}
    </div>
  );
}

export default RecipeResult;