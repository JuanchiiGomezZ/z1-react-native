import React from 'react';
import styled from 'styled-components/native';
import Text from '../Text';

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  padding-vertical: ${({theme}) => theme.spacing.lg}px;
`;

const Footer = () => {
  return (
    <StyledView>
      <Text variant="bodyLarge">Hecho con amor, Juanchi ❤️</Text>
    </StyledView>
  );
};

export default Footer;
