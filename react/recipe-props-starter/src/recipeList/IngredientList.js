import React, {Component} from 'react';// eslint-disable-next-line
import PropTypes from 'prop-types';

class IngredientList extends Component{
  static defaultProps = {
    ingredients: []
  }
  render(){
    return(
      <ul>
        {this.props.ingredients.map((ing, index) =>(<li key={index}>{ing}</li>))}
      </ul>
    );
  }
}

export default IngredientList;
