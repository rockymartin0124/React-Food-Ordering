import React from 'react';
import classes from './Curtain.module.css'

const Curtain = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.trigger}>{props.children}</div>
    );
};

export default Curtain;