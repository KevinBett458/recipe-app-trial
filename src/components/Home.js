import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ searchRecipe }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchRecipe(searchText);
    setSearchText("");
  };

  return (
    <div>
      <h1>Recipe App</h1>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search">Search for recipe:</label>
        <input
          type="text"
          id="search"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Home;
