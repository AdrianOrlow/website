import 'styled-components';

declare module 'styled-components' {
  import { DefaultBreakpointName } from 'styled-components-breakpoint';

  export interface DefaultTheme {
    fontFamily: {
      primary: string;
    };
    fontWeight: {
      primary: {
        regular: number;
        bold: number;
      };
    };
    colors: {
      primary: string;
      primarySubtle: string;
      primaryAccent: string;
      light: string;
      black: string;
      gray: string;
      red: string;
      green: string;
      yellow: string;
    };
    breakpoints: {
      [name in DefaultBreakpointName]: number;
    };
  }
}
