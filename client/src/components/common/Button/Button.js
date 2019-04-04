import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>;

const Button = ({children, to, onClick, disabled, shape, color, size, type}) => {
  const Ele = (to && !disabled) ? Link : Div;
  return(
    <Ele className={cx('button', shape, color, size, type)} to={to} disabled={disabled}  onClick={disabled ? () => null : onClick}>
      {children}
    </Ele>
  )
};

export default Button;