import React, {memo, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {
  Container,
  Header,
  Back,
  ButtonBack,
  ProductName,
  ProductImage,
  ProductPrice,
} from './styles';
import Cart from '../../components/cart';

const ProductsInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.detail);
  console.log(details);
  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.navigate('HomeScreen')}>
          <Back>Back</Back>
        </ButtonBack>
        <Cart />
      </Header>
      <ProductImage source={{uri: details.image}} />
      <ProductName>{details.title}</ProductName>
      <ProductPrice>R$: {details.price.toFixed(2)}</ProductPrice>
    </Container>
  );
};

export default ProductsInfo;
