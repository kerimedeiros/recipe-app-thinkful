import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // Manages the state and allows to grab existing recipes and add each newly inputted recipe
  const createRecipe = (newRecipe) => 
  setRecipes((currentRecipes) => [
    ...currentRecipes,
    newRecipe
  ]);

  // Handles the Delete button logic
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
    currentRecipes.filter((recipe, index) => index !== indexToDelete)
    ); 
  
  // Return and render component content on the webpage
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;


