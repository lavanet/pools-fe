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
    ghost: {
      main: '#05090F',
      light: '#1B212A',
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
          minWidth: 'unset',
          minHeight: '36px',
          padding: '8px 20px',
          borderRadius: 18,
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '1.1em',
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
            minHeight: '28px',
            padding: '4px 16px',
          },

          '&.MuiButton-sizeLarge': {
            minHeight: '48px',
            padding: '12px 24px',
            borderRadius: 40,
            fontSize: 20,
          }
        },
      },
      variants: [
        {
          props: {
            color: 'primary',
            variant: 'contained'
          },
          style: {
            color: baseTheme.palette.common.white,
            outline: `1px solid ${baseTheme.palette.primary.light}`,
            outlineOffset: '-1px',
            boxShadow: '0px 1px 12px 0px #F938008F',

            '&:hover': {
              backgroundColor: baseTheme.palette.primary.main,
              boxShadow: '0px 1px 20px 0px #F93800E0',
            },

            '&.Mui-disabled': {
              backgroundColor: baseTheme.palette.primary.dark,
              color: baseTheme.palette.primary.contrastText,
              outlineColor: baseTheme.palette.primary.dark,
            }
          }
        },
        {
          props: {
            color: 'secondary',
            variant: 'contained'
          },
          style: {
            backgroundColor: baseTheme.palette.common.white,
            color: baseTheme.palette.text.secondary,
            outline: `1px solid ${baseTheme.palette.background.paper}`,
            outlineOffset: '-1px',
            boxShadow: '0px 1px 12px 0px #FFFFFF52',

            '&:hover': {
              backgroundColor: baseTheme.palette.common.white,
              boxShadow: '0px 1px 12px 0px #FFFFFFB8',
            },

            '&.Mui-disabled': {
              backgroundColor: baseTheme.palette.grey[500],
              color: baseTheme.palette.grey[300],
              outlineColor: baseTheme.palette.grey[500],
            }
          }
        },
        {
          props: {
            color: 'ghost',
            variant: 'contained',
          },
          style: {
            backgroundColor: baseTheme.palette.ghost.main,
            color: baseTheme.palette.grey[200],
            boxShadow: 'none',

            '&:hover': {
              backgroundColor: baseTheme.palette.ghost.light,
              color: baseTheme.palette.common.white,
            },

            '&.Mui-disabled': {
              backgroundColor: baseTheme.palette.background.default,
              color: baseTheme.palette.grey[300],
            }
          }
        },
        {
          props: {
            color: 'secondary',
            variant: 'outlined'
          },
          style: {
            backgroundColor: baseTheme.palette.background.default,
            color: baseTheme.palette.common.white,
            outline: `1px solid ${baseTheme.palette.grey[300]}`,
            outlineOffset: '-1px',
            boxShadow: 'none',

            '&:hover': {
              outlineColor: baseTheme.palette.grey[200],
            },

            '&.Mui-disabled': {
              backgroundColor: baseTheme.palette.background.default,
              color: baseTheme.palette.grey[300],
              outlineColor: baseTheme.palette.grey[400],
            }
          }
        },
        {
          props: {
            variant: 'text'
          },
          style: {
            minWidth: 'unset',
            justifyContent: 'unset',
            padding: 0,
            color: baseTheme.palette.common.white,
            textAlign: 'left',
            boxShadow: 'none',
            transition: 'color 0.3',

            '&:hover': {
              color: baseTheme.palette.primary.main
            }
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
          display: 'inline-flex',
          padding: '4px 12px',
          borderRadius: '50em',
          fontSize: 16,
          height: 'auto',
          minHeight: '40px',
          lineHeight: 'normal',

          '&:before': {
            display: 'none !important', // This removes the default underline
          },
          '&:after': {
            display: 'none !important', // This removes the focused underline
          },

          '& .MuiInputBase-input': {
            padding: '0',
            fontSize: 16,
            height: 'auto',
            lineHeight: 'normal',
            backgroundColor: 'transparent',
            color: 'inherit',

            '&::placeholder': {
              color: baseTheme.palette.grey[100],
              opacity: 1,
            },
          },
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '50em',
          borderColor: '#212630',

          '& .MuiOutlinedInput-notchedOutline':{
            borderWidth: '1px',
            borderColor: '#212630',
            transition: 'border 0.3s ease'
          },

          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline':{
              borderWidth: '1px',
              borderColor: '#FFFFFF',
            },
          },

          '&.Mui-focused': {
            boxShadow: '0 0 10px rgba(255,255,255,0.4)',

            '& .MuiOutlinedInput-notchedOutline':{
              borderWidth: '1px',
              borderColor: '#FFFFFF',
            },
          },
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          padding: '4px 12px',
          borderRadius: '50em',
          height: 'auto',
          minHeight: '40px',
          border: '1px solid white',
          backgroundColor: 'white',
          color: baseTheme.palette.text.secondary,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

          '&:hover': {
            backgroundColor: baseTheme.palette.common.white,
          },

          '&.Mui-focused': {
            backgroundColor: baseTheme.palette.common.white,
          },

          '& .MuiInputBase-input': {
            color: baseTheme.palette.text.secondary,

            '&::placeholder': {
              color: baseTheme.palette.grey[300],
              opacity: 1,
            },
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          height: '100%',
          color: baseTheme.palette.common.white,

          '& svg': {
            fontSize: '1em',
          }
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
