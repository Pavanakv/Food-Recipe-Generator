import { useNavigate } from "react-router-dom";
import { useRecipe } from "../context/RecipeContext";
import ImageUploader from "../components/ImageUploader";
import IngredientList from "../components/IngredientList";
import DietaryFilter from "../components/DietaryFilter";
import SuggestionsList from "../components/SuggestionsList";
import Loader from "../components/Loader";

function Home() {
  // from context: ingredients, loading, error, setError,
  //               generateRecipe, getRecipeSuggestions, suggestions,
  //               setRecipe, dietaryPreference

  // handleGenerateRecipe()        → calls generateRecipe(), navigates to /recipe
  // handleGetSuggestions()        → calls getRecipeSuggestions()
  // handleSelectSuggestion(title) → generates full recipe for selected title, navigates

  return (
    <div className="home-page">
      {/* Hero section */}
      {/* ImageUploader */}
      {/* IngredientList (conditional on ingredients.length > 0) */}
      {/* DietaryFilter (conditional) */}
      {/* Action buttons: Generate Recipe + Get Suggestions (conditional) */}
      {/* Loader */}
      {/* Error message */}
      {/* SuggestionsList */}
    </div>
  );
}

export default Home;