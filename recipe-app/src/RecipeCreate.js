import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // Set initial form state
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }; 

  // Set up state
  const [formData, setFormData] = useState({ ...initialFormState }); 

  // Handles text for the form
  const handleChange = ({ target }) =>  {
    const value = target.value;
    setFormData({ 
    ...formData,
    [target.name]: value, 
  });
};
  
  // Handles the Submit (create)  linked to RecipeList.js 
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData); 
    // Pushes recipe to recipe data
    // Gets recipe from RecipeData and adds into RecipeList
    setFormData({ ...initialFormState }); 
  }; 
  
  // Manages the webpage form structure 
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
            <label htmlFor="name">
            <input 
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              /> 
            </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input 
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.photo}
                 />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
              />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;