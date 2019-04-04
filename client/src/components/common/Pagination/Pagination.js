import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from '../Button'

const cx = classNames.bind(styles);
const page = 1

const Pagination = () => (
  <div className={cx('pagination')}>
    <Button color='gray'>이전 페이지</Button>
       <div className={cx('number')}> 페이지 {page} </div>
    <Button>다음 페이지</Button>
</div>
);

export default Pagination;