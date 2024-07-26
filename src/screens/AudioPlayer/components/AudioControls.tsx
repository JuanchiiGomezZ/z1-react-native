import React from 'react';
import CircularButton, {
  CircularButtonProps,
} from '../../../components/Button/CircularButton';
import {Icon, IconProps} from '../../../components/Icon';

type AudioButtonProps = CircularButtonProps & {
  iconProps: IconProps;
};
export const AudioButton = ({onPress, iconProps}: AudioButtonProps) => {
  return (
    <CircularButton size={70} onPress={onPress}>
      <Icon {...iconProps} />
    </CircularButton>
  );
};
