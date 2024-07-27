import React from 'react';
import styled from 'styled-components/native';
import {ImageProps} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

interface StyledImageComponentProps extends ImageProps {
  width?: number;
  height?: number;
  marginVertical?: keyof DefaultTheme['spacing'];
}

const StyledImage = styled.Image<{
  width?: number;
  aspectRatio: number;
  marginVertical?: keyof DefaultTheme['spacing'];
}>`
  width: ${({width}) => (width ? `${width}px` : '100%')};
  aspect-ratio: ${({aspectRatio}) => aspectRatio};
  border-radius: ${({theme}) => theme.borderRadius.lg}px;
  background-color: ${({theme}) => theme.colors.primary.dark};
  margin-vertical: ${({theme, marginVertical}) =>
    marginVertical ? theme.spacing[marginVertical] : theme.spacing.lg}px;
`;

const Image = ({
  width,
  height,
  marginVertical,
  ...props
}: StyledImageComponentProps) => {
  const aspectRatio = width && height ? width / height : 1;

  return (
    <StyledImage
      width={width}
      aspectRatio={aspectRatio}
      marginVertical={marginVertical}
      {...props}
    />
  );
};

export default Image;
