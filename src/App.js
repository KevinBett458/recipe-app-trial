import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import ViewRecipe from './components/ViewRecipe';
import AddRecipeForm from './components/AddRecipeForm';
import Footer from './components/Footer';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  if (Switch) {
    console.log('Switch exists in react-router-dom');
  } else {
    console.log('Switch does not exist in react-router-dom');
  }

  const handleSearch = (searchTerm) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddRecipe = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  const handleLikeRecipe = (recipe) => {
    if (!favorites.includes(recipe)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const handleUnlikeRecipe = (recipe) => {
    const newFavorites = favorites.filter((favRecipe) => favRecipe.idMeal !== recipe.idMeal);
    setFavorites(newFavorites);
  };

  return (
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home handleSearch={handleSearch} />
          </Route>
          <Route path="/search-results">
            <SearchResults searchResults={searchResults} handleLikeRecipe={handleLikeRecipe} />
          </Route>
          <Route path="/view-recipe/:id">
            <ViewRecipe handleLikeRecipe={handleLikeRecipe} handleUnlikeRecipe={handleUnlikeRecipe} />
          </Route>
          <Route path="/add-recipe">
            <AddRecipeForm handleAddRecipe={handleAddRecipe} />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
};

export default App;
