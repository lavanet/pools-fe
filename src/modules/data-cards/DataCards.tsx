'use client';

import { Grid, styled } from '@mui/material';

import { IDataCard } from '@/types';
import { DataCardItem } from '@/modules';

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

export const DataCards = () => (
  <StyledGrid>
    {dataCards.map((card) => (
      <DataCardItem {...card} key={card.title}/>
    ))}
  </StyledGrid>
);

const StyledGrid = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '12px',

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(331px,1fr))',
  }
}));
