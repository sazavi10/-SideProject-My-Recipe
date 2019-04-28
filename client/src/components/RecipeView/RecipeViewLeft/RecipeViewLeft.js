import React from 'react';
import styles from './RecipeViewLeft.scss';
import classNames from 'classnames/bind';

const RecipeViewLeft = ({ recipeTitle, recipeCoverImage, ingredientList, recipeBody, cookingTip}) => {
  const cx = classNames.bind(styles);
  const imgPath = 'http://localhost:4000/image/';
  const IngredientList = ({ingredient, detail}) => {
    return(
      <li>
          <span className={cx('label')}>{ingredient}</span>
          <span className={cx('value')}>{detail}</span>
      </li>
    )
  }

  const RecipeBodyList = ({text, image, index}) => {
    return(
      <div>
          <div><img src={`${imgPath}${image}`} alt={`${index+1}step`} /></div>
          <p>{text}</p>
      </div>
    )
  } 
  const viewBody = recipeBody && recipeBody.map(
    (list, index) => {
      const { text, image } = list;
      return (<RecipeBodyList key={index} text={text} image={image} index={index}/>)
    }
  )

  const viewIngredientList= ingredientList && ingredientList.map(
    (list, index) => {
        const { ingredient, detail } = list;
        return (<IngredientList key={index} ingredient={ingredient} detail={detail}/>)
      }
  )

  return(
  <div className={cx('recipe_view_left')}>
    <div><img src = {`${imgPath}${recipeCoverImage}`} alt = {`${recipeTitle} 이미지`}/></div>
    <div className={cx('ingredient_list')}>
      <h2>재료</h2>
      <ul>
        {viewIngredientList}
      </ul>
    </div>
    <div className={cx('recipe_body')}>
      <h2>조리순서</h2>
      {viewBody}
    </div>
    <div className={cx('cooking_tip')}>
      <h2>Cooking Tip!</h2>
      <p>{cookingTip}</p>
    </div>
  </div>
  )
};

export default RecipeViewLeft;