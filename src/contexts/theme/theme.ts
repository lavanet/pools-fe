'use client';

import { createTheme } from "@mui/material";
import { yellow } from '@mui/material/colors';

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
      600: '#05090F'
    },
    primary: {
      main: '#FF3900'
    },
    secondary: {
      main: "#0C121A",
      light: "#212630",
    },
    text: {
      primary: '#FFF',
      secondary: '#05090F',
    }
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
  components: {
    MuiCustomFont: {
      styleOverrides: {
        root: {
          // fontFamily: 'sharpgrotesk-medium, sharpgrotesk-medium, sans-serif',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          display: 'inline-flex',
          alignItems: 'center',
          columnGap: '4px',
          padding: '8px 20px',
          borderRadius: 18,
          boxShadow: '0px 1px 12px 0px #F938008F',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '20px',
          textTransform: 'none',
          transition: 'all 0.3s',
          whiteSpace: 'nowrap',

          '& .MuiButton-startIcon, & .MuiButton-endIcon': {
            margin: 0,

            '& > *:first-of-type': {
              fontSize: '1em',
            },
          },

          '&.MuiButton-sizeSmall': {
            padding: '4px 16px',
          },

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
          props: { color: 'primary', variant: 'contained' },
          style: {
            boxShadow: '0px 1px 12px 0px #F938008F',
            outline: '1px solid #FF6839',
            outlineOffset: '-1px',

            '&.Mui-disabled': {
              backgroundColor: '#131821', // TODO: move to the palette
              color: baseTheme.palette.grey[300],
              outlineColor: '#131821',
            }
          }
        },
        {
          props: { color: 'secondary', variant: 'contained' },
          style: {
            backgroundColor: baseTheme.palette.background.paper,
            boxShadow: '0px 1px 12px 0px #FFFFFF52',
            color: baseTheme.palette.text.secondary,

            '&:hover': {
              backgroundColor: baseTheme.palette.common.white,
            },
          }
        },
        {
          props: { color: 'secondary', variant: 'outlined' },
          style: {
            backgroundColor: baseTheme.palette.background.default,
            border: '1px solid #5E6167', // TODO: move to the palette
            boxShadow: 'none',
            color: baseTheme.palette.common.white,

            '&:hover': {
              borderColor: baseTheme.palette.primary.main
            },
          }
        },
        {
          props: { variant: 'text' },
          style: {
            minWidth: 'unset',
            justifyContent: 'unset',
            padding: 0,
            color: baseTheme.palette.common.white,
            textAlign: 'left',
            boxShadow: 'none',
            transition: 'color 0.3',

            '&:hover': { color: baseTheme.palette.primary.main }
          }
        }
      ]
    },
    MuiCssBaseline: {
      styleOverrides: {
        '& a': { textDecoration: 'none' },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.MuiContainer-maxWidthXl': {
            maxWidth: 1360,
            padding: 0
          }
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: '6px 14px',
          fontSize: 16,
          height: 40,
          lineHeight: 'normal',

          '&:hover': {
            borderColor: "blue"
          },

           '& .MuiInputBase-input': {
            padding: '0',
            fontSize: 16,
            height: '100%',
            lineHeight: 'normal',
            backgroundColor: 'transparent',
            color: '#FFFFFF',

            '&::placeholder': {
              color: baseTheme.palette.grey[100],
              opacity: 1,
            },
          },

          '& .MuiOutlinedInput-root ::placeholder': {
            color: 'yellow',
            opacity: 1,
          },

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#212630 !important',
            borderRadius: 24,
            transition: 'all 0.3s',

               '&:hover': {
            borderColor: "blue !important"
          },
          },
        }
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: baseTheme.palette.grey[100],
          backgroundColor: "red",
        }
      }
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
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          transition: 'color 0.3s',
          '&:hover': { color: baseTheme.palette.primary.main }
        }
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backgroundColor: baseTheme.palette.background.default,
            border: `1px solid ${baseTheme.palette.primary.main}`,
            borderRadius: 20,
            color: baseTheme.palette.common.white
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: { minHeight: 72, padding: '16px' },
        head: { minHeight: 40, padding: '4px 16px' }
      },
    }
  }
});
