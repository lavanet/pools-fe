'use client';

import { createTheme } from "@mui/material";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ weight: '500', subsets: ['latin'] })

const baseTheme = createTheme({
  palette: {
    background: {
      default: '#05090F',
      paper: '#EDEDED'
    },
    grey: {
      100: '#B9B9B9',
      200: '#787A7E',
      300: '#5E6167',
    },
    primary: {
      main: '#FF3900'
    },
    text: {
      primary: '#FFF',
      secondary: '#05090F',
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: 16,
      lineHeight: '22px'
    },
    body2: {
      fontSize: 14,
      lineHeight: '18px'
    },
    caption: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '18px'
    },
    h1: {
      fontSize: 56,
      fontWeight: 500,
      lineHeight: '62px'
    },
    h5: {
      fontSize: 20,
      lineHeight: '28px'
    }
  },
});

export const theme = createTheme(baseTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0px 1px 12px 0px #F938008F',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '20px',
          padding: '8px 20px',
          textTransform: 'none',
          whiteSpace: 'nowrap',

          '&.MuiButton-sizeLarge': {
            borderRadius: 40,
            fontSize: 20,
            lineHeight: '24px',
            padding: '12px 24px',
          }
        },
      },
      variants: [
        {
          props: { color: 'secondary', variant: 'contained' },
          style: {
            backgroundColor: baseTheme.palette.background.paper,
            boxShadow: '0px 1px 12px 0px #FFFFFF52',
            color: baseTheme.palette.text.secondary,

            '&:hover': {
              backgroundColor: baseTheme.palette.common.white,
            }
          }
        }
      ]
    },
    MuiCssBaseline: {
      styleOverrides: {
        '& a': { textDecoration: 'none' }
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthXl': {
            maxWidth: 1360
          }
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: baseTheme.palette.background.default,
          border: `1px solid ${baseTheme.palette.grey[300]}`,
          borderRadius: 8
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '&.nav-menu': { marginLeft: '20px' },
          '& .MuiPaper-root': { backgroundColor: 'transparent' },
        },
      }
    }
  },
});
