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
    header: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal',
    },
  },
};

export default theme;
