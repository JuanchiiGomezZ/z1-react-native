import styled, {css, DefaultTheme} from 'styled-components/native';

type FontSizeKeys = keyof DefaultTheme['typography']['fontSize'];
type FontWeightKeys = keyof DefaultTheme['typography']['fontWeight'];

interface TextProps {
  variant?:
    | 'body'
    | 'bodySmall'
    | 'bodyLarge'
    | 'header'
    | 'title'
    | 'subtitle';
  color?: string;
  size?: FontSizeKeys;
  weight?: FontWeightKeys;
  align?: 'left' | 'center' | 'right';
}
const baseStyle = css<TextProps>`
  color: ${({theme, color}) => color || theme.colors.text};
  text-align: ${({align}) => align || 'left'};
`;

const variantStyles = {
  body: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'md']}px;
    font-weight: ${({theme, weight}) =>
      theme.typography.fontWeight[weight || 'normal']};
  `,
  bodySmall: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'sm']}px;
    font-weight: ${({theme, weight}) =>
      theme.typography.fontWeight[weight || 'normal']};
  `,
  bodyLarge: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'lg']}px;
    font-weight: ${({theme, weight}) =>
      theme.typography.fontWeight[weight || 'normal']};
  `,
  header: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'xxl']}px;
    font-weight: ${({theme, weight}) =>
      theme.typography.fontWeight[weight || 'bold']};
  `,
  title: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'xl']}px;
    font-weight: ${({theme, weight}) =>
      theme.typography.fontWeight[weight || 'semiBold']};
  `,
  subtitle: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'lg']}px;
    font-weight: ${({theme, weight}) =>
      theme.typography.fontWeight[weight || 'medium']};
  `,
};

const Text = styled.Text<TextProps>`
  ${baseStyle}
  ${({variant = 'body'}) => variantStyles[variant]}
`;

export default Text;
