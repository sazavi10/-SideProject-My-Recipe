import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import SearchBox from './SearchBox';
import RightSide from './RightSide';
import Button from '../Button';


const cx = classNames.bind(styles);

const Header = () => {
  const logged = true;
  return(
    <header className={cx('header')}>
      <div className={cx('inner')}>
        <h1><Link to="/">MY RECIPES</Link></h1>
        <nav>
          <ul>
            <li><Link to="/recipelist/">레시피</Link></li>
            <li><Link to="/recipelist/">쉐프</Link></li>
            <li><Link to="/recipelist/">토크</Link></li>
          </ul>
        </nav>
        <div className={cx('util')}>
          <div className={cx('search_box')}>
            <SearchBox/>
          </div>
          <Button color="white" to='/'>레시피 등록</Button>
          <RightSide logged = {logged}/>
        </div>
      </div>
    </header>
  )
}

export default Header;