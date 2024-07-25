import React, {ReactNode} from 'react';
import {StatusBar, StatusBarProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

type ContainerProps = StatusBarProps & {
  children: ReactNode;
};

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary.darker};
`;
const StyledView = styled.View`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const Container = ({children, ...props}: ContainerProps) => {
  const {colors} = useTheme();

  return (
    <StyledContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={
          props.translucent ? colors.backdrop : colors.primary.darker
        }
        animated
        {...props}
      />
      <StyledView>{children}</StyledView>
    </StyledContainer>
  );
};

export default Container;
