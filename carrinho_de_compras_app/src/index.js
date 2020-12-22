// pagina para criação de rotas, todas as telas criadas estao aqui para que possam ser utilizada

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, ProductsInfo} from './screens';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductsInfo" component={ProductsInfo} />
    </Stack.Navigator>
  );
}
