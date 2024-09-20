import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, yellow } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography:{
      fontFamily:"Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme);

export default theme;