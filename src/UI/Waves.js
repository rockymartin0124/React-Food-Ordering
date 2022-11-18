import React from 'react';
import waves from '../assets/wave.svg'
import classes from './Waves.module.css'

const Waves = () => {
    return (
        <div><img src={waves} alt="waves" className={classes.waves}/></div>
    );
};

export default Waves;


