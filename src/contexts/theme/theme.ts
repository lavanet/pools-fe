'use client';

import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 992,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    background: {
      default: '#05090F',
      paper: '#EDEDED',
    },
    grey: {
      100: '#B9B9B9',
      200: '#787A7E',
      300: '#5E6167',
      400: '#212630', //400
      500: '#1B212A', //500
      600: '#05090F', // 600
    },
    primary: {
      main: '#FF3900',
      light: '#FF6839',
      dark: '#410E00',
      contrastText: '#841D00',
    },
    secondary: {
      main: "#0C121A",
    },
    text: {
      primary: '#FFF',
      secondary: '#05090F',
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'sans-serif',
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
      fontWeight: 400,
      lineHeight: '18px',
    },
    h1: {
      fontSize: 56,
      lineHeight: '62px',
    },
    h2: {
      fontSize: 30,
      lineHeight: '36px',
    },
    h3: {
      fontSize: 26,
      lineHeight: '36.4px',
    },
    h4: {
      fontSize: 22,
      lineHeight: '28px',
    },
    h5: {
      fontSize: 20,
      lineHeight: '28px',
    },
    h6: {
      fontSize: 18,
      lineHeight: '22px',
    },
  },
});

export const theme = createTheme(baseTheme, {

});
