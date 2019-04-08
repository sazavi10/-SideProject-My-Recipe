import React from 'react';
import styles from './RecipeViewWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RecipeViewWrapper = ({children}) => (
  <div className={cx('recipe_view_wrap')}>
    {children}
  </div>
);

export default RecipeViewWrapper;