'use client';

import NorthEastIcon from '@mui/icons-material/NorthEast';
import { theme } from '@/contexts';
import { Button, Stack, styled, Typography, TypographyProps } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  }: BannerProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (

    <StyledBanner className={extraClassName && extraClassName}>

      <StyledGrid className={image}>

        <StyledGridItemText className={image}>
          <StyledH2
            variant="h5"
            component="h2"
          >
            {title}
          </StyledH2>

          <StyledTypography>
            {message}
          </StyledTypography>

          {!isMobile && (
            <Link href={link}>
              <Button
                color="secondary"
                endIcon={buttonType === 'text' ? <NorthEastIcon /> : undefined}
                variant={buttonType}
              >
                {button}
              </Button>
            </Link>
          )}
        </StyledGridItemText>

        <StyledGridItemImage className={image}>
          <Image alt="Lavici" src={`/images/${image}.png`} width={146} height={146} />
        </StyledGridItemImage>

        {isMobile && (
          <Link href={link}>
            <Button
              color="secondary"
              endIcon={buttonType === 'text' ? <NorthEastIcon fontSize="small" /> : undefined}
              variant={buttonType}
            >
              {button}
            </Button>
          </Link>
        )}

      </StyledGrid>

    </StyledBanner>
  );
}

const StyledBanner = styled('aside')(({ theme }) => ({
  background: 'linear-gradient(to top, #212630 0%, rgba(33, 38, 48, 0) 22.05%) center/ cover, url("/images/grid_bg.png") no-repeat top left/100% auto, linear-gradient(0deg, #1A232F 0%, #0C121A 46.5%) center/ cover',
  border: '1px solid #212630',
  borderRadius: 20,
}));

const StyledGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: 'auto',
  alignItems: 'stretch',
  columnGap: theme.spacing(1),
  paddingLeft: '24px',

  '&.lavuci_bag': {
    minHeight: '134px',
    padding: '8px 8px 8px 24px',
  }
}));

const StyledGridItemText = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

    '&.lavuci': {
    paddingTop: '8px',
      paddingBottom: '8px'
  }
}));

const StyledH2 = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontFamily: 'sharp_groteskMedium_25',
  letterSpacing: '-0.01em',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
  marginBottom: '16px',
}));

const StyledGridItemImage = styled('div')({
  position: 'relative',
  display:'flex',
  flexDirection: 'column',

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

  '&.lavuci': {
    justifyContent: 'flex-end',
    width: '150px',
    height: "100%",
    borderRadius: '12px',
    overflow: 'hidden',

    '& img': {
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'contain',
    }
  },
});
