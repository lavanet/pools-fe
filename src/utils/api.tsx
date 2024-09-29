import { IDataCard, IPool, IChain } from '@/types';
import { getIconForChain } from './chainIcons';

// Interface for the shape of chain data received from the API
interface ChainData {
  id: string;
  clean_name: string;
  service: string;
  rpc_node_runners: number;
  total_requests: number | string;
  total_rewards: number;
  denom: string;
  rewards_per_month: number | string;
  future_rewards: number | string;
  past_rewards: number | string;
}

// Interface for the shape of data returned by fetchHomeData
export interface HomeData {
  dataCards: IDataCard[];
  pools: IPool[];
  chains: IChain[];
}

// Function to format large numbers into a more readable format
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

// Main function to fetch home data from the API
export async function fetchHomeData(): Promise<HomeData> {
  const apiUrl = process.env.NEXT_PUBLIC_LAVAPOOL_BE_URL;
  if (!apiUrl) {
    throw new Error('API URL is not defined in environment variables');
  }

  try {
    // Fetch data from the API
    const response = await fetch(`${apiUrl}/home/`, { next: { revalidate: 30 } });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Format data cards
    const dataCards: IDataCard[] = [
      { title: 'Total requests', value: formatLargeNumber(data.total_requests) },
      { title: 'Total rewards, USD', value: `$${formatLargeNumber(data.total_rewards)}`, message: 'Updated in real-time' },
      { title: 'Distributed rewards, USD', value: `$${formatLargeNumber(data.total_past_rewards)}` },
      { title: 'Upcoming rewards, USD', value: `$${formatLargeNumber(data.total_future_rewards)}` },
    ];

    // Process chains data into pools and chains
    const { pools, chains } = data.chains.reduce((acc: { pools: IPool[], chains: IChain[] }, chain: ChainData) => {
      if (chain.total_rewards > 0) {
        // Add to pools if there are rewards
        acc.pools.push({
          id: chain.id.toLowerCase(),
          title: chain.clean_name,
          service: chain.service,
          node_runner: chain.rpc_node_runners,
          requests: parseFloat(formatLargeNumber(chain.total_requests)),
          value: `$${formatLargeNumber(chain.total_rewards)}`,
          currency: chain.denom || chain.id,
          monthly_rewards: parseFloat(String(chain.rewards_per_month)) || 0,
          future_rewards: parseFloat(String(chain.future_rewards)) || 0,
          past_rewards: parseFloat(String(chain.past_rewards)) || 0,
          icon: getIconForChain(chain.clean_name),
        });
      } else {
        // Add to chains if no rewards
        acc.chains.push({
          name: chain.clean_name,
          requests: parseFloat(String(chain.total_requests)),
          rpcProviders: chain.rpc_node_runners,
          service: chain.service,
        });
      }
      return acc;
    }, { pools: [], chains: [] });

    // Return formatted data
    return { dataCards, pools, chains };
  } catch (error) {
    console.error('Error fetching home data:', error);
    throw new Error('Failed to load home data. Please try again later.');
  }
}
