'use client';

import { Button, Grid, Stack, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';

import { IPool, PoolType } from '@/types';
import { IconSvg } from '@/components';
import {
  IconAxelar,
  IconCelestia,
  IconEvmos,
  IconKoli,
  IconNear,
  IconStarknet,
} from '@/icons';
import { PoolsCardData } from '@/modules';

// TODO: replace with the Sharp Grotesk font
const spaceGrotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] });

const bg_colors = [
  'linear-gradient(180deg, rgba(0, 236, 151, 0.5) 0%, rgba(23, 28, 38, 0) 20.11%, rgba(23, 28, 38, 0) 92%, rgba(23, 28, 38, 0.01) 100%)',
  'linear-gradient(180deg, rgba(236, 78, 50, 0.5) 0%, rgba(23, 28, 38, 0) 20.11%, rgba(23, 28, 38, 0) 92%, rgba(23, 28, 38, 0.01) 100%)',
  'linear-gradient(180deg, rgba(237, 240, 244, 0.5) 0%, rgba(23, 28, 38, 0) 20.11%, rgba(23, 28, 38, 0) 92%, rgba(23, 28, 38, 0.01) 100%)',
  'linear-gradient(180deg, rgba(236, 121, 107, 0.5) 0%, rgba(23, 28, 38, 0) 20.11%, rgba(23, 28, 38, 0) 92%, rgba(23, 28, 38, 0.01) 100%)',
  'linear-gradient(180deg, rgba(105, 105, 231, 0.5) 0%, rgba(23, 28, 38, 0) 20.11%, rgba(23, 28, 38, 0) 92%, rgba(23, 28, 38, 0.01) 100%)',
  'linear-gradient(180deg, rgba(123, 43, 249, 0.5) 0%, rgba(23, 28, 38, 0) 20.11%, rgba(23, 28, 38, 0) 92%, rgba(23, 28, 38, 0.01) 100%)',
];

const border_colors = [
  '#00EC97',
  '#EC4E33',
  '#FFFFFF',
  '#EC796B',
  '#6969E7',
  '#7B2BF9',
];

const icons: Record<PoolType, ReactNode> = {
  axelar: <IconAxelar />,
  celestia: <IconCelestia />,
  evmos: <IconEvmos />,
  koli: <IconKoli />,
  near: <IconNear />,
  starknet: <IconStarknet />,
};

type PoolsCardProps = IPool & { index: number };

export const PoolsCard = ({
  index,
  service,
  title,
  type,
  value,
}: PoolsCardProps) => (
  <StyledPoolsCard style={{ border: `1px solid ${border_colors[index]}` }}>
    <StyledStack style={{ backgroundImage: `${bg_colors[index]}` }} spacing={3}>
      <div>
        <Grid alignItems="center" container spacing={1}>
          <Grid item xs={6}>
            <Stack alignItems="center" direction="row" spacing={1}>
              <StyledIcon>
                <IconSvg>{icons[type]}</IconSvg>
              </StyledIcon>
              <Typography variant="h3">{title}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <StyledTypography variant="caption">Service</StyledTypography>
            <br />
            <Typography variant="caption">{service}</Typography>
          </Grid>
        </Grid>
      </div>

      <Stack spacing={2}>
        <div>
          <Stack direction="row" spacing={0.5}>
            <StyledTypography variant="caption">Total rewards</StyledTypography>

            <StyledTypography variant="body2">
              (Updated in real-time)
            </StyledTypography>
          </Stack>

          <Typography className={spaceGrotesk.className} variant="h4">
            {value}
          </Typography>
        </div>

        {/* TODO: is it a real progress bar?  */}
        <Stack direction="row" spacing={0.25}>
          <StyledBar style={{ backgroundColor: '#5E6167', width: '35%' }} />
          <StyledBar style={{ backgroundColor: '#FFF', width: '15%' }} />
          <StyledBar style={{ backgroundColor: '#7679FF', width: '50%' }} />
        </Stack>

        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack spacing={2}>
                <PoolsCardData
                  chartPointType="white"
                  hasCaption
                  title="Rewards/month"
                  value="27k"
                  type={type}
                />

                <PoolsCardData
                  chartPointType="blue"
                  hasCaption
                  title="Future rewards"
                  value="220k"
                  type={type}
                />

                <PoolsCardData
                  title="RPC node runners"
                  value="17"
                  type={type}
                />
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Stack spacing={2}>
                <PoolsCardData title="Months remaining" value="8" type={type} />

                <PoolsCardData
                  chartPointType="grey"
                  hasCaption
                  title="Past rewards"
                  value="291k"
                  type={type}
                />

                <PoolsCardData
                  title="Total requests"
                  value="590m"
                  type={type}
                />
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="contained">Run RPC node</Button>

        <Button disabled variant="contained">
          Restake to RPC provider
        </Button>
      </Stack>
    </StyledStack>
  </StyledPoolsCard>
);

const StyledPoolsCard = styled('div')({
  backgroundImage: `url("/images/blur_bg_2.png")`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: 20,
  overflow: 'hidden',
});

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const StyledIcon = styled('div')({ fontSize: 32 });

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledBar = styled('div')({
  borderRadius: 8,
  height: 8,
});
