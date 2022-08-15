import React, {useState} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

import {icons} from '../../utils/icons';

import * as S from './Task.styles';

interface TaskProps extends TouchableOpacityProps {}

export function Task({children, ...props}: TaskProps) {
  const theme = useTheme();
  const [done, setDone] = useState(false);
  const Trash = icons.trash;
  const Icon = done ? icons.check : icons.circle;
  const size = 25;

  return (
    <>
      <S.TaskCard
        onPress={() => {
          !done ? setDone(true) : setDone(false);
        }}>
        <S.TaskContainer>
          <Icon height={size} width={size} stroke={theme.color} />
          <S.TaskText>{children}</S.TaskText>
        </S.TaskContainer>
        <S.DeleteTask {...props}>
          <Trash height={size} width={size} stroke={theme.color} />
        </S.DeleteTask>
      </S.TaskCard>
    </>
  );
}
