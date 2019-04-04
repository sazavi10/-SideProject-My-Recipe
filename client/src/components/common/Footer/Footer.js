import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx('footer')}>
    ©2019 MY RECIPES, by Ryan K
  </footer>
);

export default Footer;