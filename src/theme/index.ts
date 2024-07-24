import {DefaultTheme} from 'styled-components/native';

const theme: DefaultTheme = {
  colors: {
    primary: {
      subtle: '#bf9dc9',
      light: '#b979c6',
      default: '#60306f',
      dark: '#593c70',
      darker: '#320e50',
    },
    secondary: '#ffda7f',
    text: '#fdfcfe',
    backdrop: 'rgba(0, 0, 0, 0.5)',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      xxxl: 32,
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
  },
};

export default theme;
