'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createContext, ReactNode } from 'react';

import { theme } from '@/contexts';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeContext.Provider value={{}}>
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </ThemeContext.Provider>
);
