import React, {useState, useEffect} from 'react';
import {FlatList, Alert} from 'react-native';
import {Dialog, Portal} from 'react-native-paper';
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
  ViewRow,
  BoxIcons,
  IconLess,
  IconMore,
  ProductPrice,
  ButtonMoreOLess,
  ModalContainer,
  PayButton,
  PayButtonTitle,
  ProductQtdFinal,
} from './styles';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {CleanCart} from '../../store/counter';
import {DelItem} from '../../store/counter';

const Cart = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [Total, setTotal] = useState(0);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
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

  function handleClickFinal() {
    let total = 0;
    List.forEach(Lista => {
      console.log(Lista.price);
      total = total + Lista.price;
    });
    console.log(total);
    setTotal(total);
    showDialog();
  }

  function handlePagar() {
    const cart = [];
    dispatch(CleanCart(cart));
    hideDialog();
    Alert.alert('Sucesso', 'Pagamento realizado com sucesso');
    navigation.navigate('HomeScreen');
  }

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
                    <ViewRow>
                      <ProductQtd>Quantidade: 1</ProductQtd>
                      <BoxIcons>
                        <ButtonMoreOLess onPress={() => handleDelItem(item)}>
                          <IconLess name="minus" />
                        </ButtonMoreOLess>
                        <ButtonMoreOLess>
                          <IconMore name="plus" />
                        </ButtonMoreOLess>
                      </BoxIcons>
                      <ProductPrice>R$: {item.price.toFixed(2)}</ProductPrice>
                    </ViewRow>
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
          <BuyButton onPress={handleClickFinal}>
            <BuyButtonTitle>FINALIZAR</BuyButtonTitle>
          </BuyButton>
          <AddToCartButton onPress={handleClearCart}>
            <AddToCartTitle>LIMPAR CARRINHO</AddToCartTitle>
          </AddToCartButton>
        </>
      ) : null}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <ModalContainer>
            <ProductQtdFinal>
              Quantidade de itens: {List.length}
            </ProductQtdFinal>
            <ProductPrice>Total R$: {Total.toFixed(2)}</ProductPrice>
            <PayButton onPress={handlePagar}>
              <PayButtonTitle>PAGAR</PayButtonTitle>
            </PayButton>
          </ModalContainer>
        </Dialog>
      </Portal>
    </Container>
  );
};

export default Cart;
