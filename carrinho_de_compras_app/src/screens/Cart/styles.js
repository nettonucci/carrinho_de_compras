import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  margin-bottom: 10;
`;

export const Header = styled.View`
  width: 100%;
  height: 70;
  flex-direction: row;
  justify-content: center;
  background-color: #f44336;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 22;
  font-weight: bold;
  align-self: center;
`;

export const IconView = styled.TouchableOpacity`
  position: absolute;
  width: 50;
  height: 70;
  justify-content: center;
  align-items: center;
  left: 0;
  /* background-color: #fff; */
`;

export const Icom = styled(Icon)`
  color: #fff;
  font-size: 30;
  font-weight: 500;
  align-self: center;
`;

export const ProductView = styled.View`
  width: 100%;
  height: auto;
`;

export const ProductRow = styled.View`
  flex-direction: row;
`;

export const ProductInfo = styled.View`
  width: 65%;
`;

export const ProductViewEmpty = styled.View`
  width: 100%;
  height: 150;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.Text`
  font-size: 15;
  font-weight: 500;
  margin-top: 5;
  margin-left: 5;
`;

export const ProductCategory = styled.Text`
  font-size: 15;
  margin-top: 5;
  margin-left: 5;
  color: #393636;
`;

export const ProductQtd = styled.Text`
  font-size: 15;
  margin-top: 5;
  margin-left: 5;
  color: #393636;
`;

export const ProductImage = styled.Image`
  width: 120;
  height: 120;
  resize-mode: contain;
  margin-top: 10;
  margin-left: 5;
`;

export const Underline = styled.View`
  width: 95%;
  height: 1;
  margin-top: 10;
  margin-bottom: 10;
  align-self: center;
  background-color: #d8dae0;
`;

export const AddToCartButton = styled.TouchableOpacity`
  width: 200;
  height: 20;
  margin-top: 10;
  align-self: center;
  justify-content: center;
`;

export const AddToCartTitle = styled.Text`
  font-size: 15;
  font-weight: 500;
  align-self: center;
  color: #f44336;
`;

export const BuyButton = styled.TouchableOpacity`
  width: 180;
  height: 36;
  align-self: center;
  justify-content: center;
  border-radius: 5;
  margin-top: 50;
  background-color: #f44336;
`;

export const BuyButtonTitle = styled.Text`
  font-size: 20;
  font-weight: bold;
  align-self: center;
  color: #fff;
`;

export const ButtonTrash = styled.TouchableOpacity`
  width: 30;
  height: 30;
  align-self: flex-end;
  margin-right: 5;
`;

export const MaterialCommunityIconsTrash = styled(Icon)`
  color: #bbbbbb;
  font-size: 30;
  font-weight: 500;
  align-self: center;
`;

export const ListItens = styled.View`
  width: 100%;
  height: 50%;
`;
