import React, { useState } from "react";
function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    //Declare variable to hold default form value
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [form, setForm] = useState({ ...initialFormState }); //Declare variables to handle form changes
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    //Declare handlers to handle event actions
    event.preventDefault();
    setRecipes([...recipes, form]);
    setForm({ ...initialFormState });
  };

  //Form layout
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="row">
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={form.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={form.cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={form.photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={form.ingredients}
                autoFocus="on"
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="preparation"
                required={true}
                onChange={handleChange}
                value={form.preparation}
              />
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
