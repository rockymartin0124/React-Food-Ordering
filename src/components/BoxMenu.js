import React from 'react';
import MenuItem from './MenuItem';

const BoxMenu = (props) => {
  return (
    <div>
      {props.meals.map((meal) => (
        <MenuItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          price={meal.price}
          description={meal.description}
          addFunc={props.addFunc}
        />
      ))}
    </div>
  );
};

export default BoxMenu;
