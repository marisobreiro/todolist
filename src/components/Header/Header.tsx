import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import * as S from './Header.styles';

export function Header() {
  return (
    <S.Container>
      <S.Title>todolist.</S.Title>
      <Icon name="menu" size={30} color="#FFF" />
    </S.Container>
  );
}
