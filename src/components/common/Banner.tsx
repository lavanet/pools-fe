'use client';

import NorthEastIcon from '@mui/icons-material/NorthEast';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';
import { Button, styled, Typography } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';

type BannerProps = {
  title: string;
  message: string;
  image?: 'lavuci' | 'lavuci-bag';
  button: string;
  buttonType?: 'contained' | 'text';
  link: string;
};

export const Banner = (
  {
    button,
    buttonType = 'contained',
    image = 'lavuci',
    link,
    message,
    title,
  }: BannerProps) => {
  const isMobileSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledBanner className={image}>

      <div className='c-styled-banner-grid'>

        <div className='c-styled-banner-grid-item-text'>

          <div className='c-styled-banner-grid-item-text-content'>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>

            <Typography>
              {message}
            </Typography>

          </div>

          {!isMobileSm && (
            <div className="c-button-container">

              <Button
                href={link}
                component={Link}
                color="secondary"
                title={button}
                endIcon={buttonType === 'text' ? <NorthEastIcon /> : undefined}
                variant={buttonType}
              >
                {button}

              </Button>

            </div>
          )}
        </div>

        {isMobileSm && (
          <div className="c-button-container">
            <Button
              href={link}
              component={Link}
              color="secondary"
              title={button}
              endIcon={buttonType === 'text' ? <NorthEastIcon fontSize="small" /> : undefined}
              variant={buttonType}
            >
              {button}
            </Button>
          </div>
        )}

        <div className="c-styled-banner-grid-item-image">
          <Image
            alt="Lavuci"
            src={`/images/${image}-x2.webp`}
            width={146}
            height={146}
          />
        </div>

      </div>

    </StyledBanner>
  );
}

const StyledBanner = styled('aside')(({ theme }) => ({
  background: 'linear-gradient(to top, #212630 0%, rgba(33, 38, 48, 0) 22.05%) center/ cover, url("/images/lava-grid-bg-x2.webp") repeat top 1% left 1%/890px auto, linear-gradient(0deg, #1A232F 0%, #0C121A 46.5%) center/ cover',
  border: '1px solid #212630',
  borderRadius: 20,

  '& .c-styled-banner-grid': {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: 'auto',
    alignItems: 'stretch',
    columnGap: theme.spacing(1),
    padding: theme.spacing(1, 1, 1, 3),
    borderRadius: 20,
  },

  '& .c-styled-banner-grid-item-text': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: theme.spacing(2),

    '& .c-styled-banner-grid-item-text-content': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 4,
    },

    '& h2': {
      fontFamily: 'sharp_groteskMedium_25',
      letterSpacing: '-0.01em',
    },

    '& p': {
      color: theme.palette.grey[100],
    },
  },

  '& .c-styled-banner-grid-item-image': {
    position: 'relative',
    display:'flex',
    flexDirection: 'column',
  },

  '&.lavuci-bag': {
    '& .c-styled-banner-grid': {
      minHeight: 134,
    },

    '& .c-styled-banner-grid-item-image': {
      width: 146,
      height: "100%",

      '& img': {
        position: 'absolute',
        bottom: '0',
        right: '0',
        zIndex: '1',
        width: 146,
        height: 146,
      },
    },
  },

  '&.lavuci': {
    '& .c-styled-banner-grid': {
      paddingTop: 13,
      paddingRight: 0,
      paddingBottom: 0,
    },

    '& .c-styled-banner-grid-item-text': {
      paddingBottom: 13,
    },

    '& .c-styled-banner-grid-item-image': {
      justifyContent: 'flex-end',
      width: 150,
      height: "100%",
      borderRadius: 20,
      overflow: 'hidden',

      '& img': {
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain',
      }
    },
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: 16,

    '& .c-styled-banner-grid': {
      rowGap: theme.spacing(2),
      borderRadius: 16,
    },

    '&.lavuci-bag': {
      '& .c-styled-banner-grid': {
        minHeight: 'unset',
        padding: theme.spacing(2,0,2,2),
      },

      '& .c-styled-banner-grid-item-image': {
        order: 2,
        width: 88,

        '& img': {
          width: 88,
          height: 88,
          top: '-32px',
        },
      },

      '& .c-button-container': {
        gridColumn: 'span 2',
        order: 3,
      },
    },

    '&.lavuci': {
      '& .c-styled-banner-grid': {
        padding: theme.spacing(2,0,0,2),
      },

      '& .c-styled-banner-grid-item-text': {
        gridColumn: 'span 2',
        paddingBottom: 0,
        paddingRight: theme.spacing(2),
      },

      '& .c-button-container': {
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: theme.spacing(2),
      },

      '& .c-styled-banner-grid-item-image': {
        position: 'relative',
        justifyContent: 'flex-end',
        width: 88,
        height: 67,
        borderRadius: 16,
        overflow: 'hidden',

        '& img': {
          position: 'absolute',
          top: 0,
          width: 88,
          height: 88,
          objectFit: 'contain',
        }
      },
    },
  },
}));
