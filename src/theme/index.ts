import {DefaultTheme} from 'styled-components/native';

const theme: DefaultTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#320e50',
    text: '#000000',
    lightText: '#8E8E93',
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
