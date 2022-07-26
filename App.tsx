import React from 'react';
import {StatusBar} from 'react-native';

import * as S from './App.styles';
import {Header} from './src/components/Header/Header';

const App = () => {
  return (
    <S.Container>
      <StatusBar />
      <Header />
    </S.Container>
  );
};

export default App;
