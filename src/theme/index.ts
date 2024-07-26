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
    red: '#FF3030',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
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
    fontFamily: {
      light: 'Poppins-Light',
      regular: 'Poppins-Regular',
      medium: 'Poppins-Medium',
      semiBold: 'Poppins-SemiBold',
      bold: 'Poppins-Bold',
      black: 'Poppins-Black',
    },
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
  },
};

export default theme;
