import styled from 'styled-components/native';

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
