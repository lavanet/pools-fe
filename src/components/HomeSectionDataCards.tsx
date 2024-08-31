'use client';

import { Grid, styled } from '@mui/material';

import { IDataCard } from '@/types';
import { DataCardItem } from '@/components';

const homeSectionDataCards: IDataCard[] = [
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

export const HomeSectionDataCards = () => (
  <StyledGrid>
    {homeSectionDataCards.map((card) => (
      <DataCardItem {...card} key={card.title}/>
    ))}
  </StyledGrid>
);

const StyledGrid = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(1.5),

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(331px,1fr))',
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  }
}));
