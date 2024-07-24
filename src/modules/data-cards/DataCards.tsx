import { Grid } from '@mui/material';

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
  <Grid container spacing={1.5}>
    {dataCards.map((card) => (
      <Grid key={card.title} item xs={3}>
        <DataCardItem {...card} />
      </Grid>
    ))}
  </Grid>
);
