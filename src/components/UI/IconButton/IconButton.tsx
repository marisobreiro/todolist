import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

import {icons} from '../../../utils/icons';

interface IconButton extends TouchableOpacityProps {
  type: string;
}

export function IconButton({type, ...props}: IconButton) {
  const theme = useTheme();
  const Icon = icons[type];
  const size = 25;

  return (
    <TouchableOpacity {...props}>
      <Icon width={size} height={size} stroke={theme.color} />
    </TouchableOpacity>
  );
}
