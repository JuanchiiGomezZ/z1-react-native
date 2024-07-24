import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Container from '../Container';
import styled, {useTheme} from 'styled-components/native';

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary.darker};
`;

const Loader = () => {
  const {colors} = useTheme();
  return (
    <StyledContainer>
      <ActivityIndicator size="large" color={colors.text} />
    </StyledContainer>
  );
};
export default Loader;
