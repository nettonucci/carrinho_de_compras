import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import api from '../../server/api';
import {useDispatch} from 'react-redux';
import {
  Container,
  Header,
  Title,
  Body,
  ScrollCategoryList,
  CategoryList,
  Category,
  ProductView,
  ProductPrice,
  ProductName,
  ProductImage,
  Load,
} from './styles';

import {alterList} from '../../store/productList';
import {productDetails} from '../../store/productDetails';
import {alterNumber} from '../../store/counter';

import Cart from '../../components/cart';

const Home = ({navigation}) => {
  const [products, setproducts] = useState([]);
  const [load, setload] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get(`products`).then(response => {
      // console.log(response.data);
      setproducts(response.data);
      dispatch(alterList(response.data));
      setload(false);
    });
  }, []);

  function handleClickItem(item) {
    dispatch(productDetails(item));
    // dispatch(alterNumber(item));
    navigation.navigate('ProductsInfo');
  }

  function handleClickCategory(item) {
    setload(true);
    if (item === 'Todos') {
      api.get(`products`).then(response => {
        // console.log(response.data);
        setproducts(response.data);
        dispatch(alterList(response.data));
        setload(false);
      });
    } else {
      const category = item;
      api.post('productsSearch', {category}).then(response => {
        console.log(response.data);
        setproducts(response.data);
        dispatch(alterList(response.data));
        setload(false);
      });
    }
  }

  return (
    <Container>
      <Header>
        <Title>Produtos</Title>
        <Cart navi={() => navigation.navigate('Cart')} />
      </Header>
      <Body style={{display: load ? 'flex' : 'none'}}>
        <Load size="large" color="#f44336" />
      </Body>
      <Body style={{display: load ? 'none' : 'flex'}}>
        <ScrollCategoryList horizontal>
          <CategoryList onPress={() => handleClickCategory('men clothing')}>
            <Category>Homem</Category>
          </CategoryList>
          <CategoryList onPress={() => handleClickCategory('women clothing')}>
            <Category>Mulher</Category>
          </CategoryList>
          <CategoryList onPress={() => handleClickCategory('jewelery')}>
            <Category>Jóias</Category>
          </CategoryList>
          <CategoryList onPress={() => handleClickCategory('electronics')}>
            <Category>Eletrônicos</Category>
          </CategoryList>
          <CategoryList onPress={() => handleClickCategory('Todos')}>
            <Category>Todos</Category>
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
      </Body>
    </Container>
  );
};

export default Home;
