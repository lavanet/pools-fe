'use client';

import { Grid, Stack, styled, Typography } from '@mui/material';
import { Space_Grotesk } from 'next/font/google';

import { Banner, DataCard } from '@/components';
import { IDataCard } from '@/types';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '500', subsets: ['latin'] });

const dataCards: IDataCard[] = [
  {
    title: 'Total requests',
    value: '49.23M',
  },
  {
    message: 'Updated in real-time',
    title: 'Total rewards, USD',
    value: '$490,230',
  },
  {
    title: 'Distributed rewards, USD',
    value: '$1,889,289.22',
  },
  {
    title: 'Upcoming rewards, USD',
    value: '$2,500,000',
  },
];

export default function Home() {
  return (
    <>
      <StyledGrid alignItems="center" container>
        <Grid item xs={8}>
          <Stack spacing={1}>
            <Typography className={spaceGrotesk.className} variant="h1">
              Lava Incentive Pools
            </Typography>

            <StyledTypography variant="h5">
              Boost infrastructure for your favourite chain, earn rewards.
            </StyledTypography>
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Banner
            button="Become an RPC Provider"
            buttonType="text"
            image="lavuci_bag"
            link="/"
            message="He loves dealing with node runners. "
            title="Meet Lavuci"
          />
        </Grid>
      </StyledGrid>

      <Grid container spacing={1.5}>
        {dataCards.map((card) => (
          <Grid key={card.title} item xs={3}>
            <DataCard {...card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(8),
}));
