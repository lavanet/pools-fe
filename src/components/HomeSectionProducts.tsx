'use client';

import { Stack, styled } from '@mui/material';

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
  <StyledGrid spacing={1.5} useFlexGap>
    {homeSectionProducts.map((product) => (
      <HomeSectionProductsItem
        key={product.title}
        {...product}
      />
    ))}
  </StyledGrid>
);

const StyledGrid = styled(Stack)(({ theme }) => ({
  flexDirection: 'unset',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  paddingBottom: theme.spacing(13),
  paddingTop: theme.spacing(3),
}));
