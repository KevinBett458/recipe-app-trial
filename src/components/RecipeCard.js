import React, { useState } from 'react';

const RecipeCard = ({ recipe, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    onLike(recipe);
  };

  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      <button disabled={liked} onClick={handleLike}>
        {liked ? 'Liked!' : 'Like'}
      </button>
    </div>
  );
};

export default RecipeCard;
