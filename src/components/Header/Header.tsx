import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {useTheme} from 'styled-components';
import Sun from '../../assets/icons/sun.svg';
import Moon from '../../assets/icons/moon.svg';
import AddTask from '../../assets/icons/plus-circle.svg';

import * as S from './Header.styles';

export function Header({...props}) {
  const theme = useTheme();

  const [showMoon, setShowMoon] = useState(false);

  return (
    <S.Container>
      <S.Title>todolist.</S.Title>
      <S.ActionsContainer>
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={props.handleShowModal}>
          <AddTask width={25} height={25} stroke={theme.color} />
        </TouchableOpacity>
        {!showMoon ? (
          <TouchableOpacity
            onPress={() => {
              setShowMoon(true);
            }}>
            <Moon width={25} height={25} stroke={theme.color} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setShowMoon(false);
            }}>
            <Sun width={25} height={25} stroke={theme.color} />
          </TouchableOpacity>
        )}
      </S.ActionsContainer>
    </S.Container>
  );
}
