import React from 'react';
import styled from 'styled-components/native';
import Text from '../Text';

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
`;

type ScreenTitleProps = {
  title: string;
};

const ScreenTitle = ({title}: ScreenTitleProps) => (
  <StyledView>
    <Text variant="header">{title}</Text>
  </StyledView>
);

export default ScreenTitle;
