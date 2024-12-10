import { IDataCard, IProduct } from '@/types';

export const homeSectionDataCards: IDataCard[] = [
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

export const homeSectionProducts: IProduct[] = [
  {
    text: 'Smooth UI and analytics for your RPC endpoints',
    title: 'Gateway',
    type: 'red',
    link: 'https://accounts.lavanet.xyz/register?utm_source=homepage&utm_medium=above_footer&utm_campaign=website_to_gateway&utm_content=try_gateway',
  },
  {
    text: 'Get the low-down on the Lava blockchain with Lava Info',
    title: 'Lava Info',
    type: 'orange',
    link: 'https://info.lavanet.xyz/?utm_source=above-footer&utm_medium=website&utm_campaign=website-to-lavainfo',
  },
  {
    text: 'See how Providers perform with rich Analytics',
    title: 'Provider analytics',
    type: 'orange',
    link: 'https://info.lavanet.xyz/?utm_source=above-footer&utm_medium=website&utm_campaign=website-to-provider-analytics',
  },
];