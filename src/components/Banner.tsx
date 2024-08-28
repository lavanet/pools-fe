'use client';

import { sharpGroteskMedium } from '@/types/fonts';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Button, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type BannerProps = {
  extraClassName?: string;
  button: string;
  link: string;
  message: string;
  title: string;
  buttonType?: 'contained' | 'text';
  image?: 'lavuci' | 'lavuci_bag';
};

export const Banner = (
  {
    extraClassName,
    button,
    buttonType = 'contained',
    image = 'lavuci',
    link,
    message,
    title,
  }: BannerProps) => (
  <StyledBanner className={extraClassName && extraClassName}>

    <StyledGrid>

      <StyledGridItemText className={image}>
        <Typography
          variant="h5"
          className={sharpGroteskMedium.className}
          sx={{ letterSpacing: '-0.01em' }}
        >
          {title}
        </Typography>

        <StyledTypography>
          {message}
        </StyledTypography>

        <Link href={link}>
          <Button
            color="secondary"
            endIcon={buttonType === 'text' ? <NorthEastIcon /> : undefined}
            variant={buttonType}
          >
            {button}
          </Button>
        </Link>
      </StyledGridItemText>

      <StyledGridItemImage className={image}>
        <Image alt="Lavici" src={`/images/${image}.png`} width={146} height={146} />
      </StyledGridItemImage>

    </StyledGrid>

  </StyledBanner>
);

const StyledBanner = styled('div')(({ theme }) => ({
  background: 'linear-gradient(to top, #212630 0%, rgba(33, 38, 48, 0) 22.05%) center/ cover, url("/images/grid_bg.png") no-repeat top left/100% auto, linear-gradient(0deg, #1A232F 0%, #0C121A 46.5%) center/ cover',
  border: '1px solid #212630',
  borderRadius: 20,
}));

const StyledGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'stretch',
  columnGap: '8px',
  padding: '8px',
});

const StyledGridItemText = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

   '&.lavuci_bag': {
     padding: '16px 0 16px 16px',
   }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
  marginBottom: '16px',
}));

const StyledGridItemImage = styled('div')({
  position: 'relative',

  '&.lavuci_bag': {
    width: '146px',
    height: "100%",

    '& img': {
      position: 'absolute',
      bottom: '0',
      right: '0',
      zIndex: '1',
      width: '146px',
      height: '146px',
    }
  },

  // '& img': {
  //   display: 'block',
  //   width: '100%',
  //   maxWidth: '100%',
  //   height: 'auto',
  // }
});
