import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {darkMode, lightMode} from './src/config/theme';
import {Header} from './src/components/Header/Header';

import * as S from './App.styles';
import { Tasks } from './src/components/Main/Tasks';

const App = () => {
  const scheme = useColorScheme();

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkMode : lightMode}>
      <S.Container>
        <StatusBar />
        <Header />
        <Tasks />
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
