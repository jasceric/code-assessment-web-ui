import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import bag from '../../assets/bag.svg';

import styles from './CartButton.module.scss';

const CartButton = ({ className, cartQuantity }) => {
  return (
    <Link to="/cart" className={cx(styles.button, className)}>
      <span className={styles.icon}>
        <img src={bag} alt="shopping bag" />
      </span>
      {!!cartQuantity && (
        <span className={styles.quantity}>{cartQuantity}</span>
      )}
    </Link>
  );
};

CartButton.propTypes = {
  cartQuantity: PropTypes.number,
  className: PropTypes.string
};

export default CartButton;
