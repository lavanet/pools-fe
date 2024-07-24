'use client';

import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Button, Stack, styled, Typography } from '@mui/material';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '500', subsets: ['latin'] });

type BannerProps = {
  button: string;
  image: 'lavuci' | 'lavuci_bag';
  link: string;
  message: string;
  title: string;
  buttonType?: 'contained' | 'text';
};

export const Banner = ({
  button,
  buttonType = 'contained',
  image,
  link,
  message,
  title,
}: BannerProps) => (
  <StyledBanner>
    <Stack alignItems="flex-start" spacing={2}>
      <div>
        <Typography className={spaceGrotesk.className} variant="h5">
          {title}
        </Typography>

        <StyledTypography>{message}</StyledTypography>
      </div>

      <Link href={link}>
        <Button
          color="secondary"
          endIcon={buttonType === 'text' ? <NorthEastIcon /> : undefined}
          variant={buttonType}
        >
          {button}
        </Button>
      </Link>
    </Stack>

    <StyledImage
      style={{
        bottom: image === 'lavuci' ? 0 : 8 + 'px',
        top: image === 'lavuci' ? 0 : -24 + 'px',
      }}
    >
      <Image alt="Lavici" fill src={`/images/${image}.png`} />
    </StyledImage>
  </StyledBanner>
);

const StyledBanner = styled('div')(({ theme }) => ({
  background: 'linear-gradient(0deg, #1A232F 0%, #0C121A 46.5%)',
  backgroundImage: 'url("/images/grid_bg.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '1px solid #212630',
  borderRadius: 20,
  padding: theme.spacing(3),
  position: 'relative',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledImage = styled('div')({
  position: 'absolute',
  right: 0,
  width: 150,
});
