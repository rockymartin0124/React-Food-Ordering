import React from 'react';
import classes from './Navbar.module.css';
const cart = require('../assets/cart.png');

const Navbar = (props) => {
  const cartClickHandler = () => {
    props.modalTrig();
  };

  return (
    <div className={classes.navbarBg}>
      <div className={classes.logoPlacer}>
        <h1>Takeway Order Application</h1>
      </div>
      <div></div>
      <div className={classes.cart} onClick={cartClickHandler}>
        <img src={cart.default} alt="cart" className={classes.cartImage} />
        <h2>Your Cart</h2>
        <div className={classes.bubble}>
          <p>{props.orderAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
