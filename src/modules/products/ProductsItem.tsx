'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, styled, Typography } from '@mui/material';
import { Space_Grotesk, DotGothic16 } from 'next/font/google';

import { IProduct } from '@/types';
import Link from 'next/link';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });
const dotGothic16 = DotGothic16({ weight: '400', subsets: ['latin'] });

export const ProductsItem = ({ text, title, type }: IProduct) => (
  <StyledProductsItem>
    <StyledTitle className={`${dotGothic16.className} type-${type}`}>
      {title}
    </StyledTitle>

    <StyledTypography className={spaceGrotesk.className} variant="h3">
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
  </StyledProductsItem>
);

const StyledProductsItem = styled('div')(({ theme }) => ({
  backgroundImage: 'url("/images/blur_bg.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: 20,
  padding: theme.spacing(5),
}));

const StyledTitle = styled('div')(({ theme }) => ({
  borderRadius: '6px 13px 13px 13px',
  display: 'inline-block',
  fontSize: 18,
  lineHeight: '20px',
  padding: theme.spacing(0.25, 1),

  '&.type-orange': {
    backgroundColor: '#FF822F',
    border: '1px solid #FF822F',
    boxShadow: '0px 1px 33px 0px #EF6000B2',
  },

  '&.type-red': {
    backgroundColor: '#FF3900',
    border: '1px solid #FF3900',
    boxShadow: '0px 1px 33px 0px #F93800B2',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  marginTop: theme.spacing(3),
}));
