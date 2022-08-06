import React, {useState} from 'react';
import {TextProps} from 'react-native';
import {useTheme} from 'styled-components';

import Todo from '../../../assets/icons/circle.svg';
import Done from '../../../assets/icons/check-circle.svg';

import * as S from './Task.styles';

export function Task({children}: TextProps) {
  const theme = useTheme();
  const [done, setDone] = useState(false);

  return (
    <S.TaskContainer onPress={() => setDone(true)}>
      {!done ? (
        <Todo height={20} width={20} stroke={theme.color} />
      ) : (
        <Done height={20} width={20} stroke={theme.color} />
      )}
      <S.TaskText>{children}</S.TaskText>
    </S.TaskContainer>
  );
}
