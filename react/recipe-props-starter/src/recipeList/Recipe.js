import React, {Component} from 'react';
import IngredientList from './IngredientList';
import './Recipe.css';

class Recipe extends Component{
  static propTypes={
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.function.isRequired
  }
  render(){
    const {title, img, instructions, id, onDelete} = this.props;

    return(
      <div className = "recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title}/>
        </div>
        <div className="recipe-card-content">
          <h3>{title}</h3>
          <h5 className="recipe-title">Ingredients:</h5>
          <IngredientList ingredients = {this.props.ingredients}/>
          <h5>Instructions:</h5>
          <p>{instructions}</p>
          <button type="button" onClick={(=>onDelete(id))}>DELETE</button>

        </div>
      </div>
    )
  }
}

export default Recipe;
