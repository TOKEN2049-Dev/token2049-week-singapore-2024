import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8247FF', // Primary purple color used in buttons and other elements
    },
    secondary: {
      main: '#5F2FC8', // Darker shade for hover states
    },
    background: {
      default: '#F5F7F9', // Light background color used in SearchWrapper
      paper: '#FFFFFF', // White background for paper elements
    },
    text: {
      primary: '#31426C', // Primary text color, used in FilterBox
      secondary: '#64748B', // Secondary text color, used in EventDetails
      disabled: '#CBD5E1', // Light gray for disabled elements
    },
  },
  typography: {
    fontFamily: 'Open Sauce Two, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Common border radius for buttons
        },
        containedPrimary: {
          backgroundColor: '#8247FF',
          '&:hover': {
            backgroundColor: '#5F2FC8',
          },
        },
        outlined: {
          borderColor: '#FFFFFF',
          color: '#FFFFFF',
          '&:hover': {
            borderColor: '#EAE1FF',
          },
        },
        text: {
          color: '#FFFFFF',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0px 3px 8px -1px #3232470D',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          '&:hover': {
            boxShadow: '0px 3px 8px -1px #3232470D',
            transform: 'scale(1.01)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#F1F5F9',
          color: '#334155',
          fontWeight: 400,
        },
      },
    },
  },
});

export default theme;
