import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';


class RecipeList extends Component{
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
  }

  render(){
    const {onDelete} = this.props;
    const recipes = this.props.recipes.map((recipe, index) =>{
      return <Recipe key = {recipe.id} title = {recipe.title} ingredients = {recipe.ingredients} instructions = {recipe.instructions} img = {recipe.img} onDelete={onDelete}/>
    })
    return(
      <div className = "RecipeList">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;
