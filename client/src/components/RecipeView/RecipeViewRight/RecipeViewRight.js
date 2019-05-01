import React from 'react';
import styles from './RecipeViewRight.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button'

const RecipeViewRight = ({ handleAddRecipeLike, ingredient, recipeType, cusine, specialDiet, 
  recipeTitle, recipeDescription, recipeLike, serving, cookingTime, difficulty }) => {
  const cx = classNames.bind(styles);
  return(
    <div className={cx('recipe_view_right')}>
      <div>
        <div className={cx('view_right_header')}>
          <ul className={cx('category')}>
            {ingredient !==''?<li>{ingredient}</li>:''}
            {recipeType !==''?<li>{recipeType}</li>:''}
            {cusine !==''?<li>{cusine}</li>:''}
            {specialDiet !==''?<li>{specialDiet}</li>:''}
          </ul>
          <h2>{recipeTitle}</h2>
          <p>{recipeDescription}</p>
        </div>
        <div className={cx('recipe_info')}>
          <ul>
            <li><i className='far fa-clock' size='4'></i><span>{cookingTime}</span></li>
            <li><i className='far fa-user'></i><span>{serving}</span></li>
            <li><i className='fas fa-bullseye'></i><span>{difficulty}</span></li>
          </ul>
        </div>
        <div className={cx('buttons')}>
          <Button color='violet' onClick={handleAddRecipeLike}><i className='fas fa-heart'></i> <span>좋아요 {recipeLike}</span></Button>
          <Button color='gray'><i className='far fa-comment-dots'></i> <span>댓글 {recipeLike}</span></Button>
        </div>
        {/*
        <div className={cx('writer_info')}>
          <div className={cx('writer_cover')}><img src={profileImage} alt={writer}/></div>
          <div className={cx('writer_profile')}>
            <div>{writer}</div>
            <p>{profileIntro}</p>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default RecipeViewRight;