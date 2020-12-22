import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: absolute;
  width: 70;
  height: 70;
  justify-content: center;
  align-items: center;
  right: 0;
  /* background-color: #fff; */
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 22;
  font-weight: 500;
  align-self: center;
`;

export const ItenCounterView = styled.View`
  width: 20;
  height: 20;
  border-radius: 10;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ItenCounter = styled.Text`
  color: #000;
  font-size: 16;
`;
