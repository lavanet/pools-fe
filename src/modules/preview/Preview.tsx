'use client';

import { Grid, Stack, styled, Typography } from '@mui/material';
import { Space_Grotesk } from 'next/font/google';

import { Banner } from '@/components';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });

export const Preview = () => (
  <StyledGrid>
    <StyledGridItem className="text">
      <Stack spacing={1}>
        <Typography className={spaceGrotesk.className} variant="h1">
          Lava Incentive Pools
        </Typography>

        <StyledTypography variant="h5">
          Boost infrastructure for your favourite chain, earn rewards.
        </StyledTypography>
      </Stack>
    </StyledGridItem>

    <StyledGridItem className="banner">
      <Banner
        button="Become an RPC Provider"
        buttonType="text"
        image="lavuci_bag"
        link="/"
        message="He loves dealing with node runners. "
        title="Meet Lavuci"
      />
    </StyledGridItem>
  </StyledGrid>
);

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledGrid = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
  gap: '24px 20px',
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(6),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'unset',
  },
}));

const StyledGridItem = styled('div')(({ theme }) => ({
  '&.banner': {
    flex: '0 0 446px',
    width: '100%',
    maxWidth: '446px',

    [theme.breakpoints.down('md')]: {
      flex: '0 0 100%',
      maxWidth: '100%',
    },
  },
}));