import React from 'react';
import {useSelector} from 'react-redux';

import {Container, ItenCounterView, ItenCounter, Icom} from './styles';

const Cart = ({navi}) => {
  const number = useSelector(state => state.counter);
  const count = number.length;
  function teste() {
    navi();
  }
  return (
    <Container onPress={teste}>
      <Icom name="cart-outline" />
      {count !== 0 ? (
        <ItenCounterView>
          <ItenCounter>{count}</ItenCounter>
        </ItenCounterView>
      ) : null}
    </Container>
  );
};

export default Cart;
