import React, { Component } from 'react';
import RecipeViewLeft from 'components/RecipeView/RecipeViewLeft';
import RecipeViewRight from 'components/RecipeView/RecipeViewRight';
import RecipeViewWrapper from 'components/RecipeView/RecipeViewWrapper';
import * as recipeViewModule from 'store/modules/RecipeViewModule';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RecipeViewContailner extends Component {
  initialize = async () => {
    const { RecipeViewModule, id } = this.props;
    try {
      await RecipeViewModule.getRecipe(id);
    } catch(e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    const { loading, recipe } = this.props
    if(loading) return null;
    const { recipeTitle, recipeCoverImage, recipeDescription, ingredientList, recipeBody, 
      ingredient, recipeType, cusine, specialDiet, difficulty, cookingTime, serving, 
      cookingTip, recipeLike
    } = recipe.toJS();
    
    return (
     <RecipeViewWrapper>
        <RecipeViewLeft 
        recipeTitle = {recipeTitle}
        recipeCoverImage = {recipeCoverImage}
        ingredientList = {ingredientList}
        recipeBody = {recipeBody}
        cookingTip = {cookingTip}
        />
        <RecipeViewRight 
          ingredient = {ingredient}
          recipeType = {recipeType}
          cusine = {cusine}
          specialDiet = {specialDiet}
          recipeTitle = {recipeTitle}
          recipeDescription = {recipeDescription}
          recipeLike = {recipeLike}
          serving = {serving}
          cookingTime = {cookingTime}
          difficulty = {difficulty}
        />
        
      </RecipeViewWrapper>
    );
  }
}

export default connect(
  (state) => ({
    recipe: state.RecipeViewModule.get('recipe'),
    loading: state.pender.pending['RecipeViewModule/GET_RECIPE']
  }),
  (dispatch) => ({
    RecipeViewModule: bindActionCreators(recipeViewModule, dispatch)
  })
) (RecipeViewContailner);