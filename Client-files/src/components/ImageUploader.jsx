import { useState, useRef } from "react";
import { useRecipe } from "../context/RecipeContext";

function ImageUploader() {
  // state: preview, dragActive
  // ref: fileInputRef

  // handleFile(file)       → validates file type, sets preview, calls analyzeImage
  // handleDrop(e)          → drag & drop handler
  // handleDragOver(e)      → sets dragActive = true
  // handleDragLeave()      → sets dragActive = false
  // handleInputChange(e)   → triggered by hidden file input
  // handleClick()          → programmatically clicks the hidden input

  return (
    <div className="image-uploader">
      {/* Title and subtitle */}
      {/* Drop zone with preview or placeholder icon */}
      {/* Hidden file input */}
      {/* Analyzing indicator while loading */}
    </div>
  );
}

export default ImageUploader;