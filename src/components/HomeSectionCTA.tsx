'use client';

import { Button, Stack, styled, Typography, TypographyProps } from '@mui/material';

export const HomeSectionCTA = () => (
  <Stack alignItems="center" spacing={4} justifyContent="center">
    <Stack spacing={1}>
      <StyledH2>
        Create an incentive pool
      </StyledH2>

      <StyledTypography align="center" variant="h5" component="p">
        Launch, scale and optimize the public RPC for your ecosystem.
      </StyledTypography>
    </Stack>

    <Button variant="contained">Learn more</Button>
  </Stack>
);

const StyledH2 = styled('h2')(({ theme }) => ({
  textAlign: 'center',
  fontFamily: 'sharp_groteskmedium_25',
  fontSize: 32,
  lineHeight: '44.8px',

  [theme.breakpoints.down('md')]: {
    fontSize: 20,
    lineHeight: '28px',
    letterSpacing: '-0.01em'
  },

}));

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  margin: 0,
  color: theme.palette.grey[100],
}));
