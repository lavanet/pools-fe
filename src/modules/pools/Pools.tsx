'use client';

import { styled } from '@mui/material';

import { IPool } from '@/types';
import { PoolsCard } from '@/modules';
import { IconAxelar, IconCelestia, IconEvmos, IconKoli, IconNear, IconStarknet } from '@/icons';

const pools: IPool[] = [
  {
    id: 'near',
    title: 'Near',
    service: 'RPC',
    node_runner: 12,
    requests: 1.6,
    value: '$100,239.53',
    monthly_rewards: 27434.23,
    future_rewards: 220728.83,
    past_rewards: 109348.93,
    accentColor: "#00EC97",
    icon: <IconNear/>,
  },
  {
    id: 'evmos',
    title: 'Evmos',
    service: 'Indexers',
    node_runner: 12,
    requests: 1.6,
    value: '$56,782.29',
    monthly_rewards: 143923.8,
    future_rewards: 100293.2,
    past_rewards: 41726.0,
    accentColor: "#EC4E32",
    icon: <IconEvmos/>,
  },
  {
    id: 'axelar',
    title: 'Axelar',
    service: 'RPC',
    node_runner: 12,
    requests: 1.6,
    value: '$24,882.63',
    monthly_rewards: 39238.58,
    future_rewards: 110342.89,
    past_rewards: 85673.38,
    accentColor: "#FFFFFF",
    icon: <IconAxelar/>,
  },
  {
    id: 'starknet',
    title: 'Starknet',
    service: 'RPC',
    node_runner: 12,
    requests: 1.6,
    value: '$100,239.53',
    monthly_rewards: 27434.23,
    future_rewards: 220728.83,
    past_rewards: 109348.93,
    accentColor: "#EC796B",
    icon: <IconStarknet/>,
  },
  {
    id: 'koli',
    title: 'Koii',
    service: 'Indexers',
    node_runner: 12,
    requests: 1.6,
    value: '$56,782.29',
    monthly_rewards: 27434.23,
    future_rewards: 220728.83,
    past_rewards: 109348.93,
    accentColor: "#6969E7",
    icon: <IconKoli/>,
  },
  {
    id: 'celestia',
    title: 'Celestia',
    service: 'RPC',
    node_runner: 12,
    requests: 1.6,
    value: '$24,882.63',
    monthly_rewards: 27434.23,
    future_rewards: 220728.83,
    past_rewards: 109348.93,
    accentColor: "#7B2BF9",
    icon: <IconCelestia/>,
  },
];

export const Pools = () => (
  <StyledGrid>
    {pools.map((pool, poolIdx) => (
      <PoolsCard
        key={poolIdx}
        {...pool}
      />
    ))}
  </StyledGrid>
);

const StyledGrid = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(380px,1fr))',
  gap: '12px',
  paddingBottom: theme.spacing(8),
  paddingTop: theme.spacing(8),
}));
