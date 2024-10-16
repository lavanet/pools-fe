import { IChain, IDataCard, IPool, ProcessedHomeData } from '@/types';
import { getChainInfo } from '@/utils/chainInfo';
import { formatNumber } from '@/utils/formatters';

type RawHomeData = {
  chains: Array<{
    chain_id?: string;
    clean_name?: string;
    service?: string;
    rpc_node_runners?: number;
    total_requests?: number;
    total_rewards?: number;
    denom?: string;
    rewards_per_month?: number;
    future_rewards?: number;
    past_rewards?: number;
    months_remaining?: number;
    estimated_apr?: number;
    current_rewards: number;
    rewards_end?: string;
    rewards_days_remaining?: number;
  }>;
  total_requests?: number;
  total_rewards?: number;
  total_past_rewards?: number;
  total_future_rewards?: number;
};

export async function fetchHomeData(): Promise<RawHomeData> {
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

export function processHomeData(data: RawHomeData): ProcessedHomeData {
  const dataCards: IDataCard[] = [
    { title: 'Total requests', value: data.total_requests ? formatNumber(data.total_requests) : 'N/A' },
    { title: 'Total rewards, USD', value: data.total_rewards ? `$${formatNumber(data.total_rewards)}` : 'N/A', message: 'Updated in real-time' },
    { title: 'Distributed rewards, USD', value: data.total_past_rewards ? `$${formatNumber(data.total_past_rewards)}` : 'N/A' },
    { title: 'Upcoming rewards, USD', value: data.total_future_rewards ? `$${formatNumber(data.total_future_rewards)}` : 'N/A' },
  ];

  const pools: IPool[] = data.chains
    .filter(chain => chain.total_rewards && chain.total_rewards > 0)
    .map(chain => ({
      id: chain.chain_id ? chain.chain_id.toLowerCase() : 'N/A',
      title: chain.clean_name || 'N/A',
      service: chain.service || 'N/A',
      node_runner: chain.rpc_node_runners || 0,
      requests: chain.total_requests || 0,
      value: chain.total_rewards ? `$${formatNumber(chain.total_rewards, true)}` : 'N/A',
      currency: chain.denom ? chain.denom.toUpperCase() : 'N/A',
      monthly_rewards: chain.current_rewards || 0,
      future_rewards: chain.future_rewards || 0,
      past_rewards: chain.past_rewards || 0,
      icon: getChainInfo(chain.chain_id ? chain.chain_id.toLowerCase() : 'N/A', 'icon'),
      months_remaining: chain.months_remaining || 0,
      estimated_apr: chain.estimated_apr || 0,
      rewards_end: chain.rewards_end || 'TBD',
      rewards_days_remaining: chain.rewards_days_remaining
    }));

  const chains: IChain[] = data.chains
    .filter(chain => !chain.total_rewards || chain.total_rewards === 0)
    .map(chain => ({
      name: chain.clean_name || 'N/A',
      requests: chain.total_requests || 0,
      rpcProviders: chain.rpc_node_runners || 0,
      service: chain.service || 'N/A',
    }));

  return { dataCards, pools, chains };
}

export async function fetchProcessedHomeData(): Promise<ProcessedHomeData> {
  const rawData = await fetchHomeData();
  return processHomeData(rawData);
}
