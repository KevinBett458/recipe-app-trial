import React from 'react';

const SearchResults = ({ results, handleRecipeClick }) => {
  return (
    <div className="search-results">
      {results.map((result) => (
        <div className="search-result" key={result.idMeal}>
          <img src={result.strMealThumb} alt={result.strMeal} />
          <h3>{result.strMeal}</h3>
          <button onClick={() => handleRecipeClick(result.idMeal)}>
            View Recipe
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
