import { HomeData, IChain, IDataCard, IPool, ProcessedHomeData } from '@/types';
import { getChainInfo } from '@/utils/chainInfo';
import { formatLargeNumber } from '@/utils/formatters';

export async function fetchHomeData(): Promise<HomeData> {
  const apiUrl = process.env.NEXT_PUBLIC_LAVAPOOL_BE_URL;
  if (!apiUrl) {
    throw new Error('API URL is not defined in environment variables');
  }

  const res = await fetch(`${apiUrl}/home/`, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch home data: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export function processHomeData(data: HomeData): ProcessedHomeData {
  const dataCards: IDataCard[] = [
    { title: 'Total requests', value: formatLargeNumber(data.total_requests) },
    { title: 'Total rewards, USD', value: `$${formatLargeNumber(data.total_rewards)}`, message: 'Updated in real-time' },
    { title: 'Distributed rewards, USD', value: `$${formatLargeNumber(data.total_past_rewards)}` },
    { title: 'Upcoming rewards, USD', value: `$${formatLargeNumber(data.total_future_rewards)}` },
  ];

  const pools: IPool[] = data.chains
    .filter(chain => chain.total_rewards > 0)
    .map(chain => ({
      id: chain.id.toLowerCase(),
      title: chain.clean_name,
      service: chain.service,
      node_runner: chain.rpc_node_runners,
      requests: chain.total_requests,
      value: `$${formatLargeNumber(chain.total_rewards)}`,
      currency: chain.denom || chain.id,
      monthly_rewards: chain.rewards_per_month,
      future_rewards: parseFloat(chain.future_rewards),
      past_rewards: parseFloat(chain.past_rewards),
      icon: getChainInfo(chain.id, 'icon'),
    }));

  const chains: IChain[] = data.chains
    .filter(chain => chain.total_rewards === 0)
    .map(chain => ({
      name: chain.clean_name,
      requests: chain.total_requests,
      rpcProviders: chain.rpc_node_runners,
      service: chain.service,
    }));

  return { dataCards, pools, chains };
}

export async function fetchProcessedHomeData(): Promise<ProcessedHomeData> {
  const rawData = await fetchHomeData();
  const processedData = processHomeData(rawData);
  return processedData;
}
