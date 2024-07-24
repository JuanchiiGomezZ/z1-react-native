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
        light: string;
        normal: string;
        medium: string;
        semiBold: string;
        bold: string;
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
