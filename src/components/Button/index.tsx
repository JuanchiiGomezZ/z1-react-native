import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import styled, {css, DefaultTheme} from 'styled-components/native';
import Text from '../Text';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

const getButtonStyles = (theme: DefaultTheme, variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primary.default};
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

const getButtonSize = (theme: DefaultTheme, size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
      `;
    case 'medium':
      return css`
        padding: ${theme.spacing.sm}px ${theme.spacing.md}px;
      `;
    case 'large':
      return css`
        padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
      `;
    default:
      return '';
  }
};

const StyledButton = styled(TouchableOpacity)<ButtonProps>`
  ${({theme, variant = 'primary', size = 'medium', fullWidth, disabled}) => css`
    ${getButtonStyles(theme, variant)}
    ${getButtonSize(theme, size)}
    border-radius: ${theme.borderRadius.md}px;
    align-items: center;
    justify-content: center;
    opacity: ${disabled ? 0.5 : 1};
    ${fullWidth && 'width: 100%;'}
  `}
`;

const ButtonText = styled(Text)<{variant: ButtonVariant}>`
  ${({theme, variant}) => css`
    color: ${variant === 'outline' || variant === 'text'
      ? theme.colors.primary.default
      : theme.colors.text};
    font-weight: ${theme.typography.fontWeight.semiBold};
    font-size: ${theme.typography.fontSize.xl}px;
  `}
`;

// Componente
const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  onPress,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'outline' || variant === 'text' ? 'primary' : 'white'
          }
        />
      ) : (
        <ButtonText
          variant={variant}
          size={size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md'}>
          {children}
        </ButtonText>
      )}
    </StyledButton>
  );
};

export default Button;
