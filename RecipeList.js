import React from "react";

// TODO: Display the list of recipes using the structure of table that is provided.
// TODO: Create at least one additional component that is used by this component.
// TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

function RecipeView({ recipe, RecipeDelete }) {
  //Created new component to be used within component below when creating new recipe list so that it follows the desired form format                                                                //and includes a delete button
  return (
    <tr className="row">
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td className="photoFit">
        <img src={recipe.photo} alt="" className="photoFit" />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={RecipeDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

function RecipeList({ recipes, RecipeDelete }) {
  //Declare function and variable to create a new recipe list which takes in the RecipeView function above.
  const rows = recipes.map((recipe, index) => (
    <RecipeView
      key={index}
      recipe={recipe}
      RecipeDelete={() => RecipeDelete(index)}
    />
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableRows">{rows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
