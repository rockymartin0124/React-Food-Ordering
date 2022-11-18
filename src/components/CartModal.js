import React from 'react';
import Order from './Order';
import closeIcon from '../assets/151882.png';
import classes from './CartModal.module.css';
import Curtain from '../UI/Curtain';

const CartModal = (props) => {
  const modalTriggered = () => {
    props.modalTrig();
  };

  let numberOfItems = 0;
  let priceToPay = 0;

  props.order.map(
    (calculated) => (numberOfItems = numberOfItems + calculated.value)
  );
  props.order.map(
    (calculated) =>
      (priceToPay = calculated.price * calculated.value + priceToPay)
  );

  return (
    <div>
      {props.modalStatus ? (
        <div>
          <Curtain trigger={modalTriggered} />

          <div className={classes.modalGrid}>
            <button className={classes.closeButton} onClick={modalTriggered}>
              <img
                src={closeIcon}
                alt="close icon"
                className={classes.closeIcon}
              />
            </button>
            <div className={classes.modal}>
              <div></div>

              {props.order.map((myOrder) => (
                <Order
                  id={myOrder.id}
                  key={Math.random()}
                  name={myOrder.name}
                  price={myOrder.price}
                  value={myOrder.value}
                />
              ))}
            </div>
            <div className={classes.totalDiv}>
              <h2>{`Total: $ ${Math.round(priceToPay * 100) / 100}`}</h2>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartModal;
