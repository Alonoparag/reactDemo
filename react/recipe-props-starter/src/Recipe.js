import React, {Component} from 'react';
//import IngredientList from './IngredientList';
import './Recipe.css';

class Recipe extends Component{
  render(){
    const {title, img, instructions} = this.props;
    const ingredients = this.props.ingredients;
    return(
      <div className = "recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title}/>
        </div>
        <div className="recipe-card-content">
          <h3>{title}</h3>
          <h5 className="recipe-title">Ingredients:</h5>
          {ingredients.map((ing, index) =>(<li key={index}>{ing}</li>))}
          <h5>Instructions:</h5>
          <p>{instructions}</p>
        </div>
      </div>
    )
  }
}

export default Recipe;
