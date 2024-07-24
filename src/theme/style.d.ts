import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backdrop: string;
      text: string;
      lightText: string;
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
