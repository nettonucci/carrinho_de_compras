import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import api from '../../server/api';
import {useDispatch} from 'react-redux';
import {
  Container,
  Header,
  Title,
  ScrollCategoryList,
  CategoryList,
  Category,
  ProductView,
  ProductPrice,
  ProductName,
  ProductImage,
} from './styles';

import {alterList} from '../../store/productList';
import {productDetails} from '../../store/productDetails';
import {alterNumber} from '../../store/counter';

import Cart from '../../components/cart';

const Home = ({navigation}) => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get(`products`).then(response => {
      // console.log(response.data);
      setproducts(response.data);
      dispatch(alterList(response.data));
    });
  }, []);

  function handleClickItem(item) {
    dispatch(productDetails(item));
    // dispatch(alterNumber(item));
    navigation.navigate('ProductsInfo');
  }

  return (
    <Container>
      <Header>
        <Title>Produtos</Title>
        <Cart navi={() => navigation.navigate('Cart')} />
      </Header>
      <ScrollCategoryList horizontal>
        <CategoryList>
          <Category>Homem</Category>
        </CategoryList>
        <CategoryList>
          <Category>Mulher</Category>
        </CategoryList>
        <CategoryList>
          <Category>Jóias</Category>
        </CategoryList>
        <CategoryList>
          <Category>Eletrônicos</Category>
        </CategoryList>
      </ScrollCategoryList>
      <FlatList
        data={products}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        // horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ProductView onPress={() => handleClickItem(item)}>
            <ProductImage source={{uri: item.image}} />
            <ProductName numberOfLines={2}>{item.title}</ProductName>
            <ProductPrice>R$: {item.price.toFixed(2)}</ProductPrice>
          </ProductView>
        )}
      />
    </Container>
  );
};

export default Home;
