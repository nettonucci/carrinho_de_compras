// pagina inicial, onde chama todas as outras telas.

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './src';
import GeneralStatusBarColor from './src/components/StatusBar';
import store from './src/store/index';
console.disableYellowBox = true;

export default function main() {
  return (
    <PaperProvider>
      <GeneralStatusBarColor
        backgroundColor="#DB3B2E"
        barStyle="light-content"
      />
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}
