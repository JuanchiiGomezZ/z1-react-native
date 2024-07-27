import React from 'react';
import styled from 'styled-components/native';
import {Icon, IconProps} from '@/components/Icon';

export type CircularButtonProps = {
  onPress?: () => void;
  children?: React.ReactNode;
  size?: number;
};

type CircularIconButtonProps = CircularButtonProps & {
  iconProps: IconProps;
};
export const CircularIconButton = ({
  onPress,
  iconProps,
  size,
}: CircularIconButtonProps) => {
  return (
    <CircularButton size={size} onPress={onPress}>
      <Icon {...iconProps} />
    </CircularButton>
  );
};

const StyledCircularButton = styled.TouchableOpacity<{size: number}>`
  width: ${props => props.size}px;
  aspect-ratio: 1;
  border-radius: ${({theme}) => theme.borderRadius.full}px;
  background-color: ${({theme}) => theme.colors.primary.default};
  justify-content: center;
  align-items: center;
`;

const CircularButton = ({
  onPress,
  children,
  size = 50,
}: CircularButtonProps) => {
  return (
    <StyledCircularButton onPress={onPress} size={size}>
      {children}
    </StyledCircularButton>
  );
};

export default CircularButton;
