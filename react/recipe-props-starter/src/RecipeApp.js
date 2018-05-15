import React, { Component } from 'react';
import Navbar from './navBar/Navbar';
import RecipeList from './recipeList/RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <RecipeList/>

      </div>
    );
  }
}

export default RecipeApp;
