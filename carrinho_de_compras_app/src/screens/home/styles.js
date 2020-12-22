import styled from 'styled-components/native';

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
  font-weight: 500;
  align-self: center;
`;

export const ScrollCategoryList = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 70;
`;

export const CategoryList = styled.TouchableOpacity`
  width: auto;
  height: 40;
  justify-content: center;
  margin-top: 10;
  margin-left: 5;
  margin-right: 5;
  border-radius: 7;
  background-color: #c1d3ed;
`;

export const Category = styled.Text`
  margin-left: 5;
  margin-right: 5;
`;

export const ProductView = styled.TouchableOpacity`
  width: 200;
  height: 230;
  border-radius: 5;
  margin-bottom: 10;
  margin-left: 5;
  background-color: #fff;
  border-width: 1;
  border-color: #f3eaea;
  box-shadow: 0px 3px 0px #c5c5c566;
`;
export const ProductPrice = styled.Text`
  font-size: 17;
  font-weight: 500;
  margin-top: 10;
  margin-left: 5;
`;

export const ProductName = styled.Text`
  font-size: 15;
  margin-top: 5;
  margin-left: 5;
`;

export const ProductImage = styled.Image`
  width: auto;
  height: 120;
  resize-mode: contain;
  margin-top: 10;
`;
