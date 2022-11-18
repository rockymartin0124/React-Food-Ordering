import React from 'react';
import BoxInfo from '../components/BoxInfo';
import BoxMenu from '../components/BoxMenu';
import classes from './Skeleton.module.css';

const Skeleton = (props) => {
  return (<div>

      {props.children}
    <div className={classes.container}>
      <div className={classes.child}>
        <div className={classes.boxInfo}>
          <BoxInfo />
        </div>
        <div className={classes.boxMenu}>
          <BoxMenu meals={props.meals} addFunc={props.addFunc}/>
        </div>
        <div className={classes.foot}>
          <footer>
            <h4>Justinas Kairys 2021</h4>
          </footer>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Skeleton;
