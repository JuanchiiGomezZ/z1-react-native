import styled, {css, DefaultTheme} from 'styled-components/native';

type FontSizeKeys = keyof DefaultTheme['typography']['fontSize'];

interface TextProps {
  variant?:
    | 'body'
    | 'bodySmall'
    | 'bodyLarge'
    | 'header'
    | 'title'
    | 'subtitle'
    | 'category';
  color?: string;
  size?: FontSizeKeys;
  align?: 'left' | 'center' | 'right';
}
const baseStyle = css<TextProps>`
  color: ${({theme, color}) => color || theme.colors.text};
  text-align: ${({align}) => align || 'left'};
`;

const variantStyles = {
  body: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'lg']}px;
    font-family: ${({theme}) => theme.typography.fontFamily.regular};
  `,
  bodySmall: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'sm']}px;
    font-family: ${({theme}) => theme.typography.fontFamily.light};
  `,
  bodyLarge: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'lg']}px;
    font-family: ${({theme}) => theme.typography.fontFamily.medium};
  `,
  header: css<TextProps>`
    font-size: ${({theme, size}) =>
      theme.typography.fontSize[size || 'xxxl']}px;
    font-family: ${({theme}) => theme.typography.fontFamily.black};
  `,
  title: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'xl']}px;
    font-family: ${({theme}) => theme.typography.fontFamily.bold};
  `,
  subtitle: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'lg']}px;
    font-family: ${({theme}) => theme.typography.fontFamily.medium};
  `,
  category: css<TextProps>`
    font-size: ${({theme, size}) => theme.typography.fontSize[size || 'md']}px;
    font-family: ${({theme}) => theme.typography.fontFamily.semiBold};
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.secondary};
  `,
};

const Text = styled.Text<TextProps>`
  ${baseStyle}
  ${({variant = 'body'}) => variantStyles[variant]}
`;

export default Text;
