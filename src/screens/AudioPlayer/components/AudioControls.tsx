import React from 'react';
import CircularButton, {
  CircularButtonProps,
} from '../../../components/Button/CircularButton';
import {Icon, IconProps} from '../../../components/Icon';

type AudioButtonProps = CircularButtonProps & {
  iconProps: IconProps;
};
export const AudioButton = ({onPress, iconProps, size}: AudioButtonProps) => {
  return (
    <CircularButton size={size} onPress={onPress}>
      <Icon {...iconProps} />
    </CircularButton>
  );
};
