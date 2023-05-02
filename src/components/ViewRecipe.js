import React, { useState, useEffect } from "react";

const ViewRecipe = (props) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe data from the API using the provided URL
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        // Set the recipe state with the retrieved data
        setRecipe(data.meals[0]);
      })
      .catch((error) => console.error(error));
  }, [props.url]);

  // Render a loading message if the recipe data is still being fetched
  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  // Destructure the recipe data for easier use in the component
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = recipe;

  return (
    <div>
      <h2>{strMeal}</h2>
      <img src={strMealThumb} alt={strMeal} />
      <h3>Category: {strCategory}</h3>
      <h3>Area: {strArea}</h3>
      <p>{strInstructions}</p>
      {strYoutube && (
        <a href={strYoutube} target="_blank" rel="noopener noreferrer">
          Watch video
        </a>
      )}
    </div>
  );
};

export default ViewRecipe;
