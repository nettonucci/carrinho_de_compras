import React from 'react';
import {FlatList, Text} from 'react-native';
import {
  Container,
  Header,
  Title,
  Icom,
  IconView,
  ProductViewEmpty,
  ListItens,
  ProductView,
  ProductName,
  ProductImage,
  Underline,
  AddToCartButton,
  AddToCartTitle,
  ProductRow,
  ProductInfo,
  ProductCategory,
  ProductQtd,
  ButtonTrash,
  MaterialCommunityIconsTrash,
  BuyButton,
  BuyButtonTitle,
} from './styles';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {CleanCart} from '../../store/counter';
import {DelItem} from '../../store/counter';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const List = useSelector(state => state.counter);

  function handleClearCart() {
    const cart = [];
    dispatch(CleanCart(cart));
  }

  function handleDelItem(item) {
    const id = item.id;
    dispatch(DelItem(id));
  }

  let var1;
  return (
    <Container>
      <Header>
        <IconView onPress={() => navigation.navigate('HomeScreen')}>
          <Icom name="arrow-left" />
        </IconView>
        <Title>Carrinho de Compras</Title>
      </Header>
      {List.length === 0 ? (
        <ProductViewEmpty>
          <ProductName>O carrinho está vazio 😭</ProductName>
        </ProductViewEmpty>
      ) : (
        <ListItens>
          <FlatList
            data={List}
            showsHorizontalScrollIndicator={false}
            // horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <ProductView>
                <ProductRow>
                  <ProductImage source={{uri: item.image}} />
                  <ProductInfo>
                    <ProductName>{item.title}</ProductName>
                    <ButtonTrash onPress={() => handleDelItem(item)}>
                      <MaterialCommunityIconsTrash name="trash-can" />
                    </ButtonTrash>
                    <ProductCategory>
                      Categoria: {item.category}
                    </ProductCategory>
                    <ProductQtd>Quantidade: </ProductQtd>
                  </ProductInfo>
                </ProductRow>
                <Underline />
              </ProductView>
            )}
          />
        </ListItens>
      )}
      <AddToCartButton onPress={() => navigation.navigate('HomeScreen')}>
        <AddToCartTitle>ADICIONAR PRODUTO</AddToCartTitle>
      </AddToCartButton>
      {List.length !== 0 ? (
        <>
          <BuyButton>
            <BuyButtonTitle>FINALIZAR</BuyButtonTitle>
          </BuyButton>
          <AddToCartButton onPress={handleClearCart}>
            <AddToCartTitle>LIMPAR CARRINHO</AddToCartTitle>
          </AddToCartButton>
        </>
      ) : null}
    </Container>
  );
};

export default Cart;
