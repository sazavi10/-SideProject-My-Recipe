import React from 'react';
import RecipeItemList from 'components/RecipeList/RecipeItemList';
import ImageSlider from 'components/ImageSlider';
import classNames from 'classnames/bind';
import styles from './RecipeMainWrapper.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const RecipeMainWrapper = () => {
    return(
        <div className={cx('main_wrapper')}>
            <ImageSlider/>
            <div className={cx('title_area')}>
                <h2>오늘의 레시피~</h2>
                <span><Link to='/recipelist'>전체 보기</Link></span>
            </div>
            <RecipeItemList/>
        </div>
    )
}

export default RecipeMainWrapper;