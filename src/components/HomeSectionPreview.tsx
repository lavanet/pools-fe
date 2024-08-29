'use client';

import { styled, Typography } from '@mui/material';

import { Banner } from '@/components';

export const HomeSectionPreview = () => (
  <StyledGrid>
    <div>

      <StyledH1 variant="h1">
        Lava Incentive Pools
      </StyledH1>

      <StyledTypography variant="h5">
        Boost infrastructure for your favourite chain, earn rewards.
      </StyledTypography>

    </div>

    <StyledGridItemBanner>

      <Banner
        button="Become an RPC Provider"
        buttonType="text"
        image="lavuci-bag"
        link="/"
        message="He loves dealing with node runners. "
        title="Meet Lavuci"
      />

    </StyledGridItemBanner>

  </StyledGrid>
);

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

const StyledH1 = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(32px, 2.917vw, 56px)',
  fontFamily: 'sharp_groteskMedium_25',
  letterSpacing: '-0.001em',
  lineHeight: '1.1em',

  [theme.breakpoints.down('md')]: {
    fontSize: '26px',
    lineHeight: '1.4em',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledGridItemBanner = styled('div')(({ theme }) => ({
  flex: '0 0 auto',

  [theme.breakpoints.down('md')]: {
    flex: '0 0 100%',
    width: '100%',
    maxWidth: '100%',
  },
}));
