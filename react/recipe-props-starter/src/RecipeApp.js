import React, { Component } from 'react';
import RecipeList from './recipeList/RecipeList'
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <RecipeList/>

      </div>
    );
  }
}

export default RecipeApp;
