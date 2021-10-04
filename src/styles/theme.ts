import { blue, blueGrey, red, indigo } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: blue[100]
    },
    primary: {
      main: blue[500]
    },
    secondary: {
      main: indigo.A200
    },

    background: {
      default: blueGrey[900]
    },
    error: {
      main: red[400]
    }
  },
  shape: {
    borderRadius: '8px'
  },
  typography: {
    fontFamily:
      "'Titillium Web', -apple-system, BlinkMacSystemFont,Roboto, Oxygen, Ubuntu, Helvetica Neue, sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});

export default theme;
