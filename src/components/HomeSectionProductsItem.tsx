'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Stack, StackProps, styled, Typography } from '@mui/material';
import { Space_Grotesk, DotGothic16 } from 'next/font/google';

import { IProduct } from '@/types';
import Link from 'next/link';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });
const dotGothic16 = DotGothic16({ weight: '400', subsets: ['latin'] });

export const HomeSectionProductsItem = ({ text, title, type }: IProduct) => (
  <StyledProductsItem component="article">

    <StyledStack>

      <StyledTitle className={`type-${type}`}>
        {title}
      </StyledTitle>

      <StyledTypography variant="h3">
        {text}
      </StyledTypography>

      <Link href="/">
        <Button
          color="secondary"
          endIcon={<ArrowForwardIcon />}
          size="large"
          variant="outlined"
        >
          Try {title}
        </Button>
      </Link>

    </StyledStack>

  </StyledProductsItem>
);

const StyledProductsItem = styled(Stack)<StackProps>(({ theme }) => ({
  flexGrow: '1',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '1px',
  borderRadius: '20px',
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
    borderRadius: '20px',
    border: '1px solid transparent',
    background: 'linear-gradient(180deg, #3D4658 0%, #212630 79.69%)',
    mask: 'linear-gradient(to bottom, black 0, black 100%) content-box, linear-gradient(to bottom, black 0, black 100%)',
    webkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
}));

const StyledStack= styled(Stack)(({ theme }) => ({
  flex: 1,
  alignItems: 'flex-start',
  padding: theme.spacing(5),
  backgroundImage: 'url("/images/lava-grain-bg-x2.webp")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: 20,
  overflow: 'hidden',
}));

const StyledTitle = styled('div')(({ theme }) => ({
  borderRadius: '6px 13px 13px 13px',
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0.25, 1),
  fontSize: 18,
  fontFamily: 'retro_computer',
  lineHeight: '20px',

  '&.type-orange': {
    backgroundColor: '#EF6000',
    outline: '1px solid #FF822F',
    outlineOffset: '-1px',
    boxShadow: '0 1px 33px 0 #EF6000B2',
  },

  '&.type-red': {
    backgroundColor: '#FF3900',
    outline: '1px solid #FF6839',
    outlineOffset: '-1px',
    boxShadow: '0 1px 33px 0 #F93800B2',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  marginTop: theme.spacing(3),
}));
