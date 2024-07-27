import Error from '@/assets/images/Error';
import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import Text from '../Text';

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
`;

const ErrorState = () => {
  const {colors} = useTheme();
  return (
    <StyledView>
      <Error
        width={400}
        height={350}
        primaryColor={colors.primary.subtle}
        secondaryColor={colors.primary.darker}
        tertiaryColor={colors.primary.default}
      />
    </StyledView>
  );
};

export default ErrorState;
