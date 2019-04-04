import React from 'react';
import styles from './RecipeViewLeft.scss';
import classNames from 'classnames/bind';
import { recipeData } from 'lib/dummy';

const RecipeViewLeft = ({id}) => {
  const cx = classNames.bind(styles);
  const data = recipeData.get(id);
  const body = data.get('recipeBody');
  const ingredientData = data.get('ingredientList');
  const { recipeTitle, recipeCoverImage, cookingTip} = data.toJS();

  const IngredientComponent = ({ingredient, detail}) => {
    return(
      <li>
          <span className={cx('label')}>{ingredient}</span>
          <span className={cx('value')}>{detail}</span>
      </li>
    )
  }

  const RecipeBody = ({text, image, index}) => {
      return(
        <div>
            <div><img src={image} alt={`${index}step`} /></div>
            <p>{text}</p>
        </div>
      )
  }

  const recipeBody = body.map(
    (list, index) => {
      const { text, image } = list.toJS();
      return (<RecipeBody key={index} text={text} image={image} index={index}/>)
    }
  )

  const ingredientList= ingredientData.map(
      (list, index) => {
          const { ingredient, detail } = list.toJS();
          return (<IngredientComponent key={index} ingredient={ingredient} detail={detail}/>)
        }
  )

  return(
  <div className={cx('recipe_view_left')}>
    <div><img src = {recipeCoverImage} alt = {`${recipeTitle} 이미지`}/></div>
    <div className={cx('ingredient_list')}>
      <h2>재료</h2>
      <ul>
        {ingredientList}
      </ul>
    </div>
    <div className={cx('recipe_body')}>
      <h2>조리순서</h2>
      {recipeBody}
    </div>
    <div className={cx('cooking_tip')}>
      <h2>Cooking Tip!</h2>
      <p>{cookingTip}</p>
    </div>
  </div>
  )
};

export default RecipeViewLeft;