import React, {Component} from 'react';

class Recipe extends Component{
  render(){
    const {title, img, instructions} = this.props;
    const ingredients = this.props.ingredients.map((ing, index) =>(<li key={index}>{ing}</li>));
    return(
      <div>
        {title}
        <ul>
          {ingredients}
        </ul>
        <p>{instructions}</p>
        <img src={img} alt={title}/>
      </div>
    )
  }
}

export default Recipe;