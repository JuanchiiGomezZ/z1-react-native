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
      backdrop: string;
      text: string;
    };
    spacing: {
      small: number;
      medium: number;
      large: number;
    };
    typography: {
      header: {
        fontSize: number;
        fontWeight: string;
      };
      body: {
        fontSize: number;
        fontWeight: string;
      };
    };
  }
}
