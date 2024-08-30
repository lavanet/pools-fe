'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, ButtonProps, Stack, styled, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/contexts';

import Link from 'next/link';
import { IProduct } from '@/types';
import IcnArrowMobile from '@assets/images/icn-arrow-retro-computer.svg'

export const HomeSectionProductsItem = ({ text, title, type }: IProduct) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <StyledProductsItem>

      <StyledWrapper>

        <StyledStack>

          <StyledBadge>
            <span className={`type-${type}`}>
              {title}
            </span>
          </StyledBadge>

          <StyledTypography variant="h3">
            {text}
          </StyledTypography>

          {isMobile?(
            <StyledLink
              href='/'
              title={`Try ${title}`}
            >
              <i><IcnArrowMobile/></i>
            </StyledLink>
          ):(
            <StyledButton
              href="/"
              title={`Try ${title}`}
              component={Link}
              color="secondary"
              endIcon={<ArrowForwardIcon />}
              size="large"
              variant="outlined"
            >
              Try {title}
            </StyledButton>
          )}

        </StyledStack>

      </StyledWrapper>

    </StyledProductsItem>
  );
};

const StyledProductsItem = styled('article')(({ theme }) => ({
  flexGrow: '1',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '1px',
  borderRadius: 20,
  overflow: 'hidden',

  '&:before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    display: 'block',
    width: '100%',
    height: '100%',
    margin: 'auto',
    borderRadius: 20,
    border: '1px solid transparent',
    background: 'linear-gradient(180deg, #3D4658 0%, #212630 79.69%)',
    mask: 'linear-gradient(to bottom, black 0, black 100%) content-box, linear-gradient(to bottom, black 0, black 100%)',
    webkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },

  [theme.breakpoints.down('md')]: {
    borderRadius: 16,

    '&:before': {
      borderRadius: 16,
    },
  },
}));

const StyledWrapper= styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(5, 3),
  background: 'url("/images/lava-grain-bg-x2.webp") no-repeat center/cover',
  borderRadius: 20,
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    borderRadius: 16,
  },
}));

const StyledStack= styled(Stack)(({ theme }) => ({
  flex: 1,
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '365px',
  margin: '0 auto',

  '& a': {
    marginTop: 'auto',
  },

  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'flex-end',
    gap: 8,
  },
}));

const StyledBadge = styled('div')(({ theme }) => ({
  '& span': {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 6px 4px 6px',
    borderRadius: '4px 9px 9px 9px',
    fontSize: 11,
    lineHeight: '1em',
    textTransform: 'uppercase',
    outlineWidth: 1,
    outlineStyle: 'solid',
    outlineOffset: '-1px',

    '&.type-orange': {
      backgroundColor: '#EF6000',
      outlineColor: '#FF822F',
      boxShadow: '0 1px 33px 0 #EF6000B2',
    },

    '&.type-red': {
      backgroundColor: '#FF3900',
      outlineColor: '#FF6839',
      boxShadow: '0 1px 33px 0 #F93800B2',
    },
  },

  [theme.breakpoints.up('md')]: {
    '& span': {
      padding: theme.spacing(0.25, 1),
      borderRadius: '6px 13px 13px 13px',
      fontSize: 18,
      lineHeight: '20px',
      fontFamily: 'retro_computer',
    },
  },

  [theme.breakpoints.down('md')]: {
    gridColumn: 'span 2',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down('md')]: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: 16,
    lineHeight: '22.4px'
  },
}));

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    fontSize: 'clamp(18px, 1.042vw, 20px) !important'
}));

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 24,
  width: 24,
  color: theme.palette.common.white,
  padding: 0,
  transition: 'color 0.3s ease',

  '& i': {
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 12,
    height: 12,
  },

  '& svg': {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
  },

  '&:hover, &:focus': {
    color: theme.palette.common.white,
  },
}));
