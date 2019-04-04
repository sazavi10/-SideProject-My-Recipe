import React from 'react';
import styles from './RecipeCategory.scss';
import classNames from 'classnames/bind';
import Category from './Category';

const cx = classNames.bind(styles);

const RecipeCategory = ({category, title, onVisible, setFilter, onSetFilter, onDeleteFilter}) => {
    
    const recipeCategory = category.map(
        (category, i) => {
            const { cateTitle, selected, cateArray} = category.toJS();
            return(
            <Category
                key={i}
                index={i}
                category={category}
                selected={selected}
                cateTitle={cateTitle}
                onVisible={onVisible}
                onSetFilter={onSetFilter}
                data={cateArray}
            />
            )
        }
    );
    const setFielterKey = []
    const setFielterValue = []

    for (const [key, value] of new Map(setFilter)) {
        setFielterKey.push(key)
        setFielterValue.push(value)
    }

    const setFilterItem = setFielterValue.map(
        (item, idx) => {
            const selectKey = setFielterKey[idx]
            return <li key={idx} onClick={()=> onDeleteFilter(selectKey)}>{item} <i className="fas fa-times"></i></li>
        }
    )

    return(
        <div className={cx('recipe_cate')}>
            <div className={cx('recipe_category')}>
                <ul>
                    {recipeCategory}   
                </ul>
            </div>
            <div className={cx('set_filter_item')}>
                <ul>
                    {setFilterItem}   
                </ul>
            </div>
        </div>
    )

}

export default RecipeCategory;