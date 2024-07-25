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
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
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
      fontFamily: {
        light: string;
        regular: string;
        medium: string;
        semiBold: string;
        bold: string;
        black: string;
      };
    };
    borderRadius: {
      sm: number;
      md: number;
      lg: number;
      full: number;
    };
  }
}
