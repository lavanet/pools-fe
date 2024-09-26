import { IDataCard, IPool, IChain } from '@/types';

const formatLargeNumber = (value: number | string): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return 'Invalid Number';

  const formatNumber = (n: number, decimals: number) => {
    const formatted = n.toFixed(decimals);
    return formatted.endsWith('.00') ? formatted.slice(0, -3) : formatted;
  };

  if (numValue >= 1000000) {
    return `${formatNumber(numValue / 1000000, 2)}M`;
  } else if (numValue >= 1000) {
    return `${formatNumber(numValue / 1000, 2)}K`;
  } else {
    return formatNumber(numValue, 2);
  }
};

export async function fetchHomeData(): Promise<HomeData> {
  const apiUrl = process.env.NEXT_PUBLIC_LAVAPOOL_BE_URL;
  if (!apiUrl) {
    throw new Error('API URL is not defined in environment variables');
  }

  try {
    const response = await fetch(`${apiUrl}/home/`, { next: { revalidate: 30 } });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const dataCards: IDataCard[] = [
      {
        title: 'Total requests',
        value: formatLargeNumber(data.total_requests),
      },
      {
        title: 'Total rewards, USD',
        value: `$${formatLargeNumber(data.total_rewards)}`,
        message: 'Updated in real-time',
      },
      {
        title: 'Distributed rewards, USD',
        value: `$${formatLargeNumber(data.total_past_rewards)}`,
      },
      {
        title: 'Upcoming rewards, USD',
        value: `$${formatLargeNumber(data.total_future_rewards)}`,
      },
    ];

    return {
      dataCards,
      pools: data.chains,
      chains: data.chains,
    };
  } catch (error) {
    console.error('Error fetching home data:', error);
    throw new Error('Failed to load home data. Please try again later.');
  }
}

interface HomeData {
  dataCards: IDataCard[];
  pools: IPool[];
  chains: IChain[];
}
