import React from 'react';
import styles from './RecipeViewWrapper.scss';
import RecipeViewLeft from 'components/RecipeView/RecipeViewLeft';
import RecipeViewRight from 'components/RecipeView/RecipeViewRight';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RecipeViewWrapper = ({id}) => (
  <div className={cx('recipe_view_wrap')}>
    <RecipeViewLeft id = {id}/>
    <RecipeViewRight  id = {id}/>
  </div>
);

export default RecipeViewWrapper;