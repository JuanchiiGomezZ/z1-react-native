import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import styled, {css, DefaultTheme} from 'styled-components/native';
import Text from '../Text';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';

interface ButtonProps {
  variant?: ButtonVariant;
  loading?: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

const getButtonStyles = (theme: DefaultTheme, variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primary.dark};
        border: none;
      `;
    case 'secondary':
      return css`
        background-color: ${theme.colors.secondary};
        border: none;
      `;
    case 'outline':
      return css`
        background-color: transparent;
        border: 1px solid ${theme.colors.primary.default};
      `;
    case 'text':
      return css`
        background-color: transparent;
        border: none;
      `;
    default:
      return '';
  }
};

const StyledButton = styled(TouchableOpacity)<ButtonProps>`
  ${({theme, variant = 'primary'}) => css`
    ${getButtonStyles(theme, variant)}
    height: 40px;
    padding-horizontal: ${theme.spacing.lg}px;
    border-radius: ${theme.borderRadius.md}px;
    align-items: center;
    justify-content: center;
  `}
`;

const ButtonText = styled(Text)<{variant: ButtonVariant}>`
  ${({theme, variant}) => css`
    color: ${variant === 'outline' || variant === 'text'
      ? theme.colors.primary.default
      : theme.colors.text};
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.fontSize.xl}px;
  `}
`;

// Componente
const Button = ({
  variant = 'primary',
  loading = false,
  onPress,
  children,
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} onPress={onPress}>
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'outline' || variant === 'text' ? 'primary' : 'white'
          }
        />
      ) : (
        <ButtonText variant={variant}>{children}</ButtonText>
      )}
    </StyledButton>
  );
};

export default Button;
