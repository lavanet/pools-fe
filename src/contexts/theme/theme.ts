'use client';

import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {}
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthXl': {
            maxWidth: 1360
          }
        },
      },
    }
  },
});
