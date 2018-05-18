import React, { Component } from 'react';
import Navbar from './navBar/Navbar';
import RecipeList from './recipeList/RecipeList';
import RecipeInput from './recipeList/RecipeInput'
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes:[{
          id: 0,
          title: "Pasta",
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img: "pasta.jpg"
        },
        {
          id: 1,
          title: "Roasted Cauliflwoer with Tahini",
          ingredients: ['1 meduim cauliflower', '150 ml raw tahini', '200ml water', '2 cloves of garlic', 'lemon juice', 'salt', 'pepper'],
          instructions: "Preheat oven to 180&deg;. Break the cauliflower to small bits, the size of your pinky knuckle. You may cut and use the branches if you like. Prepare a baking tray with baking paper, spread the cauliflower evenly on the tray and drizzle some olive oil on it Roast for 15-20 minutes, or untill the cauliflower has a light bronze color and is softened Mix the tahini sauce ingredients to create a smooth semi-fluid tahini sauce. ",
          img: "cauliflower.jpg"
        },
        {
          id: 2,
          title: "Smoked Eggplant with Yogurt, Mint and parsley",
          ingredients: ['2 large eggplants', '300ml yogurt', '1 cup mint', '1 cup parsley', '2 cloves of garlic', '2 small cucumbers, the non hydrophonic variety'],
          instructions: "Smoke the eggplants untill the skin can be peeled effortlessly. Peel the eggplants and let them sit over a sieve for 10 minutes, so they will lose excess liquids. Grate the cucumbers, and squeeze the water out of the puree. Mix the ingredients and season with lemon, salt and black pepper.",
          img: "eggyogmint.jpg"
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe){
    this.setState((prevState, props)=>{
      const newRecipe = {...recipe, id:this.state.nextRecipeId};
      // const nextRecipeId = prevState.nextRecipeId.pop();
      // prevState.recipes.push(newRecipe, nextRecipeId+1);
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      };
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        {showForm?
          <RecipeInput onSave = {this.handleSave}/>: null}
        <RecipeList recipes = {this.state.recipes}/>

      </div>
    );
  }
}

export default RecipeApp;
