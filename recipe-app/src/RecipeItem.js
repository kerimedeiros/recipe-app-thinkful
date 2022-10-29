import React from 'react';

// Serves as the template for each new recipe line item that is added to the page
    function RecipeItem({ recipe, deleteRecipe }) {
        return (
            <tr>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td>
                    <img src= {recipe.photo} alt ="https://www.shutterstock.com" className="scale-down" />
                </td> 
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
                <td>
                    <button name="delete" onClick={deleteRecipe}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }

  export default RecipeItem;
