'use client';

import { styled } from '@mui/material';

import { IProduct } from '@/types';
import { HomeSectionProductsItem } from '@/components';

const homeSectionProducts: IProduct[] = [
  {
    text: 'Smooth UI and analytics for your RPC endpoints',
    title: 'Gateway',
    type: 'red',
  },
  {
    text: 'Get the low-down on the Lava blockchain with Lava Info',
    title: 'Lava Info',
    type: 'orange',
  },
  {
    text: 'See how Providers perform with rich Analytics',
    title: 'Provider analytics',
    type: 'orange',
  },
];

export const HomeSectionProducts = () => (
  <StyledGrid>
    {homeSectionProducts.map((product) => (
      <HomeSectionProductsItem
        key={product.title}
        {...product}
      />
    ))}
  </StyledGrid>
);

const StyledGrid = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'unset',
  gap: 12,
  paddingBottom: theme.spacing(13),
  paddingTop: theme.spacing(3),

  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'stretch',
    paddingBottom: theme.spacing(13),
    paddingTop: theme.spacing(3),
  }
}));
