import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Footer = ({footerType}) => (
  
<<<<<<< HEAD
  footerType === true?
  <footer className={cx('write_footer ')}>
    <button>발행하기</button>
  </footer>
  :<footer className={cx('footer')}>
    ©2019 MY RECIPES, by Ryan K
  </footer>
=======
  footerType !== true?
 <footer className={cx('footer')}>
    ©2019 MY RECIPES, by Ryan K
  </footer>
  : ''
>>>>>>> Server&Db set end! write&view end - img upload ing
);

export default Footer;