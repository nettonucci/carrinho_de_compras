import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, Title, ItenCounterView, ItenCounter} from './styles';

const Cart = ({navi}) => {
  const number = useSelector(state => state.counter);
  console.log(number);
  const count = number.length;
  function teste() {
    navi();
  }
  return (
    <Container onPress={teste}>
      <Title>Cart</Title>
      <ItenCounterView>
        <ItenCounter>{count}</ItenCounter>
      </ItenCounterView>
    </Container>
  );
};

export default Cart;
