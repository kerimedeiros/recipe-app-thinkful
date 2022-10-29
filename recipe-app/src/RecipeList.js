import React from "react";
import RecipeItem from "./RecipeItem"; 

// Table Body will enter the RecipeItem and grab the content, map the data accordingly and print out the content

function RecipeList({ recipes, deleteRecipe }) {
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cusine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
          <RecipeItem
            deleteRecipe={() => deleteRecipe(index)}
            key={index}
            recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
