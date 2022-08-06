import React, {useState} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {useTheme} from 'styled-components';
import Sun from '../../assets/icons/sun.svg';
import Moon from '../../assets/icons/moon.svg';

import * as S from './Header.styles';

export function Header({onPress}: TouchableOpacityProps) {
  const theme = useTheme();

  const [showMoon, setShowMoon] = useState(false);

  return (
    <S.Container>
      <S.Title>todolist.</S.Title>
      {!showMoon ? (
        <TouchableOpacity
          onPress={() => {
            setShowMoon(true);
            onPress;
          }}>
          <Moon width={25} height={25} stroke={theme.color} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setShowMoon(false);
            onPress;
          }}>
          <Sun width={25} height={25} stroke={theme.color} />
        </TouchableOpacity>
      )}
    </S.Container>
  );
}
