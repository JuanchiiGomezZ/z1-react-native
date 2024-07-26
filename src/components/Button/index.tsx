import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import styled, {css, DefaultTheme} from 'styled-components/native';
import Text from '../Text';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'primary-focus'
  | 'disabled';

interface ButtonProps {
  variant?: ButtonVariant;
  loading?: boolean;
  onPress: () => void;
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
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
        border: 2px solid ${theme.colors.text};
      `;
    case 'primary-focus':
      return css`
        background-color: ${theme.colors.primary.light};
        border: none;
      `;
    case 'disabled':
      return css`
        background-color: ${theme.colors.primary.darker};
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
    flex-direction: row;
    gap: ${theme.spacing.sm}px;
  `}
`;

const ButtonText = styled(Text)<{variant: ButtonVariant}>`
  ${({theme, variant}) => css`
    color: ${variant === 'disabled'
      ? theme.colors.primary.default
      : theme.colors.text};
    font-size: ${theme.typography.fontSize.xl}px;
    font-family: ${theme.typography.fontFamily.semiBold};
  `}
`;

// Componente
const Button = ({
  variant = 'primary',
  loading = false,
  onPress,
  label,
  leftIcon,
  rightIcon,
}: ButtonProps & {variant?: ButtonVariant}) => {
  return (
    <StyledButton variant={variant} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <>
          {leftIcon}
          <ButtonText variant={variant}>{label}</ButtonText>
          {rightIcon}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
