import React, {useState} from 'react';
import {TextProps, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

import {icons} from '../../utils/icons';

import * as S from './Task.styles';

interface TaskProps extends TouchableOpacityProps {}

export function Task({children, ...props}: TaskProps) {
  const theme = useTheme();
  const [done, setDone] = useState(false);
  const Todo = icons.circle;
  const Done = icons.check;
  const Trash = icons.trash;

  return (
    <>
      {!done ? (
        <S.TaskCard onPress={() => setDone(true)}>
          <S.TaskContainer>
            <Todo height={20} width={20} stroke={theme.color} />
            <S.TaskText>{children}</S.TaskText>
          </S.TaskContainer>
          <S.DeleteTask {...props}>
            <Trash height={20} width={20} stroke={theme.color} />
          </S.DeleteTask>
        </S.TaskCard>
      ) : (
        <S.TaskCard onPress={() => setDone(false)}>
          <Done height={20} width={20} stroke={theme.color} />
          <S.TaskText>{children}</S.TaskText>
        </S.TaskCard>
      )}
    </>
  );
}
