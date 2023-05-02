import React from "react";

const Favorites = ({ favorites, handleDelete, handleLike }) => {
  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite recipes.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.idMeal}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
            <button onClick={() => handleLike(recipe)}>Like</button>
            <button onClick={() => handleDelete(recipe)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
