import React, { useState } from 'react';
import Skeleton from './UI/Skeleton';
import Navbar from './components/Navbar';
import Background from './UI/Background';
import Waves from './UI/Waves';
import CartModal from './components/CartModal';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Barbecue Ribs',
    description: 'Bbq ribs made from the finest pork',
    price: 16.25,
  },
  {
    id: 'm3',
    name: 'Fish and Chips',
    description: 'Traditional British dish, option of sea bass or cod',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'American style Burger',
    description: '50oz American style beef burger with 100 British beef',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Pizza',
    description: 'Microwaved, not recommending',
    price: 4.59,
  },
];

const DUMMY_ORDER = [
  // {
  //   id: 'm1',
  //   name: 'Sushi',
  //   price: 22.99,
  //   value: 2,
  // },
  // {
  //   id: 'm2',
  //   name: 'Barbecue Ribs',
  //   price: 16.25,
  //   value: 1,
  // },
  // {
  //   id: 'm3',
  //   name: 'Fish and Chips',
  //   price: 12.99,
  //   value: 1,
  // },
];

function App(app) {
  const [orderState, setorderState] = useState(0);
  const [modalStatus, setmodalStatus] = useState(false);
  const [myorder, setMyorder] = useState(DUMMY_ORDER);

  const onOrderListener = (numberOfItems, item, price, id) => {
    setorderState((prevState) => {
      return [parseInt(numberOfItems) + parseInt(orderState)];
    });

    setMyorder((prevState) => {
console.log(myorder);


      if(prevState.indexOf({
        name: item,
      }) !== -1){
        console.log("Value exists!");
    } else{
      console.log("Value NOT exists!");
    }

      return [
        ...myorder,
        {
          id: id,
          name: item,
          price: price,
          value: numberOfItems,
        },
      ];
    });

    // setMyorder([
    //   {
    //     id: 'm1',
    //     name: item,
    //     price: 22.99,
    //     value: numberOfItems,
    //   },

    // ]);
  };

  const modalTriggered = () => {
    modalStatus ? setmodalStatus(false) : setmodalStatus(true);

    // if (modalStatus) {
    //   setmodalStatus(false);
    // }
    // if (!modalStatus) {
    //   setmodalStatus(true);
    // }
  };

  return (
    <div>
      <Background>
        <Navbar
          orderAmount={orderState}
          modalTrig={modalTriggered}
          modalStatus={modalStatus}
        />
    
        <Skeleton meals={DUMMY_MEALS} addFunc={onOrderListener} >    <Waves /></Skeleton>
        <CartModal
          modalTrig={modalTriggered}
          modalStatus={modalStatus}
          order={myorder}
        />
      </Background>
    </div>
  );
}

export default App;
