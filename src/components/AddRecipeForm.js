import React, { useState } from 'react';

const AddRecipeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== '') {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, instructions, image, ingredients });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="instructions">Instructions:</label>
      <textarea id="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />

      <label htmlFor="image">Image URL:</label>
      <input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

      <label htmlFor="ingredients">Ingredients:</label>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New ingredient"
        value={newIngredient}
        onChange={(e) => setNewIngredient(e.target.value)}
      />
      <button type="button" onClick={handleAddIngredient}>
        Add
      </button>

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
