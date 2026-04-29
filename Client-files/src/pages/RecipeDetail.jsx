import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RecipeDisplay from "../components/RecipeDisplay";
import Loader from "../components/Loader";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // state: recipe, loading, error

  useEffect(() => {
    // fetchRecipe() → GET /api/recipes/saved/:id → setRecipe
    // handle error → setError("Recipe not found")
  }, [id]);

  // if loading → return Loader
  // if error → return error page with "Back to Saved Recipes" button → navigate("/saved")

  return (
    <div className="recipe-detail-page">
      {/* Back button → navigate("/saved") */}
      {/* RecipeDisplay component */}
    </div>
  );
}

export default RecipeDetail;