'use client';

import { Button, Stack, styled, Typography } from '@mui/material';
import { Space_Grotesk } from 'next/font/google';
import { sharpGroteskMedium } from '@/types/fonts';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });

export const HomeSectionCTA = () => (
  <Stack alignItems="center" spacing={4}>
    <Stack spacing={1}>
      <Typography
        align="center"
        className={sharpGroteskMedium.className}
        variant="h2"
      >
        Create an incentive pool
      </Typography>

      <StyledTypography align="center" variant="h5">
        Launch, scale and optimize the public RPC for your ecosystem.
      </StyledTypography>
    </Stack>

    <Button variant="contained">Learn more</Button>
  </Stack>
);

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));
