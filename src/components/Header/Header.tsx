import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useTheme} from 'styled-components';

import {icons} from '../../utils/icons';
import {IconButton} from '../UI/IconButton/IconButton';

import * as S from './Header.styles';

export function Header({...props}) {
  const theme = useTheme();
  const [showMoon, setShowMoon] = useState(false);
  const Icon = showMoon ? icons.moon : icons.sun;
  const size = Platform.OS === 'ios' ? 30 : 25;

  return (
    <S.Container>
      <S.Title>todolist.</S.Title>
      <S.ActionsContainer>
        <IconButton type="plus" onPress={props.handleShowModal} />
        <S.IconContainer
          onPress={() => {
            showMoon ? setShowMoon(false) : setShowMoon(true);
          }}>
          <Icon width={size} height={size} stroke={theme.color} />
        </S.IconContainer>
      </S.ActionsContainer>
    </S.Container>
  );
}
