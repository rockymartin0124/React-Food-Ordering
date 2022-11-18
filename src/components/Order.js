import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {
  return (
    <div className={classes.orderItem}>
      <h4>
        {props.name} x {props.value}:
      </h4>
      <p>${Math.round(props.value * props.price * 100) / 100}</p>
    </div>
  );
};

export default Order;
