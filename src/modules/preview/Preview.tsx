'use client';
import { Stack, styled, Typography } from '@mui/material';

import { Banner } from '@/components';
import { sharpGroteskMedium } from '@/types/fonts';

export const Preview = () => (
  <StyledGrid>
    <StyledGridItem className="text">
        <Typography
          variant="h1"
          className={sharpGroteskMedium.className}
          sx={{ letterSpacing: '-0.001em', }}
        >
          Lava Incentive Pools
        </Typography>

        <StyledTypography variant="h5">
          Boost infrastructure for your favourite chain, earn rewards.
        </StyledTypography>

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

    '& h1': {
      fontSize: 26,
      lineHeight: '36.4px'
    }
  },
}));

const StyledGridItem = styled('div')(({ theme }) => ({
  '&.banner': {
    flex: '0 0 auto',

    [theme.breakpoints.down('md')]: {
      flex: '0 0 100%',
      width: '100%',
      maxWidth: '100%',
    },
  },
}));