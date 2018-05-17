import React, {Component} from 'react';
import Recipe from './Recipe';
import './RecipeList.css'


class RecipeList extends Component{
  render(){
    const recipes = this.props.recipes.map((recipe, index) =>{
      <Recipe key = {index} title = {recipe.title} ingredients = {recipe.ingredients} instructions = {recipe.instructions} img = {recipe.img}/>
    })
    return(
      <div className = "RecipeList">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;
