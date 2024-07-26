import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Pressable} from 'react-native';

export type IconProps = {
  icon: IconDefinition;
  size?: number;
  color?: string;
};

type PressableIconProps = IconProps & {
  onPress?: () => void;
};

export const Icon = ({icon, size = 25, color}: IconProps) => {
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
};

export const PressableIcon = ({
  icon,
  size = 25,
  color,
  onPress,
}: PressableIconProps) => {
  return (
    <Pressable onPress={onPress}>
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    </Pressable>
  );
};
