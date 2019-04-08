import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const cx = classNames.bind(styles);

const PageTemplate = ({children, footerType}) => (
  <div className={cx('page_wrapper')}>
    <Header/>
    <main>{children}</main>
    <Footer footerType={footerType}/>
  </div>
);

export default PageTemplate;