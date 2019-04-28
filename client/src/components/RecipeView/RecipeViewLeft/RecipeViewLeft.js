import React from 'react';
import styles from './RecipeViewLeft.scss';
import classNames from 'classnames/bind';
<<<<<<< HEAD
import { recipeData } from 'lib/dummy';

const RecipeViewLeft = ({id}) => {
  const cx = classNames.bind(styles);
  const data = recipeData.get(id);
  const body = data.get('recipeBody');
  const ingredientData = data.get('ingredientList');
  const { recipeTitle, recipeCoverImage, cookingTip} = data.toJS();

  const IngredientComponent = ({ingredient, detail}) => {
=======

const RecipeViewLeft = ({ recipeTitle, recipeCoverImage, ingredientList, recipeBody, cookingTip}) => {
  const cx = classNames.bind(styles);
  const imgPath = 'http://localhost:4000/image/';
  const IngredientList = ({ingredient, detail}) => {
>>>>>>> Server&Db set end! write&view end - img upload ing
    return(
      <li>
          <span className={cx('label')}>{ingredient}</span>
          <span className={cx('value')}>{detail}</span>
      </li>
    )
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> Server&Db set end! write&view end - img upload ing
  )

  return(
  <div className={cx('recipe_view_left')}>
<<<<<<< HEAD
    <div><img src = {recipeCoverImage} alt = {`${recipeTitle} 이미지`}/></div>
    <div className={cx('ingredient_list')}>
      <h2>재료</h2>
      <ul>
        {ingredientList}
=======
    <div><img src = {`${imgPath}${recipeCoverImage}`} alt = {`${recipeTitle} 이미지`}/></div>
    <div className={cx('ingredient_list')}>
      <h2>재료</h2>
      <ul>
        {viewIngredientList}
>>>>>>> Server&Db set end! write&view end - img upload ing
      </ul>
    </div>
    <div className={cx('recipe_body')}>
      <h2>조리순서</h2>
<<<<<<< HEAD
      {recipeBody}
=======
      {viewBody}
>>>>>>> Server&Db set end! write&view end - img upload ing
    </div>
    <div className={cx('cooking_tip')}>
      <h2>Cooking Tip!</h2>
      <p>{cookingTip}</p>
    </div>
  </div>
  )
};

export default RecipeViewLeft;