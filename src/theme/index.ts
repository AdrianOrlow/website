import { DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  fontFamily: {
    primary: 'Poppins',
  },
  fontWeight: {
    primary: {
      regular: 400,
      bold: 700,
    },
  },
  colors: {
    primary: '#277AC7',
    primarySubtle: '#7894B0',
    primaryAccent: '#90B1D1',
    light: '#F4F4F5',
    black: '#223C55',
    gray: '#5A6D7F',
    red: '#C80F43',
    green: '#08CE90',
    yellow: '#F2C94C',
  },
  breakpoints,
};

export default theme;
