import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: {
        subtle: string;
        light: string;
        default: string;
        dark: string;
        darker: string;
      };
      secondary: string;
      text: string;
      backdrop: string;
    };
    spacing: {
      small: number;
      medium: number;
      large: number;
    };
    typography: {
      fontSize: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        xxxl: number;
      };
      fontWeight: {
        normal: string;
        medium: string;
        semiBold: string;
        bold: string;
      };
    };
  }
}