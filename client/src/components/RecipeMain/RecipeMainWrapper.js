import React from 'react';
import classNames from 'classnames/bind';
import styles from './RecipeMainWrapper.scss';

const cx = classNames.bind(styles);
 
const RecipeMainWrapper = ({children}) => {
    return(
        <div className={cx('main_wrapper')}>
            {children}
        </div>
    )
}

export default RecipeMainWrapper;