import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search for Ingredients:</label>
      <input
        type="text"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
