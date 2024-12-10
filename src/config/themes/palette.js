// material-ui
import { createTheme } from '@mui/material/styles';
// ==============================|| DEFAULT THEME - PALETTE ||============================== //

export default function Palette(mode) {
  return createTheme({
    palette: {
      type: mode,
      primary: {
        main: '#00296B',
        light: '#003F88'
      },
      secondary: {
        main: '#00509D',
      },
      theartiary:{
        tertiary:'#FDC500',
        light:'#FFD500'
      }
    }
  });
}
