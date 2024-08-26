'use client';

import { Grid, styled } from '@mui/material';

import { IPool } from '@/types';
import { PoolsCard } from '@/modules';

const pools: IPool[] = [
  { service: 'RPC', title: 'Near', type: 'near', value: '$100,239.53' },
  { service: 'Indexers', title: 'Evmos', type: 'evmos', value: '$56,782.29' },
  { service: 'RPC', title: 'Axelar', type: 'axelar', value: '$24,882.63' },
  { service: 'RPC', title: 'Starknet', type: 'starknet', value: '$100,239.53' },
  { service: 'Indexers', title: 'Koii', type: 'koli', value: '$56,782.29' },
  { service: 'RPC', title: 'Celestia', type: 'celestia', value: '$24,882.63' },
];

export const Pools = () => (
  <StyledGrid>
    {pools.map((pool, index) => (
      <PoolsCard index={index} {...pool}  key={pool.title}/>
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
