import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 70;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f44336;
`;

export const ButtonBack = styled.TouchableOpacity`
  /* background-color: #f1f; */
  width: 50;
  justify-content: center;
`;

export const Icom = styled(Icon)`
  color: #fff;
  font-size: 30;
  font-weight: 500;
  align-self: center;
`;

export const Back = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-left: 20;
`;

export const ProductImage = styled.Image`
  width: 75%;
  height: 250;
  align-self: center;
  resize-mode: contain;
  margin-top: 10;
`;

export const ProductName = styled.Text`
  font-size: 25;
  font-weight: 500;
  margin-top: 5;
  margin-left: 5;
`;

export const ProductPrice = styled.Text`
  font-size: 36;
  font-weight: 500;
  align-self: center;
  margin-top: 10;
`;

export const ProductDescriptionView = styled.View`
  width: 100%;
  height: 40;
  margin-top: 20;
  align-items: center;
  flex-direction: row;
  /* background-color: #f44336; */
`;

export const Underline = styled.View`
  width: 100%;
  height: 1;
  margin-left: 5;
  margin-right: 5;
  background-color: #d8dae0;
`;

export const ProductDescriptionTitle = styled.Text`
  font-size: 18;
  font-weight: 500;
  margin-left: 5;
`;

export const ProductDescription = styled.Text`
  font-size: 15;
  margin-left: 5;
  margin-right: 5;
  color: #7c7c7c;
`;

export const Button = styled.TouchableOpacity`
  width: 180;
  height: 36;
  align-self: center;
  justify-content: center;
  border-radius: 5;
  margin-top: 50;
  background-color: #f44336;
`;

export const ButtonTitle = styled.Text`
  font-size: 20;
  font-weight: bold;
  align-self: center;
  color: #fff;
`;

export const AddToCartButton = styled.TouchableOpacity`
  width: 200;
  height: 20;
  margin-top: 20;
  margin-bottom: 30;
  align-self: center;
  justify-content: center;
`;

export const AddToCartTitle = styled.Text`
  font-size: 15;
  font-weight: 500;
  align-self: center;
  color: #f44336;
`;

export const Scroll = styled.ScrollView``;
