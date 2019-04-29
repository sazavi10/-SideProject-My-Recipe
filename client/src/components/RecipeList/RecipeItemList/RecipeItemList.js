import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeItemList.scss';
import classNames from 'classnames/bind';
//import { recipeData } from 'lib/dummy';

const cx = classNames.bind(styles);
const imgPath = 'http://localhost:4000/image/';

const RecipeItem = ({_id, recipeCoverImage, recipeTitle, ingredient, recipeType, cusine, specialDiet, profileImage, writer, recipeLike, cookingTime }) => {
  const viewLink = `/recipeview/${_id}`;
  return (
    <li className={cx('recipe_item')}>
      <div>
        <Link to={viewLink}><div className={cx('cover_img')}><img src={imgPath+recipeCoverImage} alt='cover'/></div></Link>
        <div className={cx('category')}>
          {ingredient !==''?<span>#{ingredient}</span>:''}
          {recipeType !==''?<span>#{recipeType}</span>:''}
          {cusine !==''?<span>#{cusine}</span>:''}
          {specialDiet !==''?<span>#{specialDiet}</span>:''}
        </div>
        <h2><Link to={viewLink}>{recipeTitle}</Link></h2>
        {/*<div className={cx('recipe_writer')}>
          <span className={cx('image')}><img src={profileImage} alt='profile'/></span>
          <span className={cx('writer')}>{writer}</span>
        </div>*/}
        <div className={cx('recipe_info')}>
          <span className={cx('like')}><i className='fas fa-heart'></i>{recipeLike}</span>
          <span className={cx('time')}><i className='far fa-clock'></i>{cookingTime}</span>
        </div>
      </div>
    </li>
  )
}

const RecipeItemList = ({recipes}) => {

  const recipeList = recipes.map(
    (list) => {
      const {_id, recipeCoverImage, recipeTitle, ingredient, recipeType, cusine, specialDiet, profileImage, writer, recipeLike, cookingTime } = list.toJS();
      return (
        <RecipeItem 
          key = {_id}
          _id = {_id}
          recipeCoverImage = {recipeCoverImage}
          recipeTitle = {recipeTitle}
          ingredient = {ingredient}
          recipeType = {recipeType}
          cusine = {cusine}
          specialDiet = {specialDiet}
          profileImage = {profileImage}
          writer = {writer}
          recipeLike = {recipeLike}
          cookingTime = { cookingTime}
          />
        )
      }
    )
    return(
    <div className={cx('recipe_list')}>
      <ul>
       {recipeList}
      </ul>
    </div>
  );
};

export default RecipeItemList;