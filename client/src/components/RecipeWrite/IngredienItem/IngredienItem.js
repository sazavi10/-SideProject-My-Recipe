import React from 'react';
import styles from './IngredienItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const IngredienItem = ({cateTitle, data, cateName, handleChange}) => (
    <div className={cx('cate_box')}>
    <h3>{cateTitle}</h3>
    <ul>
      {
        data.map(
          (data, idx) => {
            return(
              <li key={idx}>
                <input type='radio' name={cateName} id={`${cateName}_${idx}`} onChange={handleChange} value={data}/>
                <label htmlFor={`${cateName}_${idx}`}>{data}</label>
              </li>
            )
          }  
        )
      }      
    </ul>
  </div>
);

export default IngredienItem;