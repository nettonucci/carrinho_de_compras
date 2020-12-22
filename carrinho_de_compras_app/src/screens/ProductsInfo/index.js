import React, {memo, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {
  Container,
  Header,
  Scroll,
  ButtonBack,
  ProductName,
  ProductImage,
  ProductPrice,
  Icom,
  ProductDescriptionTitle,
  ProductDescriptionView,
  ProductDescription,
  Underline,
  Button,
  ButtonTitle,
  AddToCartButton,
  AddToCartTitle,
} from './styles';
import Cart from '../../components/cart';

import {alterNumber} from '../../store/counter';

const ProductsInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.detail);
  function handleClickAddToCart() {
    dispatch(alterNumber(details));
  }

  function handleClickBuy() {
    dispatch(alterNumber(details));
    navigation.navigate('Cart');
  }
  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.navigate('HomeScreen')}>
          <Icom name="arrow-left" />
        </ButtonBack>
        <Cart navi={() => navigation.navigate('Cart')} />
      </Header>
      <Scroll>
        <ProductImage source={{uri: details.image}} />
        <ProductName>{details.title}</ProductName>
        <ProductPrice>R$: {details.price.toFixed(2)}</ProductPrice>
        <ProductDescriptionView>
          <ProductDescriptionTitle>Descrição</ProductDescriptionTitle>
          <Underline />
        </ProductDescriptionView>
        <ProductDescription>{details.description}</ProductDescription>
        <Button onPress={handleClickBuy}>
          <ButtonTitle>COMPRAR</ButtonTitle>
        </Button>
        <AddToCartButton onPress={handleClickAddToCart}>
          <AddToCartTitle>ADICIONAR AO CARRINHO</AddToCartTitle>
        </AddToCartButton>
      </Scroll>
    </Container>
  );
};

export default ProductsInfo;
