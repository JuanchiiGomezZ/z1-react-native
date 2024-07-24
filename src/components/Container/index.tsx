import React, {ReactNode} from 'react';
import {StatusBar, StatusBarProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

type ContainerProps = StatusBarProps & {
  children: ReactNode;
};

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding-horizontal: ${({theme}) => theme.spacing.medium}px;
`;

const Container = ({children, ...props}: ContainerProps) => {
  const {colors} = useTheme();

  return (
    <StyledContainer>
      <StatusBar
        barStyle={props.translucent ? 'light-content' : 'dark-content'}
        backgroundColor={
          props.translucent ? colors.backdrop : colors.background
        }
        animated
        {...props}
      />
      {children}
    </StyledContainer>
  );
};

export default Container;
