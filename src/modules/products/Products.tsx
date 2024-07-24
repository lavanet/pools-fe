'use client';

import { Grid, styled } from '@mui/material';

import { IProduct } from '@/types';
import { ProductsItem } from '@/modules';

const products: IProduct[] = [
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

export const Products = () => (
  <StyledGrid container spacing={1.5}>
    {products.map((product) => (
      <Grid key={product.title} item xs={4}>
        <ProductsItem {...product} />
      </Grid>
    ))}
  </StyledGrid>
);

const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(13),
  paddingTop: theme.spacing(3),
}));
