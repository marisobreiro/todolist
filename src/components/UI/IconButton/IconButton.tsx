import React from 'react';
import {Platform, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

import {icons} from '../../../utils/icons';
import * as S from './IconButton.styles';

interface IconButton extends TouchableOpacityProps {
  type: string;
}

export function IconButton({type, ...props}: IconButton) {
  const theme = useTheme();
  const Icon = icons[type];
  const size = Platform.OS === 'ios' ? 30 : 25;

  return (
    <S.IconContainer {...props}>
      <Icon width={size} height={size} stroke={theme.color} />
    </S.IconContainer>
  );
}
