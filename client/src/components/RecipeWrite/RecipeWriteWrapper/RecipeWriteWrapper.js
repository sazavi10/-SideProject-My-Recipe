import React from 'react';
import styles from './RecipeWriteWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RecipeWriteWrapper = ({children}) => (
  <div className={cx('recipe_write_wrapper')}>
    {children}
  </div>
);

export default RecipeWriteWrapper;