import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode, direction: 'ltr' | 'rtl') => 
  createTheme({
    direction,
    palette: {
      mode,
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });