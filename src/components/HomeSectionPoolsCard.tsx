'use client';

import { Button, Stack, styled, Typography, TypographyProps } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { sharpGroteskMedium } from '@/types/fonts';
import { theme } from '@/contexts';
import { IPool } from '@/types';
import { HomeSectionPoolsCardData, IconSvg } from '@/components';

type PoolsCardProps = IPool;

export const HomeSectionPoolsCard = (
  {
    title,
    service,
    node_runner,
    requests,
    value,
    currency,
    monthly_rewards,
    future_rewards,
    past_rewards,
    icon,
    accentColor,
  }: PoolsCardProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

        <StyledCardHeader useFlexGap spacing={2} direction={isMobile? 'column' : 'row'}>

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

        <Stack useFlexGap spacing={3}>

          <Stack useFlexGap spacing={1}>

            <StyledCardBodyRewardsHeader
              useFlexGap
              spacing={0.5}
              direction={isMobile? 'column' : 'row'}
            >
              <span>
                <StyledTypography variant="caption" component="span">Total rewards</StyledTypography>&nbsp;
                <Typography variant="body2" component="span" color={theme.palette.grey[200]}>(Updated in real-time)</Typography>
              </span>

              <Typography className={sharpGroteskMedium.className} variant="h6">
                {value}
              </Typography>

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

          </Stack>

          <div>
            <HomeSectionPoolsCardData
              chartPointType="white"
              title="Rewards in this month"
              value={`${monthly_rewards}`}
              caption={currency}
            />

            <HomeSectionPoolsCardData
              chartPointType="blue"
              title="Future rewards"
              value={`${future_rewards}`}
              caption={currency}
            />

            <HomeSectionPoolsCardData
              chartPointType="grey"
              title="Past rewards"
              value={`${past_rewards}`}
              caption={currency}
            />
          </div>

        </Stack>

        <StyledCardFooter useFlexGap direction="row" spacing={1}>
          <Button variant="contained">Run RPC node</Button>
          <Button disabled variant="contained">Restake to RPC provider</Button>
        </StyledCardFooter>

      </StyledCard>

    </StyledPoolsCard>
  );
};

const StyledPoolsCard = styled('article')<{ accentColor: string }>(({ theme, accentColor }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '1px',
  borderRadius: '20px',
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
  rowGap: theme.spacing(3),
  padding: theme.spacing(3),
  borderRadius: '20px',
  background: `
    linear-gradient(
      180deg,
      hsl(from ${accentColor} h s l / 0.5) 0%,
      rgba(23, 28, 38, 0) 15.11%,
      rgba(23, 28, 38, 0) 92%,
      rgba(23, 28, 38, 0.01) 100%
    ), 
    url("/images/lava-grain-bg-x2.webp") no-repeat center / cover
    `,
  overflow: 'hidden',
}));

const StyledCardHeader = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  ' > *': {
    flex: '1',
  },

  [theme.breakpoints.down('md')]: {
    alignItems: 'unset',
    justifyContent: 'unset',
  },
}));

const StyledCardHeaderText = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
}));

const StyledIcon = styled('div')({ fontSize: 48 });

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

const StyledCardBodyRewardsHeader = styled(Stack)(({ theme }) => ({
  flexWrap: 'wrap',
  justifyContent: 'space-between',

  '& span': {
    flex: '0 0 100%',
  }
}));

const StyledCardBodyRewardsProgressbar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  flexWrap: 'nowrap',
  columnGap: '2px',
}));

const StyledCardFooter = styled(Stack)(({ theme }) => ({
  flexWrap: 'wrap',

  '> *': {
    flexGrow: '1',
  },
}));

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[100],
}));

const StyledBar = styled('div')({
  borderRadius: 8,
  height: 8,
});
