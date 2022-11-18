import React, { useState } from 'react';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  const [inputState, setinputState] = useState(0);

  const addToCart = () => {
    if (inputState === 0) {
      return;
    }
    if (!inputState) {
      return;
    } else {
      props.addFunc(inputState, props.name, props.price, props.id);
      setinputState(0);
    }
  };

  const onInputChange = (event) => {
    setinputState(event.target.value);
  };

  return (
    <ul className={classes.listItem}>
      <div className={classes.itemDescription}>
         
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <h3>{`$ ${props.price}`}</h3>
      </div>
      <div className={classes.itemOptions}>
        <div>
          <label>Amount</label>
          <input type="number" min="0" onChange={onInputChange} value={inputState} />
        </div>
        <div className={classes.buttonAlig}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </ul>
  );
};

export default MenuItem;
