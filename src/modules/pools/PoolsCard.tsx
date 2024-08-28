'use client';

import { Button, Stack, styled, Typography, TypographyProps } from '@mui/material';
import { sharpGroteskMedium } from '@/types/fonts';
import { IPool } from '@/types';
import { IconSvg } from '@/components';
import { PoolsCardData } from '@/modules';
import { theme } from '@/contexts';

type PoolsCardProps = IPool;

export const PoolsCard = (
  {
    id,
    title,
    service,
    node_runner,
    requests,
    value,
    monthly_rewards,
    future_rewards,
    past_rewards,
    icon,
    accentColor,
  }: PoolsCardProps) => {

  const calculateRewardPercentages = (
    monthly_rewards?: number,
    future_rewards?: number,
    past_rewards?: number
  ) => {
    // Ensure all values are numbers and default to 0 if undefined
    const rewards = [monthly_rewards ?? 0, future_rewards ?? 0, past_rewards ?? 0];

    // Calculate total rewards, explicitly initializing sum to 0
    const total = rewards.reduce((sum: number, reward: number) => sum + reward, 0);

    if (total === 0) {
      return {
        monthlyPercentage: 0,
        futurePercentage: 0,
        pastPercentage: 0,
      };
    }

    const [monthlyPercentage, futurePercentage, pastPercentage] = rewards.map(
      (reward) => (reward / total) * 100
    );

    return {
      monthlyPercentage,
      futurePercentage,
      pastPercentage,
    };
  };

  const { monthlyPercentage, futurePercentage, pastPercentage } = calculateRewardPercentages(
    monthly_rewards,
    future_rewards,
    past_rewards
  );

  return (
    <StyledPoolsCard accentColor={accentColor}>

      <StyledCard accentColor={accentColor}>

        <StyledCardHeader>

          <StyledCardHeaderText>
            <StyledIcon>
              <IconSvg>{icon}</IconSvg>
            </StyledIcon>

            <div>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="caption">{service}</Typography>
            </div>

          </StyledCardHeaderText>

          <StyledCardHeaderList>
            <li>
              <StyledTypography variant="caption">RPC node runners:&nbsp;</StyledTypography>
              <Typography>{node_runner}</Typography>
            </li>

            <li>
              <StyledTypography variant="caption">Total requests:&nbsp;</StyledTypography>
              <Typography>{requests}</Typography>
            </li>

          </StyledCardHeaderList>

        </StyledCardHeader>

        <StyledCardBody>

          <StyledCardBodyRewards>

            <StyledCardBodyRewardsHeader>
              <div>
                <StyledTypography variant="caption" component="span">Total rewards</StyledTypography>&nbsp;
                <Typography variant="body2" component="span" color={theme.palette.grey[200]}>(Updated in real-time)</Typography>

                <Typography className={sharpGroteskMedium.className} variant="h6">
                  {value}
                </Typography>
              </div>

              <div>
                <StyledTypography variant="caption" component="span">66 days</StyledTypography>&nbsp;
                <Typography variant="caption"  component="span">Sep 28,2024</Typography>
              </div>

            </StyledCardBodyRewardsHeader>

            <StyledCardBodyRewardsProgressbar>
              <StyledBar style={{ backgroundColor: '#FFFFFF', width: `${monthlyPercentage}%` }} />
              <StyledBar style={{ backgroundColor: '#7679FF', width: `${futurePercentage}%` }} />
              <StyledBar style={{ backgroundColor: '#5E6167', width: `${pastPercentage}%` }} />
            </StyledCardBodyRewardsProgressbar>

          </StyledCardBodyRewards>

          <div>
            <PoolsCardData
              chartPointType="white"
              hasCaption
              title="Rewards in this month"
              value={`${monthly_rewards}`}
            />

            <PoolsCardData
              chartPointType="white"
              hasCaption
              title="Rewards in this month"
              value={`${future_rewards}`}
            />

            <PoolsCardData
              chartPointType="white"
              hasCaption
              title="Rewards in this month"
              value={`${past_rewards}`}
            />
          </div>

        </StyledCardBody>

        <Stack direction="row" spacing={2}>
          <Button variant="contained">Run RPC node</Button>
          <Button disabled variant="contained">Restake to RPC provider</Button>
        </Stack>

      </StyledCard>

    </StyledPoolsCard>
  );
};

const StyledPoolsCard = styled('article')<{ accentColor: string }>(({ theme, accentColor }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '1px',
  overflow: 'hidden',

  '&:before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    display: 'block',
    width: '100%',
    height: '100%',
    margin: 'auto',
    borderRadius: '20px',
    border: '1px solid transparent',
    background: `linear-gradient(180deg, #171C26 0%, hsl(from ${accentColor} h s l / 0.5) 100%) border-box`,
    mask: 'linear-gradient(to bottom, black 0, black 100%) content-box, linear-gradient(to bottom, black 0, black 100%)',
    webkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
}));

const StyledCard = styled('div')<{ accentColor: string }>(({ theme, accentColor }) => ({
  flexGrow: '1',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  rowGap: '24px',
  padding: theme.spacing(3),
  borderRadius: '20px',
  background: `
    linear-gradient(
      to bottom,
      hsl(from ${accentColor} h s l / 0.5) 0%,
      rgba(23, 28, 38, 0) 20.11%,
      rgba(23, 28, 38, 0) 92%,
      rgba(23, 28, 38, 0.01) 100%
    ), 
    url("/images/blur_bg_2.png") no-repeat center / cover
    `,
  overflow: 'hidden',
}));

const StyledCardHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
}));

const StyledCardHeaderText = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
}));

const StyledCardHeaderList = styled('ul')(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  '& li': {
    display: 'inline-flex',
    alignItems: 'center',
  }
}));

const StyledCardBody = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledCardBodyRewards = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
}));

const StyledCardBodyRewardsHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  columnGap: '8px',
}));

const StyledCardBodyRewardsProgressbar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  columnGap: '2px',
}));

const StyledIcon = styled('div')({ fontSize: 48 });

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledBar = styled('div')({
  borderRadius: 8,
  height: 8,
});
